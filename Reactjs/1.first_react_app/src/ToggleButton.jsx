import { useState } from "react"; //Named export
// import React from "react"; Default export

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>
    </div>
  );
}

export default ToggleButton;


