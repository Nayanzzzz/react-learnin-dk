import React, { useReducer } from "react";

type TReducerAction = {
  type: "Increment" | "Decrement";
  payload: number;
};

const reducer = (state: number, action: TReducerAction) => {
  if (action.type == "Increment") {
    return state + action.payload;
  } else if (action.type == "Decrement") {
    return state - action.payload;
  } else {
    throw new Error("Wrong action type");
  }
};

function UserReducerLearn() {
  const [data, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <p>Value of count - {data}</p>

      <button onClick={() => dispatch({ payload: 1, type: "Increment" })}>
        Click me to increment
      </button>
      <button onClick={() => dispatch({ payload: 1, type: "Decrement" })}>
        Click me to decrement
      </button>
    </div>
  );
}

export default UserReducerLearn;
