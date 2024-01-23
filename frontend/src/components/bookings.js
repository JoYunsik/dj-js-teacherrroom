import './bookings.css'
import React, { useCallback, useMemo, useState } from 'react';
import { Button, Modal, notification, Alert } from 'antd';
import { useDispatch, useSelector} from 'react-redux';
import {insert,remove} from "../modules/events";
import { ExclamationCircleOutlined } from '@ant-design/icons';

const Bookings = ()=>{
    const {currDate, currYear, currMonth, currDay} = useSelector(({dateinfo})=>({
      currDate: dateinfo.currDate,
      currYear: dateinfo.currYear, 
      currMonth: dateinfo.currMonth, 
      currDay: dateinfo.currDay,
    }))
    const {currRoom, rooms} = useSelector(({rooms})=>({
      currRoom:rooms.currRoom,
      rooms: rooms.rooms
    }));
    const {events} = useSelector(({events})=>({
      events:events
    }))
    const dispatch = useDispatch();
    const eventInsert = useCallback((event)=>dispatch(insert(event)),[dispatch])
    const eventRemove = useCallback((id)=>dispatch(remove(id)),[dispatch]) 
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [gradeText, setGradeText] = useState('');
    const [classText, setClassText] = useState('');
    const [exclusiveText, setExclusiveText] = useState('');
    const [kindergardenText, setKindergardenText] = useState('');
    const [eventSample, setEventSample] = useState({
      date:'',
      year:'',
      month:'',
      time:'',
      room:'',
      event:'',
    });
    // 방에 예약할 수 있는 max값을 가져옴.
    const getMaxRoom = ()=>{
      return rooms.filter(room=>room.id==currRoom)[0].max;
    }
    const max = useMemo(()=>getMaxRoom(),[currRoom,rooms]);
    // 예약이 비었는지 check
    const fullCheck = (bookingDate,bookingYear,bookingMonth,bookingIndex,currRoom) =>{
      const eventCheck = events.filter(event => 
        event.date === bookingDate &&
        event.year === bookingYear &&
        event.month === bookingMonth &&
        event.time === bookingIndex &&
        event.room === currRoom 
      );
      return getMaxRoom() > eventCheck.length;
    }
    // 박스 눌렀을때
    const onBoxClick = (e) => {
      notification.destroy();
      let bookingDate =''
      let bookingMonth=''
      let bookingYear =''
      const parentNodes = [...e.target.parentElement.children];
      const bookingIndex = parentNodes.indexOf(e.target);
      if(e.target.parentElement.classList.contains('monday')){
        bookingDate = new Date(currYear, currMonth, currDate+(1-currDay)).getDate();
        bookingMonth =new Date(currYear, currMonth, currDate+(1-currDay)).getMonth();
        bookingYear = new Date(currYear, currMonth, currDate+(1-currDay)).getFullYear();
      }
      if(e.target.parentElement.classList.contains('tuesday')){
        bookingDate = new Date(currYear, currMonth, currDate+(2-currDay)).getDate();
        bookingMonth =new Date(currYear, currMonth, currDate+(2-currDay)).getMonth();
        bookingYear = new Date(currYear, currMonth, currDate+(2-currDay)).getFullYear();
      }
      if(e.target.parentElement.classList.contains('wednesday')){
        bookingDate = new Date(currYear, currMonth, currDate+(3-currDay)).getDate();
        bookingMonth =new Date(currYear, currMonth, currDate+(3-currDay)).getMonth();
        bookingYear = new Date(currYear, currMonth, currDate+(3-currDay)).getFullYear();
      }
      if(e.target.parentElement.classList.contains('thursday')){
        bookingDate = new Date(currYear, currMonth, currDate+(4-currDay)).getDate();
        bookingMonth =new Date(currYear, currMonth, currDate+(4-currDay)).getMonth();
        bookingYear = new Date(currYear, currMonth, currDate+(4-currDay)).getFullYear();
      }
      if(e.target.parentElement.classList.contains('friday')){
        bookingDate = new Date(currYear, currMonth, currDate+(5-currDay)).getDate();
        bookingMonth =new Date(currYear, currMonth, currDate+(5-currDay)).getMonth();
        bookingYear = new Date(currYear, currMonth, currDate+(5-currDay)).getFullYear();
      }
      if(fullCheck(bookingDate,bookingYear,bookingMonth,bookingIndex,currRoom)){
        setOpen(true);
        setEventSample(()=>({
          event:'',
          date:bookingDate,
          year:bookingYear,
          month:bookingMonth,
          time:bookingIndex,
          room:currRoom,
        }))
      } else {
        console.log('fail');
        openFullNotification();
      }
      
    };
    // 알림창 생성 함수
    const openInputNotification = (input) => {
      notification.info({
        message: '오류 알림',
        description:
          `${input}을 입력하세요.`,
        placement: 'top',
        icon: <ExclamationCircleOutlined style={{color:'#FFC300', fontSize:'1.5rem'}} />
      });
    };
    const openFullNotification = () => {
      notification.info({
        message: '오류 알림',
        description:
          '더 이상 예약할 수 없습니다.',
        placement: 'top',
        icon: <ExclamationCircleOutlined style={{color:'#FFC300', fontSize:'1.5rem'}} />,
      });
    };

    const resetInputs = ()=>{
      setGradeText('');
      setClassText('');
      setExclusiveText('');
      setKindergardenText('');
    }
    // 모달 ok버튼 눌렀을때
    const handleOk = () => {
      if(gradeText=="" && classText=="" && exclusiveText=="" && kindergardenText=="" ){
        openInputNotification('예약할 내용')
        return;
      }
      if(gradeText!=="" && classText==""){
        openInputNotification('반');
        return;
      }
      if(gradeText=="" && classText!==""){
        openInputNotification('학년')
        return;
      }
      if(gradeText!=="" && classText!==""){
        const newEvent = {
          ...eventSample,
          event: `${gradeText}-${classText}`,
        };
        setEventSample(newEvent);
        eventInsert(newEvent);
        resetInputs();
        notification.destroy();
        setConfirmLoading(true);
        setOpen(false);
        setConfirmLoading(false);
      }
      else if(exclusiveText!==""){
        const newEvent = {
          ...eventSample,
          event: exclusiveText,
        };
        setEventSample(newEvent);
        eventInsert(newEvent);
        resetInputs();
        notification.destroy();
        setConfirmLoading(true);
        setOpen(false)
        setConfirmLoading(false)
      }
      else if(kindergardenText!==""){
        const newEvent = {
          ...eventSample,
          event: kindergardenText,
        };
        setEventSample(newEvent);
        eventInsert(newEvent);
        resetInputs();
        notification.destroy();
        setConfirmLoading(true);
        setOpen(false)
        setConfirmLoading(false)
      }
      else {
        console.log('fail');
      }
      
      // setTimeout(() => {
      //   setOpen(false);
      //   setConfirmLoading(false);
      // }, 2000);
    };
    // 모달 닫았을때
    const handleCancel = () => {
        resetInputs();
        notification.destroy();
        setOpen(false);
    };
    // 모달 입력창 관리
    const onChangeGradeText = (e) =>{
      if (e.target.value.length > 1) {
        e.target.value = e.target.value.slice(0, 1);
        setGradeText(e.target.value);
      }
      else{
        setGradeText(e.target.value);
      }
      setExclusiveText('');
      setKindergardenText('');
    };
    const onChangeClassText = (e) =>{
      if (e.target.value.length > 1) {
        e.target.value = e.target.value.slice(0, 1);
        setClassText(e.target.value);
      }
      else{
        setClassText(e.target.value);
      }
      setExclusiveText('');
      setKindergardenText('');
    };
    const onChangeKindergardenText = (e)=>{
      if (e.target.value.length > 3) {
        e.target.value = e.target.value.slice(0, 3);
        setKindergardenText(e.target.value);
      }
      else{
        setKindergardenText(e.target.value);
      }
      setGradeText('');
      setClassText('');
      setExclusiveText('');
    };
    const onChangeExclusiveText = (e)=>{
      if (e.target.value.length > 3) {
        e.target.value = e.target.value.slice(0, 3);
        setExclusiveText(e.target.value);
      }
      else{
        setExclusiveText(e.target.value);
      }
      setGradeText('');
      setClassText('');
      setKindergardenText('');
    };
    return(
        <div className="bookings">
          <div className="day-wrapper monday">
            <Button id='1' className="booking empty" onClick={onBoxClick}></Button>
            <Button id='2' className="booking empty" onClick={onBoxClick}></Button>
            <Button id='3' className="booking empty" onClick={onBoxClick}></Button>
            <Button id='4'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='5'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='6'className="booking empty" onClick={onBoxClick}></Button>
          </div>
          <div className="day-wrapper tuesday">
            <Button id='1'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='2'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='3'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='4'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='5'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='6'className="booking empty" onClick={onBoxClick}></Button>
          </div>
          <div className="day-wrapper wednesday">
            <Button id='1'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='2'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='3'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='4'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='5'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='6'className="booking empty" onClick={onBoxClick}></Button>
          </div>
          <div className="day-wrapper thursday">
            <Button id='1'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='2'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='3'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='4'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='5'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='6'className="booking empty" onClick={onBoxClick}></Button>
          </div>
          <div className="day-wrapper friday">
            <Button id='1'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='2'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='3'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='4'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='5'className="booking empty" onClick={onBoxClick}></Button>
            <Button id='6'className="booking empty" onClick={onBoxClick}></Button>
          </div>
          <Modal
            centered
            title="Title"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            className='modal'
          >
            <div className='add-event-wrapper'>
              <div className="add-event-body">
                <div className="add-event-left">
                  <div className="add-event-input">
                    <input type="number" placeholder="학년" value={gradeText}className="grade" onChange={onChangeGradeText} />
                    <label> 학년</label>
                  </div>
                  <div className="add-event-input">
                    <input type="number" placeholder="반" value={classText} className="class" onChange={onChangeClassText}/>
                    <label>반</label>
                  </div>
                </div>
                <div className="add-event-right">
                  <div className="add-event-input">
                    <input type="text" placeholder="전담교사" value={exclusiveText} className="exclusive" onChange={onChangeExclusiveText} />
                    <label>전담교사</label>
                  </div>
                  <div className="add-event-input">
                  <input type="text" placeholder="유치원/특수" value={kindergardenText} className="kindergarden" onChange={onChangeKindergardenText} />
                  <label>반</label>
                </div>
              </div>
            </div>
            </div>
          </Modal>
        </div>
    )
}

export default Bookings;