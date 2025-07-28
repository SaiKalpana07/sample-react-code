import React, { createRef, useEffect, useRef } from "react";
import LogIn from "./components/LogIn";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = "0";
  }, []);

  const handleClick = () => {
    let count = parseInt(inputRef.current.value);
    console.log(count, "count");
    let count1 = count + 1;
    console.log(count1, "count1");
    count1 = count1.toString();
    let count2 = parseInt(count1);
    count2 = count2 + 1;
    console.log(count2, "count2");
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
