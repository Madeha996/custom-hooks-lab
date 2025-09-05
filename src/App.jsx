import { Route, Routes } from "react-router";
import CounterEx from "./examples/counterEx";
import ToggleEx from "./examples/toggleEx";
import Button from "./components/button";

const App = () => {
  return (
    <div className="layout">
      <h1>Custom Hooks</h1>
      <div className="buttons">
        <Button title="useToggle" url="toggle" />
        <Button title="useCounter" url="counter" />
      </div>
      <Routes>
        <Route path="/toggle" element={<ToggleEx />} />
        <Route path="/counter" element={<CounterEx />} />
      </Routes>
    </div>
  );
};

export default App;
