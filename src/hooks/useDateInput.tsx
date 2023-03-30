import { useReducer } from "react";

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

  const updateTimes = () => {
    const times = ["14:00", "15:00", "16:00"];
    dispatch({ type: "UPDATE_TIMES", payload: times });
  };

  const handleDateChange = (date: Date) => {
    dispatch({ type: "SET_DATE", payload: date });
    updateTimes();
  };

  const initializeTime = () => {
    dispatch({ type: "UPDATE_TIMES", payload: ["18:00", "19:00", "20:00", "21:00", "22:00"] });
  };

  return [state, handleDateChange, initializeTime];

};

export default useDateInput;