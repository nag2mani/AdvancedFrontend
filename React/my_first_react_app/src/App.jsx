import './App.css';
import ToggleButton  from './ToggleButton';

//it is function comp but there is class comp.
function App() {
  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
      <div>
        <h2>I am Nagmani & This is my first react app.</h2>
      </div>
      <div className="App">
        <h1>Toggle Button Example</h1>
        <ToggleButton />
      </div>
    </>
  )

}

export default App
