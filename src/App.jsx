import React, { createRef, useEffect, useRef } from "react";
import LogIn from "./components/LogIn";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = "0"
  },[])

  const handleClick = () => {
    inputRef.current.value++
  };

  return (
    <div>
      <h2>Counter using ref..</h2>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click here</button>
      <LogIn />
    </div>
  );
}

export default App;
