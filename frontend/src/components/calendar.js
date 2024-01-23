import './calendar.css';
import CalendarDate from './Calendardate';

const Calendar =({currDate,currYear,currMonth,currDay})=> {
    return(
        <div className='calendar'>
            <ul className='weeks'>
                <li className='weekend'>일</li>
                <li>월</li>
                <li>화</li>
                <li>수</li>
                <li>목</li>
                <li>금</li>
                <li className='weekend'>토</li>
            </ul>
            <CalendarDate
                currDate={currDate}
                currYear={currYear}
                currMonth={currMonth}
                currDay={currDay}
            />
        </div>
    )
}

export default Calendar;