import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

// Import pages
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
