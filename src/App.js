import Earth from "./Components/Earth";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Destination from "./Components/Destination";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Earth />}></Route>
        <Route path="Destination" element={<Destination />}></Route>
      </Routes>
    </div>
  );
}

export default App;
