import { useState } from "react";
import Menubar from "./components/menu";
import Wrapper from "./components/wrapper";
import {Routes, Route} from 'react-router-dom';
import DataWrapper from './pages/dataWrapper'
import RoomsAdminWrapper from "./pages/roomsAdminWrapper";


const App =() =>{
  const [defaultsetting, setDefaultsetting] = useState(false);
  return(
      <Routes>
        <Route element={<Menubar setDefaultsetting={setDefaultsetting}/>}>
          <Route path="/" element={<Wrapper defaultsetting={defaultsetting}/>}/>
          <Route path="settings/datatable/" element={<DataWrapper/>}/>
          <Route path='settings/rooms/' element={<RoomsAdminWrapper/>}/>
        </Route>
      </Routes>
  )
}

export default App;