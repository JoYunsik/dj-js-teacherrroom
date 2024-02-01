import { useDispatch } from 'react-redux';
import { Select,ConfigProvider } from 'antd';
import { useCallback } from 'react';
const RoomSelect = ({ rooms, currRoom, select }) => {
    const handleChange = (value) => {
        
        select(value);
    };
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b',
                    borderRadius: 4,
                    colorBgContainer: '#FCFEFC',
                    fontSize: 24,        
                },
            }}
        >
            <Select
                defaultValue={rooms[0].id}
                style={{
                    width: 140,
                    height: 45,
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

