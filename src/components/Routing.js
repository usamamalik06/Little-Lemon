import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Reservation from "./pages/BookingPage";
import Confirmation from "./pages/Confirmation";
import Order from "./pages/Order";
import LoginPage from "./pages/LoginPage";

export default function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/reservations" element={<Reservation />}></Route>
            <Route path="/confirmation" element={<Confirmation />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
    );
}