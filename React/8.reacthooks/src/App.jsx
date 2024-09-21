import './App.css'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from './useFetch';


function App() {
  // const [data, setdata] = useState("jsdhba");

  // useEffect(<function>, <dependency>)
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos/180')
  //   .then((res) => res.json())
  //   .then((jso) => console.log(jso))
  //   .catch((e) =>{
  //     console.log(e)
  //   })
  // }, [setdata])

  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos/180');

  return (
    <>
    <div className="container">
      <h1>API Data Goes Here</h1>
      <p>{data}</p>
    </div>
    </>
  )
}

export default App
