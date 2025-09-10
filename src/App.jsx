import { Route, Routes } from "react-router";
import Button from "./components/button";
import CounterEx from "./examples/counterEx";
import ToggleEx from "./examples/toggleEx";
import InputEx from "./examples/inputManagementEx";
import LocalStorageEx from "./examples/localStorageEx";

const App = () => {
  return (
    <div className="layout">
      <h1>Custom Hooks</h1>
      <div className="buttons">
        <Button title="useToggle" url="toggle" />
        <Button title="useCounter" url="counter" />
        <Button title="useInput" url="inputManage" />
        <Button title="useLocalStorage" url="localStorage" />
      </div>
      <Routes>
        <Route path="/toggle" element={<ToggleEx />} />
        <Route path="/counter" element={<CounterEx />} />
        <Route path="/inputManage" element={<InputEx />} />
        <Route path="/localStorage" element={<LocalStorageEx />} />
      </Routes>
    </div>
  );
};

export default App;
