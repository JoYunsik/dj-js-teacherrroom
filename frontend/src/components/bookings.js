import './bookings.css'
import React, { useCallback, useState } from 'react';
import { notification } from 'antd';
import { useDispatch, useSelector} from 'react-redux';
import {insert,remove,removeDefault,clearEvents} from "../modules/events";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import DateBox from './dateBox';
import ModalInputs from './modalInputs';

const Bookings = ({defaultsetting})=>{

    const {currDate, currYear, currMonth, currDay} = useSelector(({dateinfo})=>({
      currDate: dateinfo.currDate,
      currYear: dateinfo.currYear, 
      currMonth: dateinfo.currMonth, 
      currDay: dateinfo.currDay,
    }))
    const weekdata = useSelector(({weekdata})=>weekdata);
    const {currRoom, rooms} = useSelector(({rooms})=>({
      currRoom:rooms.currRoom,
      rooms: rooms.rooms
    }));
    const {events} = useSelector(({events})=>({
      events:events
    }))
    const dispatch = useDispatch();
    const eventInsert = useCallback((event)=>dispatch(insert(event)),[dispatch]);
    const eventRemove = useCallback((id)=>dispatch(remove(id)),[dispatch]);
    const eventRemoveDefault = useCallback((event)=>dispatch(removeDefault(event)),[dispatch]);
    const handleClearEvents = useCallback((event)=>dispatch(clearEvents(event)),[dispatch]);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [gradeText, setGradeText] = useState('');
    const [classText, setClassText] = useState('');
    const [exclusiveText, setExclusiveText] = useState('');
    const [kindergardenText, setKindergardenText] = useState('');
    const [eventSample, setEventSample] = useState({
      date:'',
      year:'',
      month:'',
      time:'',
      room:1,
      event:'',
    });
    // 방에 예약할 수 있는 max값을 가져옴.
    const getMaxRoom = ()=>{
      return rooms.filter(room=>room.id===currRoom)[0].max;
    }
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
      e.preventDefault();
      e.stopPropagation();
      notification.destroy();
      let bookingDate =''
      let bookingMonth=''
      let bookingYear =''
      let target=''
      let bookingIndex=''
      if(e.target.classList.contains('event-title')){
        target = e.target.parentElement.parentElement.parentElement
      } else{
        target = e.target.parentElement
      }
      const parentNodes = [...target.children];
      if(e.target.classList.contains('event-title')){
        bookingIndex = parentNodes.indexOf(e.target.parentElement.parentElement)
      } else{
        bookingIndex = parentNodes.indexOf(e.target)
      }
      if(target.classList.contains('0')){
        bookingDate = new Date(currYear, currMonth, currDate+(1-currDay)).getDate();
        bookingMonth =new Date(currYear, currMonth, currDate+(1-currDay)).getMonth();
        bookingYear = new Date(currYear, currMonth, currDate+(1-currDay)).getFullYear();
      }
      if(target.classList.contains('1')){
        bookingDate = new Date(currYear, currMonth, currDate+(2-currDay)).getDate();
        bookingMonth =new Date(currYear, currMonth, currDate+(2-currDay)).getMonth();
        bookingYear = new Date(currYear, currMonth, currDate+(2-currDay)).getFullYear();
      }
      if(target.classList.contains('2')){
        bookingDate = new Date(currYear, currMonth, currDate+(3-currDay)).getDate();
        bookingMonth =new Date(currYear, currMonth, currDate+(3-currDay)).getMonth();
        bookingYear = new Date(currYear, currMonth, currDate+(3-currDay)).getFullYear();
      }
      if(target.classList.contains('3')){
        bookingDate = new Date(currYear, currMonth, currDate+(4-currDay)).getDate();
        bookingMonth =new Date(currYear, currMonth, currDate+(4-currDay)).getMonth();
        bookingYear = new Date(currYear, currMonth, currDate+(4-currDay)).getFullYear();
      }
      if(target.classList.contains('4')){
        bookingDate = new Date(currYear, currMonth, currDate+(5-currDay)).getDate();
        bookingMonth =new Date(currYear, currMonth, currDate+(5-currDay)).getMonth();
        bookingYear = new Date(currYear, currMonth, currDate+(5-currDay)).getFullYear();
      }
      if(defaultsetting || fullCheck(bookingDate,bookingYear,bookingMonth,bookingIndex,currRoom)){
        setOpen(true);
        setEventSample(()=>({
          event:'',
          date:bookingDate,
          year:bookingYear,
          month:bookingMonth,
          time:bookingIndex,
          room:currRoom,
          defaultevent: defaultsetting
        }))
      } else {
        console.log('fail');
        openFullNotification();
      }
      
    };
    // 삭제 버튼을 클릭
    const onDeleteClick =(e,event,defaultsetting)=>{
      e.stopPropagation();
      if(!defaultsetting){
        eventRemove(event.id);
      }else {
        const currYear = event.year
        let date = event.date;
        let year = event.year;
        let month = event.month;
        let room = event.room;
        let eventName = event.event;
        let time = event.time;
        while(year===currYear){
          let tmpYear = new Date(year,month,date).getFullYear();
          let tmpMonth = new Date(year, month,date).getMonth();
          let tmpDate = new Date(year,month,date).getDate();
          eventRemoveDefault({
            date:tmpDate,
            year:tmpYear,
            month:tmpMonth,
            time:time,
            room:room,
            event: eventName,
            defaultevent:true
          })
          year=tmpYear;
          month=tmpMonth;
          date=tmpDate+7;
        }
      }
    }
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
    // 이벤트 추가 과정 함수 
    const addEventProcess =(newEvent, defaultsetting)=>{
      if(!defaultsetting){
        eventInsert(newEvent);
        resetInputs();
        notification.destroy();
        setConfirmLoading(true);
        setOpen(false);
        setConfirmLoading(false);
      } else if(defaultsetting){
        const currYear = newEvent.year
        let date = newEvent.date;
        let year = newEvent.year;
        let month = newEvent.month;
        let room = newEvent.room;
        let event = newEvent.event;
        let time = newEvent.time;
        handleClearEvents({
          date,year,month,time,room
        })
        eventInsert(newEvent);
        while(year===currYear){
          date+=7;
          let tmpYear = new Date(year,month,date).getFullYear();
          let tmpMonth = new Date(year, month,date).getMonth();
          let tmpDate = new Date(year,month,date).getDate();
          handleClearEvents({
            date:tmpDate,
            year:tmpYear,
            month:tmpMonth,
            time:time,
            room:room,
          });
          eventInsert({
            date:tmpDate,
            year:tmpYear,
            month:tmpMonth,
            time:time,
            room:room,
            event: event,
            defaultevent:true
          })
          year=tmpYear;
          month=tmpMonth;
          date=tmpDate;
        }
        resetInputs();
        notification.destroy();
        setConfirmLoading(true);
        setOpen(false);
        setConfirmLoading(false);
      }
    }
    // 모달 ok버튼 눌렀을때
    const handleOk = () => {
      if(gradeText==="" && classText==="" && exclusiveText==="" && kindergardenText==="" ){
        openInputNotification('예약할 내용')
        return;
      }
      if(gradeText!=="" && classText===""){
        openInputNotification('반');
        return;
      }
      if(gradeText==="" && classText!==""){
        openInputNotification('학년')
        return;
      }
      if(gradeText!=="" && classText!==""){
        const newEvent = {
          ...eventSample,
          event: `${gradeText}-${classText}`,
        };
        addEventProcess(newEvent,defaultsetting);
      }
      else if(exclusiveText!==""){
        const newEvent = {
          ...eventSample,
          event: exclusiveText,
        };
        addEventProcess(newEvent,defaultsetting);
      }
      else if(kindergardenText!==""){
        const newEvent = {
          ...eventSample,
          event: kindergardenText,
        };
        addEventProcess(newEvent,defaultsetting);
      }
      else {
        console.log('fail');
      }
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
          {weekdata.map((data, idx) => (
            <div className={`day-wrapper ${idx}`} key={idx}>
              <DateBox id='0' idx={idx + 1} onBoxClick={onBoxClick} onDeleteClick={onDeleteClick}weekdata={data} events={events} currRoom={currRoom} defaultsetting={defaultsetting}></DateBox>
              <DateBox id='1' idx={idx + 1} onBoxClick={onBoxClick} onDeleteClick={onDeleteClick}weekdata={data} events={events} currRoom={currRoom} defaultsetting={defaultsetting}></DateBox>
              <DateBox id='2' idx={idx + 1} onBoxClick={onBoxClick} onDeleteClick={onDeleteClick}weekdata={data} events={events} currRoom={currRoom} defaultsetting={defaultsetting}></DateBox>
              <DateBox id='3' idx={idx + 1} onBoxClick={onBoxClick} onDeleteClick={onDeleteClick}weekdata={data} events={events} currRoom={currRoom} defaultsetting={defaultsetting}></DateBox>
              <DateBox id='4' idx={idx + 1} onBoxClick={onBoxClick} onDeleteClick={onDeleteClick}weekdata={data} events={events} currRoom={currRoom} defaultsetting={defaultsetting}></DateBox>
              <DateBox id='5' idx={idx + 1} onBoxClick={onBoxClick} onDeleteClick={onDeleteClick}weekdata={data} events={events} currRoom={currRoom} defaultsetting={defaultsetting}></DateBox>
            </div>
          ))}
          <ModalInputs
            open={open}
            handleOk={handleOk}
            confirmLoading={confirmLoading}
            handleCancel={handleCancel}
            gradeText={gradeText}
            classText={classText}
            exclusiveText={exclusiveText}
            kindergardenText={kindergardenText}
            onChangeGradeText={onChangeGradeText}
            onChangeClassText={onChangeClassText}
            onChangeExclusiveText={onChangeExclusiveText}
            onChangeKindergardenText={onChangeKindergardenText}
            eventSample={eventSample}
            rooms={rooms}
          />
        </div>
    )
}

export default Bookings;