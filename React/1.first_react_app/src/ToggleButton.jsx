import React, { useState } from "react";

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


