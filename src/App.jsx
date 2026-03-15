import { useState } from "react";
import { Nav } from "./component/nav";
import { Routes, Route } from "react-router";
import { About } from "./component/about";
import { Contact } from "./component/contact";
import { Pricing } from "./component/pricing";
import { Home } from "./component/home";
import { Footer } from "./component/footer";

function App() {
  return (
    <div className="max-w-268 mx-auto bg-bg">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
