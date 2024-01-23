import './currentDate.css'


const CurrentDate= ({currDate, currYear, currMonth, currDay}) =>{
    return(
        <div className='current-date'>{currYear}년 {currMonth+1}월</div>
    )
}

export default CurrentDate;