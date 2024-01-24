import {createAction, handleActions} from 'redux-actions';

const INSERT = 'events/INSERT';
const REMOVE = 'events/REMOVE';

let id = 3
export const insert = createAction(INSERT, event=>({
    ...event,
    id: id++,
    defaultevent: false,
}));
export const remove = createAction(REMOVE,id=>id)

const initialState = [
    {id:1,date:22,year:2024,month:0,time:0,room:1,defaultevent:false,event:"5-3"},
    {id:2,date:23,year:2024,month:0,time:0,room:1,defaultevent:false,event:"5-3"},
];
const events = handleActions({
    [INSERT]: (state,action)=>(state.concat(action.payload)),
    [REMOVE]: (state,action)=>(state.filter(event=> event.id !== action.payload)),
}, initialState);

export default events;
