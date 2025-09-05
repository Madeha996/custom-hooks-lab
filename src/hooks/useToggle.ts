import { useCallback, useState } from "react";

export function useToggle(init = false) {
  const [state, setState] = useState<boolean>(Boolean(init));

  const setOn = useCallback(() => setState(true), []);
  const setOff = useCallback(() => setState(false), []);
  const toggle = useCallback(() => setState((prev) => !prev), []);

  return { state, setOn, setOff, toggle } as const;
}
