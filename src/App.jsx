import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Individual from "./pages/Individual";
import Footer from "./components/Footer";
import WhatsappContact from "./components/WhatsappContact";
import Meals from "./pages/Meals";

function App() {
    return (
        <div className="bg-accbg">
            <Header />
            <WhatsappContact />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/meal/:id" element={<Individual />}></Route>
                <Route path="/meals" element={<Meals />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
