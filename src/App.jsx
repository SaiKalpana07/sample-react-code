import React, { createRef, useRef } from "react";
import LogIn from "./components/LogIn";

function App() {
  const inputRef = useRef(0);

  const handleClick = () => {
    console.log(inputRef, "count");
  };

  return (
    <div>
      <h2>Counter using ref..</h2>
      <input type="text" defaultValue={inputRef.current} />
      <button onClick={handleClick}>Click here</button>
      <LogIn />
    </div>
  );
}

export default App;
