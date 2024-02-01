import RoomSelectContainer from '../containers/RoomSelectContainer';
import './header.css';
import {goToday} from '../modules/dateinfo';
import { useCallback, useEffect, useState } from 'react';
import { Button, ConfigProvider  } from 'antd';
import { useDispatch, useSelector} from 'react-redux';
import CurrentDate from '../components/currentDate';

const Header = () => {
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch();

    const { currDate, currYear, currMonth, currDay, currRoom } = useSelector(({ dateinfo, rooms }) => ({
        currDate: dateinfo.currDate,
        currYear: dateinfo.currYear,
        currMonth: dateinfo.currMonth,
        currDay: dateinfo.currDay,
        currRoom: rooms.currRoom,
    }));

    const handleGoToday = useCallback(() => dispatch(goToday()), [dispatch]);

    useEffect(() => {
        const today = new Date();
        const todayDate = today.getDate();
        const todayMonth = today.getMonth();
        const todayYear = today.getFullYear();
        const newweekdata = [];

        for (let i = currDate - currDay; i < currDate; i += 1) {
            let date = new Date(currYear, currMonth, i).getDate();
            let year = new Date(currYear, currMonth, i).getFullYear();
            let month = new Date(currYear, currMonth, i).getMonth();
            newweekdata.push({ date, year, month, currRoom });
        }

        for (let i = currDate; i < currDate + (7 - currDay); i += 1) {
            let date = new Date(currYear, currMonth, i).getDate();
            let year = new Date(currYear, currMonth, i).getFullYear();
            let month = new Date(currYear, currMonth, i).getMonth();
            newweekdata.push({ date, year, month, currRoom });
        }

        if (
            newweekdata.some(
                item =>
                    item.date === todayDate && item.year === todayYear && item.month === todayMonth && item.currRoom === currRoom
            )
        ) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [currDate, currMonth, currYear, currDay, currRoom]);

    const onClick = () => {
        
        handleGoToday();
    };

    return (
        <div className="header">
            <div className='headerInfo'>
                
                <CurrentDate
                    currDate={currDate}
                    currYear={currYear}
                    currMonth={currMonth}
                    currDay={currDay}
                    currRoom={currRoom}
                />
                <RoomSelectContainer />
            </div>
            <ConfigProvider
                theme={{
                    components: {
                    Button: {
                        fontWeight:600,
                    },
                    },
                }}
            >
                <Button  disabled={disabled} size="large" onClick={onClick}>
                    Today
                </Button>
            </ConfigProvider>

        </div>
    );
};

export default Header;