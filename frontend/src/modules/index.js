import { combineReducers } from "redux";
import dateinfo from "./dateinfo";
import rooms from './rooms';
import events from './events';
import weekdata from "./weekdata";

const rootReducer = combineReducers({
    dateinfo, rooms, events, weekdata,
});

export default rootReducer;