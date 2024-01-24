import { useDispatch } from 'react-redux';
import './roomSelect.css'
import { Select,ConfigProvider } from 'antd';
import { useCallback } from 'react';
import { reset } from "../modules/weekdata";
const RoomSelect = ({ rooms, currRoom, select }) => {
    const dispatch = useDispatch();
    const weekdatareset = useCallback(()=>dispatch(reset()),[dispatch]); 
    const handleChange = (value) => {
        weekdatareset();
        select(value);
    };
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b',
                    borderRadius: 4,
                    colorBgContainer: '#f6ffed',
                    fontSize: 17,
                },
            }}
        >
            <Select
                defaultValue={rooms[0].id}
                style={{
                    width: 120,
                    height: 40,
                }}
                onChange={handleChange}
                options={
                    rooms.map((room) => ({
                        value: room.id,
                        label: room.room,
                    }))
                }
            />
        </ConfigProvider>
    );
}

export default RoomSelect;

