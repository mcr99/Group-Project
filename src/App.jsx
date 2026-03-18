import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Individual from "./pages/Individual";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/meal/:id" element={<Individual />}></Route>
      </Routes>
    </>
  );
}

export default App;
