import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ErrorPage from "./ErrorPage";
import Brothers from "./Brothers";
import Shop from "./Shop";
import FAQ from "./FAQ";
import Rush from "./Rush";
import Navbar from "./Navbar";
import Events from "./Events";
import Footer from "./Footer";
import About from './About';
import Login from './Login';

export default function Routing() {
    return(
        <div className="flex flex-col h-screen">
            <Router>
                <Navbar />
                <div id="outerContainer" className="flex-1 overflow-y-auto bg-[#7B1A1A]">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/brothers" element={<Brothers />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/rush" element={<Rush />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </div>
    )
}