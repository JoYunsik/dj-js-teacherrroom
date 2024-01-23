import Calendar from './calendar';
import './calendarWrapper.css'
import {
    LeftOutlined, RightOutlined,
  } from '@ant-design/icons';

const CalendarWrapper= ({currDate,currYear,currMonth,currDay,next,prev}) =>{

    return(
        <div className='calendar-wrapper'>
            <div className='iconwrapper'>
                <LeftOutlined className='icon' style={{ fontSize: '20px' }} onClick={()=>prev()}/>
            </div>
            <Calendar
                currDate={currDate}
                currYear={currYear}
                currMonth={currMonth}
                currDay={currDay}
            />
            <div className='iconwrapper'>
                <RightOutlined className='icon' style={{ fontSize: '20px' }} onClick={()=>next()}/>
            </div>
        </div>
    )
}

export default CalendarWrapper;