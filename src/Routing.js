import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ErrorPage from "./ErrorPage";
import Brothers from "./Brothers";
import LoginSignup from "./LoginSignup";
import Storefront from "./Storefront";
import FAQ from "./FAQ";
import Rush from "./Rush";

export default function Routing() {
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/brothers" element={<Brothers />} />
                    <Route path="/loginSignup" element={<LoginSignup />} />
                    <Route path="/storefront" element={<Storefront />} />
                    <Route path="/questions" element={<FAQ />} />
                    <Route path="/rush" element={<Rush />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </div>
    )
}