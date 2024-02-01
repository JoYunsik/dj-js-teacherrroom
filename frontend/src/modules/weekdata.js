import { createAction, handleActions } from "redux-actions";

const ADD = 'weekdata/ADD';
const RESET = 'weekdata/RESET';

export const add = createAction(ADD, data=>({
    ...data
}));
export const reset = createAction(RESET);

const initialState = [];

const weekdata = handleActions(
    {
        [ADD] : (state,action)=>{
            const newWeekData = state.concat(action.payload);
            return(newWeekData.slice(-5))
        },
        [RESET] : (state,action)=>{return initialState},
    },
    initialState
)

export default weekdata;