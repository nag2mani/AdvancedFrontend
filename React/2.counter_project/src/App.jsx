import { useState } from "react";
import './App.css';
import DisplayComponent from "./components/DisplayComponent";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counter Project</h1>
      <button onClick={increment}>Add</button>
      <DisplayComponent count={count} />
      <button onClick={decrement} >Sub</button>
    </>
  );
}

export default App;
