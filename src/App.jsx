import "./App.css";
import { Routes, Route } from "react-router-dom";
import Car from "./pages/car";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/cars"} element={<Car />} />
      </Routes>
    </>
  );
}

export default App;
