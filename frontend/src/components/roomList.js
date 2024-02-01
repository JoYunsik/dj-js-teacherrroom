import { Button, ConfigProvider, Space, Table, Popconfirm, } from 'antd';
import { insert, remove } from '../modules/rooms';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

const { Column } = Table;
const RoomList =({rooms})=>{
    const dispatch = useDispatch();
    const roomInsert = useCallback((room,max)=>dispatch(insert(room,max)),[dispatch]);
    const roomRemove = useCallback((id)=>dispatch(remove(id)),[dispatch]);
    const onRemove=(record)=>{
        roomRemove(record.key);
    }
    const data = rooms.map((room)=>({
        key:room.id,
        roomname:room.room,
        max: room.max,
    }))
    return(
        <ConfigProvider
            theme={{
                components: {
                Table: {
                    cellFontSize:18
                },
                },
            }}
        >
            <Table style={{margin:'0 10rem'}} dataSource={data}>
                <Column title="특별실명" dataIndex="roomname" key="roomname" />
                <Column title="Max" dataIndex="max" key="max" />
                <Column
                title=""
                key="action"
                render={(_, record) => (
                    <Space size="middle">
                     <Popconfirm
                        title="삭제하시겠습니까?"
                        onConfirm={() => onRemove(record)}
                        okText="네"
                        cancelText="아니요"
                    >
                        <Button type="primary" danger>삭제</Button>
                    </Popconfirm>
                    </Space>
                )}
                width='15%'
                />
            </Table>
        </ConfigProvider>
        
    )
};

export default RoomList;