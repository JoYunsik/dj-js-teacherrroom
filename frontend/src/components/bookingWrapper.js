import './bookingWrapper.css';
import Bookings from './bookings';
import TimesLeft from './timesLeft';
import TimesRight from './timesRight';

const BookingWrapper = ()=> {
    return(
        <div className='booking-wrapper'>
            <TimesLeft/>
            <Bookings/>
            <TimesRight/>
        </div>
    )
}

export default BookingWrapper
