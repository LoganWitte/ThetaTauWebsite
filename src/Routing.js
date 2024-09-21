import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ErrorPage from "./ErrorPage";
import Brothers from "./Brothers";
import LoginSignup from "./LoginSignup";
import Shop from "./Shop";
import FAQ from "./FAQ";
import Rush from "./Rush";
import Navbar from "./Navbar";
import Events from "./Events";

export default function Routing() {
    return(
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/brothers" element={<Brothers />} />
                    <Route path="/loginSignup" element={<LoginSignup />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/questions" element={<FAQ />} />
                    <Route path="/rush" element={<Rush />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </div>
    )
}