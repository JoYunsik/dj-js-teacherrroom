import BookingWrapper from './bookingWrapper'
import './wrapper.css'
import Header from './haeder'
import CalendarWrapperContainer from '../containers/CalendarWrapperContainer'

const Wrapper= () =>{
    return(
        <div className='wrapper'>
            <Header/>
            <CalendarWrapperContainer />
            <BookingWrapper/>
        </div>
    ) 
}

export default Wrapper