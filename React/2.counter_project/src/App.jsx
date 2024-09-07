import './App.css'
import DisplayComponent from 
import {useState} from "react";

function App() {
  // let count = 10;
  const [count, setCount] = useState(0);

  const increment = () => {
    // count = count + 1;
    setCount(count + 1);
  }

  const decrement = () => {
    // count = count + 1;
    setCount(count - 1);
  }

  return (
    <>
    <h1>Counter Project</h1>
    <button onClick={increment}>Add</button>
    <DisplayComponent count={count}>
    <button onClick={decrement}>Sub</button>
    </>
  )
  
}

export default App;
