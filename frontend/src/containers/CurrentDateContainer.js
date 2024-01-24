import { useSelector} from 'react-redux';
import CurrentDate from '../components/currentDate';
const CurrentDateContainer =()=> {
    const {currDate, currYear, currMonth, currDay,currRoom} = useSelector(({dateinfo,rooms})=>({
        currDate: dateinfo.currDate,
        currYear: dateinfo.currYear, 
        currMonth: dateinfo.currMonth, 
        currDay: dateinfo.currDay,
        currRoom: rooms.currRoom,
    }))

    return(
        <CurrentDate
            currDate={currDate}
            currYear={currYear}
            currMonth={currMonth}
            currDay={currDay}
            currRoom={currRoom}
            // insert ={weekdatainsert}
        />
    )
}

export default CurrentDateContainer;