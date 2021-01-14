import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, multiply } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Counter {counter} </h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(multiply(2))}>*2</button>

      {isLogged ? <h3>valuable info I shouldn't see</h3> : ""}
    </div>
  );
}

export default App;
