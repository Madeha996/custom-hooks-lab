import { useCallback, useState } from "react";

export default function useCounter(initialVal: number = 0, step: number = 1) {
  const [count, setCount] = useState<number>(initialVal);

  const increment = useCallback(() => setCount((v) => v + step), [step]);
  const decrement = useCallback(() => setCount((v) => v - step), [step]);
  const reset = useCallback(() => setCount(initialVal), [initialVal]);

  return { count, setCount, increment, decrement, reset };
}
