import { useReducer } from "react";
import { fetchAPI } from "../utils/api";

type State = {
  date: Date | null;
  times: string[];
};

type Action =
  | { type: "SET_DATE"; payload: Date }
  | { type: "UPDATE_TIMES"; payload: string[] };

const initialState: State = {
  date: null,
  times: ["11:00", "12:00", "13:00"],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_DATE":
      return {
        ...state,
        date: action.payload,
      };
    case "UPDATE_TIMES":
      return {
        ...state,
        times: action.payload,
      };
    default:
      return state;
  }
};

const useDateInput = (): [State, (date: Date) => void, () => void] => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTimes = (date: Date) => {
    const times = fetchAPI(date);
    dispatch({ type: "UPDATE_TIMES", payload: times });
  };

  const handleDateChange = (date: Date) => {
    dispatch({ type: "SET_DATE", payload: date });
    updateTimes(date);
  };

  const initializeTime = () => {
    const times = fetchAPI(new Date());
    console.log(times);
    dispatch({ type: "UPDATE_TIMES", payload: times });
  };

  return [state, handleDateChange, initializeTime];

};

export default useDateInput;