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

export default function Routing() {
    return(
        <div>
            <Router>
                <Navbar />
                <div className="wholePage">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/brothers" element={<Brothers />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/questions" element={<FAQ />} />
                        <Route path="/rush" element={<Rush />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                    <Footer />
                </div>
                
            </Router>
        </div>
    )
}