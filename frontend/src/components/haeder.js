import CurrentDateContainer from '../containers/CurrentDateContainer';
import RoomSelectContainer from '../containers/RoomSelectContainer';
import './header.css';
import RoomSelect from './roomSelect';

const Header= ({currDate, currYear, currMonth, currDay, next, prev}) =>{
    return(
        <div className='header'>
            <CurrentDateContainer />
            <RoomSelectContainer/>
        </div>
    )
}
export default Header;