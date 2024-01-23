import { useSelector} from 'react-redux';
import CurrentDate from '../components/currentDate';

const CurrentDateContainer =()=> {
    const {currDate, currYear, currMonth, currDay} = useSelector(({dateinfo})=>({
        currDate: dateinfo.currDate,
        currYear: dateinfo.currYear, 
        currMonth: dateinfo.currMonth, 
        currDay: dateinfo.currDay,
    }))

    return(
        <CurrentDate
            currDate={currDate}
            currYear={currYear}
            currMonth={currMonth}
            currDay={currDay}

        />
    )
}

export default CurrentDateContainer;