import './App.css'
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
    <h2>{count}</h2>
    <button onClick={decrement}>Sub</button>
    </>
  )
  
}

export default App
