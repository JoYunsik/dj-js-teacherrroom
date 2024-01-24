import { useDispatch } from 'react-redux';
import Calendar from './calendar';
import './calendarWrapper.css'
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import { useCallback } from 'react';
import { reset } from "../modules/weekdata";

const CalendarWrapper= ({currDate,currYear,currMonth,currDay,currRoom,next,prev}) =>{
    const dispatch = useDispatch();
    const weekdatareset = useCallback(()=>dispatch(reset()),[dispatch]); 
    const prevClick=()=>{
        weekdatareset();
        prev();
    };
    const nextClick=()=>{
        weekdatareset();
        next();
    };
    return(
        <div className='calendar-wrapper'>
            <div className='iconwrapper'>
                <LeftOutlined className='icon' style={{ fontSize: '20px' }} onClick={prevClick}/>
            </div>
            <Calendar
                currDate={currDate}
                currYear={currYear}
                currMonth={currMonth}
                currDay={currDay}
                currRoom={currRoom}
            />
            <div className='iconwrapper'>
                <RightOutlined className='icon' style={{ fontSize: '20px' }} onClick={nextClick}/>
            </div>
        </div>
    )
}

export default CalendarWrapper;