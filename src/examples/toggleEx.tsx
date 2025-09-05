import React from "react";
import { useToggle } from "../hooks/useToggle";

const ToggleEx = () => {
  const { state: isOpen, toggle, setOff } = useToggle(false);
  return (
    <div
      style={{
        backgroundColor: "#555",
      }}
    >
      <h2>useToggle hook</h2>
      <button onClick={toggle}>{isOpen ? "Close" : "Open"}</button>
      {isOpen && (
        <div>
          <p>Modal content</p>
          <button onClick={setOff}>Close from inside</button>
        </div>
      )}
    </div>
  );
};

export default ToggleEx;
