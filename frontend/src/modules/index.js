import { combineReducers } from "redux";
import dateinfo from "./dateinfo";
// import events from "./events";
import rooms from './rooms';
import events from './events';

const rootReducer = combineReducers({
    dateinfo, rooms, events
});

export default rootReducer;