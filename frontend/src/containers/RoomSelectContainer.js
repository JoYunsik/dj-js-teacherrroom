import { useDispatch, useSelector } from "react-redux";
import {insert,remove,select} from "../modules/rooms";
import { useCallback } from "react";
import RoomSelect from "../components/roomSelect"

const RoomSelectContainer = () =>{
    const {rooms,currRoom} = useSelector(({currRoom,rooms})=>({
        currRoom:rooms.currRoom,
        rooms:rooms.rooms
    }));
    const dispatch = useDispatch();
    const roomInsert = useCallback(()=>dispatch(insert()),[dispatch]);
    const roomRemove = useCallback((id)=>dispatch(remove(id)),[dispatch]);
    const roomSelect = useCallback((id)=>dispatch(select(id)),[dispatch]);
    return(
        <RoomSelect
            currRoom={currRoom}
            rooms={rooms}
            select={roomSelect}
        />
    )
}

export default RoomSelectContainer;