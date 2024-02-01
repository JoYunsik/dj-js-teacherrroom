import './bookingWrapper.css';
import Bookings from './bookings';
import TimesLeft from './timesLeft';
import TimesRight from './timesRight';

const BookingWrapper = ({defaultsetting})=> {
    return(
        <div className='booking-wrapper'>
            <TimesLeft/>
            <Bookings defaultsetting={defaultsetting}/>
            <TimesRight/>
        </div>
    )
}

export default BookingWrapper
