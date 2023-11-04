import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Car from "./pages/car";
import Home from "./pages/home";

function App() {
  return (
    <>
      {/* <main>
        <Navbar />
        <Hero />
      </main>
      <Footer /> */}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/cars"} element={<Car />} />
      </Routes>
    </>
  );
}

export default App;
