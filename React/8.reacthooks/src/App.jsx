import './App.css'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from './useFetch';
import Navbar from './assets/Navbar';

function App() {

  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)


  useEffect(() => {
    alert("Count was changed")
    setColor(color + 1)
  }, [count])


  // // useEffect(<function>, <dependency>)
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos/180')
  //   .then((res) => res.json())
  //   .then((jso) => console.log(jso))
  //   .catch((e) =>{
  //     console.log(e)
  //   })
  // }, [setdata])

  // // const [data] = useFetch('https://jsonplaceholder.typicode.com/todos/180');

  return (
    <>
      <Navbar color={"navy " + "blue" + color} />
      <h1>React Useeffect</h1>
      <div className='container'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    {/* <div className="container">
      <h1>API Data Goes Here</h1>
      <p>{data}</p>
    </div> */}
    </>
  )
}

export default App
