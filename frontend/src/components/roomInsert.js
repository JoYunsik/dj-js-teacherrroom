import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, InputNumber,notification } from "antd";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { insert } from "../modules/rooms";

const RoomInsert =()=>{
    const dispatch = useDispatch();
    const roomInsert = useCallback((room,max)=>dispatch(insert(room,max)),[dispatch])
    const [roomName, setRoomName] = useState('');
    const [max, setMax] = useState(1);
    const onChangeRoom = (e) =>{
        setRoomName(e.target.value);
    }
    const onChangeMax = (value) =>{
        setMax(value);
    }
    const openInputNotification = (input) => {
        notification.info({
          message: '오류 알림',
          description:
            `${input}을 입력하세요.`,
          placement: 'top',
          icon: <ExclamationCircleOutlined style={{color:'#FFC300', fontSize:'1.5rem'}} />
        });
      };
    const onClick = ()=>{
        if(roomName ===''&& max===''){
            openInputNotification('추가할 내용');
            return
        }
        if(roomName !==''&&max===''){
            openInputNotification('Max값');
            return
        }
        if(roomName ===''&&max !==''){
            openInputNotification('특별실명');
            return
        }
        roomInsert(roomName,max);
        setRoomName('');
        setMax(1);
    };
    return(
        <>
            <div className="inputBox" style={{display:'flex', justifyContent:'center', marginBottom:'2rem'}}>
                <Input 
                    value={roomName} 
                    placeholder="추가할 특별실을 입력하세요." 
                    style={{marginRight:'0.3rem', width:'13rem'}}
                    onChange={onChangeRoom}
                />
                <InputNumber 
                    value={max} 
                    min={1} 
                    max={2} 
                    style={{width:'3rem'}}
                    onChange={onChangeMax}
                />;
                <Button type="primary" style={{marginLeft:'0.3rem'}} onClick={onClick}>
                    <PlusOutlined />
                </Button>
            </div>
        </>

    )
};

export default RoomInsert;