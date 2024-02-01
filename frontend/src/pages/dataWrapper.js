import { useDispatch, useSelector } from "react-redux";
import DataTable from "../components/dataTable";
import { useCallback, useState } from "react";
import { remove } from "../modules/events";
import DataTableHeader from "../components/dataTableHeader";

const DataWrapper = ()=>{
    const [selectedId, SetSelectedId] = useState([]);
    const {events,rooms} = useSelector(({events,rooms})=>({
        events:events,
        rooms:rooms.rooms
      }))
    const dispatch = useDispatch();
    const handleEventRemove = useCallback((id)=>dispatch(remove(id)),[dispatch]);
    return(
        <div className='wrapper'>
            <DataTableHeader selectedId={selectedId} eventRemove={handleEventRemove}/>
            <DataTable events={events} rooms={rooms} onSetSelectedId={SetSelectedId}/>
        </div>
    )
}

export default DataWrapper;