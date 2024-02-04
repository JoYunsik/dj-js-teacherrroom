import BookingWrapper from './bookingWrapper'
import './wrapper.css'
import Header from './haeder'
import CalendarWrapperContainer from '../containers/CalendarWrapperContainer'

const Wrapper= ({defaultsetting}) =>{
    return(
        <div className='wrapper'>
            <Header defaultsetting={defaultsetting}/>
            <CalendarWrapperContainer />
            <BookingWrapper defaultsetting={defaultsetting}/>
        </div>
    ) 
}

export default Wrapper