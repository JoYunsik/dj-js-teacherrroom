import { useDispatch, useSelector } from "react-redux";
import {insert,remove,select} from "../modules/rooms";
import { useCallback, useEffect } from "react";
import RoomSelect from "../components/roomSelect"

const RoomSelectContainer = () =>{
    const {rooms,currRoom} = useSelector(({currRoom,rooms})=>({
        currRoom:rooms.currRoom,
        rooms:rooms.rooms
    }));
    const dispatch = useDispatch();
    const roomSelect = useCallback((id)=>dispatch(select(id)),[dispatch]);
    useEffect(()=>{
        roomSelect(rooms[0].id)
    },[rooms])
    return(
        <RoomSelect
            currRoom={currRoom}
            rooms={rooms}
            select={roomSelect}
        />
    )
}

export default RoomSelectContainer;