import './App.css';
import ToggleButton from './ToggleButton';

//It is functional comp but there is class component as well.
function App() {
  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>

      <div>
        <h2>I am Nagmani & This is my first react app.</h2>
      </div>

      <div className="ToggleButton">
        <h3>This is Example of Toggle Button.</h3>
        <ToggleButton/>
      </div>

    </>
  )

}

export default App
