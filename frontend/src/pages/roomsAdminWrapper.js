import { useSelector } from "react-redux";
import RoomAdminTemplate from "../components/roomAdminTemplate";
import RoomInsert from "../components/roomInsert";
import RoomList from "../components/roomList";

const RoomsAdminWrapper = ()=>{
    const {rooms} = useSelector(({rooms})=>({
        rooms:rooms.rooms
    }))
    return(
        <RoomAdminTemplate>
            <RoomInsert />
            <RoomList rooms={rooms}/>
        </RoomAdminTemplate>
    )
};

export default RoomsAdminWrapper;

