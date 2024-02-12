import { useCallback, useEffect, useState } from "react";
import Menubar from "./components/menu";
import Wrapper from "./components/wrapper";
import {Routes, Route} from 'react-router-dom';
import DataWrapper from './pages/dataWrapper'
import RoomsAdminWrapper from "./pages/roomsAdminWrapper";
import { useDispatch } from "react-redux";
import {initiateRooms} from "./modules/rooms"
import { initiateEvents } from "./modules/events";


const App =() =>{
  const [defaultsetting, setDefaultsetting] = useState(false);
  const dispatch = useDispatch();
  const handleInitiateRooms = useCallback(()=>dispatch(initiateRooms()),[dispatch]);
  const handleInitiateEvents = useCallback(()=>dispatch(initiateEvents()),[dispatch]);
  useEffect(()=>{
    handleInitiateRooms();
    handleInitiateEvents();
},[handleInitiateRooms,handleInitiateEvents])
  return(
      <Routes>
        <Route element={<Menubar setDefaultsetting={setDefaultsetting}/>}>
          <Route path="/" element={<Wrapper defaultsetting={defaultsetting}/>}/>
          <Route path="set-default/" element={<Wrapper defaultsetting={defaultsetting}/>}/>
          <Route path="settings/datatable/" element={<DataWrapper/>}/>
          <Route path='settings/rooms/' element={<RoomsAdminWrapper/>}/>
        </Route>
      </Routes>
  )
}

export default App;