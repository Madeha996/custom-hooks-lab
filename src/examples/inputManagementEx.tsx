import React from "react";
import useInput from "../hooks/useInput";

const InputEx = () => {
  const username = useInput("");
  const email = useInput("");

  return (
    <div>
      <h2>Input Example</h2>
      <div>
        <label>
          Username:
          <input type="text" {...username} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" {...email} />
        </label>
      </div>
      <p>Username: {username.value}</p>
      <p>Email: {email.value}</p>
      <button onClick={username.reset}>Reset Username</button>
      <button onClick={email.reset}>Reset Email</button>
    </div>
  );
};

export default InputEx;
