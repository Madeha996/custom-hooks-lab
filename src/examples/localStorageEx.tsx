import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorageEx = () => {
  const { value, setValue, remove } = useLocalStorage<string>("username", "");

  return (
    <div>
      <h2>useLocalStorage Example</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Stored value: {value}</p>
      <button onClick={() => setValue("React Developer")}>Set Default</button>
      <button onClick={remove}>Clear</button>
    </div>
  );
};

export default LocalStorageEx;
