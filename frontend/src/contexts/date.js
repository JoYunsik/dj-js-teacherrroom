import { createContext } from "react";

const date = new Date();
const currDate = date.getDate();
const currYear = date.getFullYear();
const currMonth =date.getMonth();
const currDay=date.getDay();

const DateContext = createContext({date, currDate, currYear, currMonth, currDay})

export default DateContext;