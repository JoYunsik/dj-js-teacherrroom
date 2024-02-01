import {createAction, handleActions} from 'redux-actions';

const NEXT = 'dateinfo/NEXT';
const PREV = 'dateinfo/PREV';
const GOTODAY = 'dateinfo/TODAY';

const date = new Date();
const currDate = date.getDate();
const currYear = date.getFullYear();
const currMonth =date.getMonth();
const currDay=date.getDay();

export const next = createAction(NEXT);
export const prev = createAction(PREV);
export const goToday= createAction(GOTODAY);

const initialState = {currDate, currYear, currMonth, currDay};

const dateinfo = handleActions(
    {
      [NEXT]: (state, action) => {
        const newDate = new Date(state.currYear, state.currMonth, state.currDate + 7);
        return {
          ...state,
          currDate: newDate.getDate(),
          currYear: newDate.getFullYear(),
          currMonth: newDate.getMonth(),
          currDay: newDate.getDay(),
        };
      },
      [PREV]: (state, action) => {
        const newDate = new Date(state.currYear, state.currMonth, state.currDate - 7);
        return {
          ...state,
          currDate: newDate.getDate(),
          currYear: newDate.getFullYear(),
          currMonth: newDate.getMonth(),
          currDay: newDate.getDay(),
        };
      },
      [GOTODAY]: (state,action)=>(initialState)
    },
    initialState
  );

export default dateinfo;