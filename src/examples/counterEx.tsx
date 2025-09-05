import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

const CounterEx = () => {
  const [initVal, setInitVal] = useState(0);
  const [step, setStep] = useState(1);
  const { count, setCount, increment, decrement, reset } = useCounter(
    initVal,
    step
  );

  const handleSet = () => setCount(initVal);

  return (
    <div>
      <h2>Counter Ex</h2>

      <div>
        <label>Step:</label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Initial Number:</label>
        <input
          type="number"
          value={initVal}
          onChange={(e) => setInitVal(Number(e.target.value))}
        />
        <button onClick={handleSet}>Set</button>
      </div>

      <p>count: {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterEx;
