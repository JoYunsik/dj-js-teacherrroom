import { useDispatch, useSelector } from "react-redux"
import CalendarWrapper from "../components/calendarWrapper"
import { useCallback } from "react";
import { next,prev } from "../modules/dateinfo";

const CalendarWrapperContainer =()=>{
    const {currDate, currYear, currMonth, currDay,currRoom} = useSelector(({dateinfo,rooms})=>({
        currDate: dateinfo.currDate,
        currYear: dateinfo.currYear, 
        currMonth: dateinfo.currMonth, 
        currDay: dateinfo.currDay,
        currRoom: rooms.currRoom,
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
            currRoom={currRoom}
            next={onnext}
            prev={onprev}
        />
    )
}

export default CalendarWrapperContainer;