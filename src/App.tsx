import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Index.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Achievements from "./components/Achievements";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop"; // Import the new component

const App = () => {
  useEffect(() => {
    AOS.init({}); // Initialize AOS with default duration
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* This ensures scrolling to top on route change */}
      <AnimatedNavbarWrapper /> {/* Navbar remains here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </Router>
  );
};

const AnimatedNavbarWrapper = () => {
  const location = useLocation(); // Detect route changes
  return <Navbar key={location.pathname} />; // Forces Navbar to refresh
};

export default App;
