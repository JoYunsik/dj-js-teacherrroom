import './roomSelect.css'
import { Select,ConfigProvider } from 'antd';

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

