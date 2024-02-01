import Calendar from './calendar';
import './calendarWrapper.css'
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

const CalendarWrapper= ({currDate,currYear,currMonth,currDay,currRoom,next,prev}) =>{
    const prevClick=()=>{
        prev();
    };
    const nextClick=()=>{
        next();
    };
    return(
        <div className='calendar-wrapper'>
            <div className='iconwrapper'>
                <LeftOutlined className='icon' style={{ padding:'2rem 0',height:'100%',fontSize: '20px' }} onClick={prevClick}/>
            </div>
            <Calendar
                currDate={currDate}
                currYear={currYear}
                currMonth={currMonth}
                currDay={currDay}
                currRoom={currRoom}
            />
            <div className='iconwrapper'>
                <RightOutlined className='icon' style={{ padding:'2rem 0',height:'100%', fontSize: '20px' }} onClick={nextClick}/>
            </div>
        </div>
    )
}

export default CalendarWrapper;