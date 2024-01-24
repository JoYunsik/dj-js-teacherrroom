import { Button } from "antd"
import {useEffect, useMemo, useState } from "react";
import './dateBox.css'
import { CloseOutlined } from "@ant-design/icons";
import { Popconfirm } from 'antd';
const DateBox =({onBoxClick,onDeleteClick,id,weekdata,events,currRoom})=>{
    const [eventChildren, setEventChildren] = useState([]);
    const onCancel =(e)=>{
        e.stopPropagation();
    }
    useEffect(()=>{
        const newEventchildren = events.map((event,idx)=>{
            if(
                event.date === weekdata.date &&
                event.month === weekdata.month &&
                event.year === weekdata.year &&
                event.room === weekdata.currRoom &&
                event.time === parseInt(id)
            )
            return (                
                <div key={idx} className="event">
                    <div className="event-title">{event.event}</div>
                    <Popconfirm
                        title="삭제하시겠습니까?"
                        okText="네"
                        cancelText="아니오"
                        onCancel={onCancel}
                        onConfirm={onDeleteClick(event.id)}
                    >
                        <CloseOutlined className="close-icon" onClick={(e)=>e.stopPropagation()}/>
                    </Popconfirm>
                    
                </div>
            )
        })
        setEventChildren(newEventchildren);
    },[weekdata,events,id])
    return (
        <Button className="booking empty" onClick={onBoxClick}>
            {eventChildren}
        </Button>
    )
}

export default DateBox;

{/* <CloseOutlined className="close-icon" onClick={onDeleteClick(event.id)}/> */}