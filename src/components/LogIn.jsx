import React, { useEffect, useRef } from "react";

function LogIn() {
  const userNameRef = useRef(null);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  const handleLogInClick = () => {
    userNameRef.current.focus()
  }

  return (
    <div>
      <h4>LogIn Form</h4>
      <label>Username:</label>
      <input type="text" ref={userNameRef} />
      <label>Password:</label>
      <input type="text" />
      <button onClick={handleLogInClick}>LogIn</button>
    </div>
  );
}

export default LogIn;
