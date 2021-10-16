import React from 'react';
import { useState } from 'react';

function Toggle() {
  // is the state we are stting acting on a binary, consider using a boolean.
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? 'red' : 'white';
  console.log(`The value of isOn is: ${isOn}`);

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

export default Toggle;
