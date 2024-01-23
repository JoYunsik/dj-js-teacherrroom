import { useDispatch, useSelector } from "react-redux"
import CalendarWrapper from "../components/calendarWrapper"
import { useCallback } from "react";
import { next,prev } from "../modules/dateinfo";

const CalendarWrapperContainer =()=>{
    const {currDate, currYear, currMonth, currDay} = useSelector(({dateinfo})=>({
        currDate: dateinfo.currDate,
        currYear: dateinfo.currYear, 
        currMonth: dateinfo.currMonth, 
        currDay: dateinfo.currDay,
    }))
    const dispatch = useDispatch();
    const onnext = useCallback(()=>dispatch(next()),[dispatch]);
    const onprev = useCallback(()=>dispatch(prev()),[dispatch]);
    return(
        <CalendarWrapper
            currDate={currDate}
            currYear={currYear}
            currMonth={currMonth}
            currDay={currDay}
            next={onnext}
            prev={onprev}
        />
    )
}

export default CalendarWrapperContainer;