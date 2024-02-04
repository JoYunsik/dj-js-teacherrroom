import {createAction, handleActions} from 'redux-actions';

const INSERT = 'events/INSERT';
const REMOVE = 'events/REMOVE';
const REMOVEDEFAULT = 'events/REMOVEDEFAULT';
const CLEAREVENTS ='events/CLEAREVENTS';

let id = 302;
export const insert = createAction(INSERT, event=>({
    ...event,
    id: id++,
}));
export const remove = createAction(REMOVE,id=>id);
export const removeDefault = createAction(REMOVEDEFAULT, removeEvent=>removeEvent);
export const clearEvents = createAction(CLEAREVENTS, clearEvent=>clearEvent);
const sample =[{
    event: '2-2',
    date: 29,
    year: 2024,
    month: 0,
    time: 1,
    room: 1,
    defaultevent: true,
    id: 3
  },
  {
    date: 5,
    year: 2024,
    month: 1,
    time: 1,
    room: 1,
    event: '2-2',
    defaultevent: true,
    id: 4
  },
  {
    date: 12,
    year: 2024,
    month: 1,
    time: 1,
    room: 1,
    event: '2-2',
    defaultevent: true,
    id: 5
  },
  {
    date: 19,
    year: 2024,
    month: 1,
    time: 1,
    room: 1,
    event: '2-2',
    defaultevent: true,
    id: 6
  },
  {
    date: 26,
    year: 2024,
    month: 1,
    time: 1,
    room: 1,
    event: '2-2',
    defaultevent: true,
    id: 7
  },
  {
    date: 4,
    year: 2024,
    month: 2,
    time: 1,
    room: 1,
    event: '2-2',
    defaultevent: true,
    id: 8
  },
  {
    event: '3-4',
    date: 31,
    year: 2024,
    month: 0,
    time: 2,
    room: 1,
    defaultevent: false,
    id: 53
  },
  {
    event: '조윤식',
    date: 7,
    year: 2024,
    month: 1,
    time: 1,
    room: 1,
    defaultevent: false,
    id: 54
  },
  {
    event: '김필곤',
    date: 7,
    year: 2024,
    month: 1,
    time: 2,
    room: 2,
    defaultevent: false,
    id: 55
  },
  {
    event: '새싹반',
    date: 15,
    year: 2024,
    month: 1,
    time: 0,
    room: 2,
    defaultevent: false,
    id: 56
  },
  {
    event: '6-4',
    date: 29,
    year: 2024,
    month: 0,
    time: 1,
    room: 2,
    defaultevent: true,
    id: 57
  },
  {
    date: 5,
    year: 2024,
    month: 1,
    time: 1,
    room: 2,
    event: '6-4',
    defaultevent: true,
    id: 58
  },
  {
    date: 12,
    year: 2024,
    month: 1,
    time: 1,
    room: 2,
    event: '6-4',
    defaultevent: true,
    id: 59
  },
  {
    date: 19,
    year: 2024,
    month: 1,
    time: 1,
    room: 2,
    event: '6-4',
    defaultevent: true,
    id: 60
  },
  {
    date: 26,
    year: 2024,
    month: 1,
    time: 1,
    room: 2,
    event: '6-4',
    defaultevent: true,
    id: 61
  },
  {
    date: 4,
    year: 2024,
    month: 2,
    time: 1,
    room: 2,
    event: '6-4',
    defaultevent: true,
    id: 62
  }]
const initialState = [
    {id:1,date:29,year:2024,month:0,time:0,room:1,defaultevent:true,event:"조윤식"},
    {id:2,date:30,year:2024,month:0,time:1,room:1,defaultevent:false,event:"5-3"},
    ...sample
];
const events = handleActions({
    [INSERT]: (state,action)=>(state.concat(action.payload)),
    [REMOVE]: (state,action)=>(state.filter(event=> event.id !== action.payload)),
    [REMOVEDEFAULT]: (state,action)=>(state.filter(event=>
            event.date !== action.payload.date ||
            event.month !== action.payload.month ||
            event.year !== action.payload.year ||
            event.time !== action.payload.time ||
            event.room !== action.payload.room ||
            event.event !== action.payload.event ||
            event.defaultevent !== action.payload.defaultevent
        )),
    [CLEAREVENTS]: (state,action)=>(state.filter(event=>
            event.date !== action.payload.date ||
            event.month !== action.payload.month ||
            event.year !== action.payload.year ||
            event.time !== action.payload.time ||
            event.room !== action.payload.room ||
            event.defaultevent !== false
        ))
}, initialState);

export default events;
