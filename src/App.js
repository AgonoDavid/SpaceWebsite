import Home from "./Components/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Destination from "./Components/Destination";
import Crew from "./Components/Crew";
import Technology from "./Components/Technology";
function App() {
  return (
    <div className="App home-bg-sm">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Destination" element={<Destination />}></Route>
        <Route path="Crew" element={<Crew />}></Route>
        <Route path="Technology" element={<Technology />}></Route>
      </Routes>
    </div>
  );
}

export default App;
