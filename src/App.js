import Home from "./Components/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Destination from "./Components/Destination";
import Crew from "./Components/Crew";
function App() {
  return (
    <div className="App home-bg-sm">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Destination" element={<Destination />}></Route>
        <Route path="Crew" element={<Crew />}></Route>
      </Routes>
    </div>
  );
}

export default App;
