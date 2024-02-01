import {createAction, handleActions} from 'redux-actions';

const INSERT = 'rooms/INSERT';
const REMOVE = 'rooms/REMOVE';
const SELECT = 'rooms/SELECT';

let id = 3

export const insert = createAction(INSERT, (room,max) =>({
    id:id++,
    room,
    max,
}));
export const remove = createAction(REMOVE, id=>id);
export const select = createAction(SELECT, id=>id);

const initialState = {currRoom:1, rooms:[{id : 1, max : 2, room:'한마음관'}, {id : 2, max:1, room:'4층강당'}]}

const rooms = handleActions({
    [INSERT]: (state,action)=>({...state, rooms: state.rooms.concat(action.payload)}),
    [REMOVE]: (state,action)=>({...state, rooms: state.rooms.filter(room=>room.id !== action.payload)}),
    [SELECT]: (state,action)=>({...state, currRoom: action.payload })
}, initialState);

export default rooms;