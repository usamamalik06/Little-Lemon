import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            
        </Routes>
    );
}