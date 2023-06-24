import "./App.css";
import { navLinks } from "./contants";
import React, { useState } from "react";

import { MobileMenu } from "./components/MobileMenu";
import { NavHeader } from "./components/NavHeader";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="min-h-screen mx-auto bg-white text-grayishBlack">
      {/* Mobile menu */}
      <div
        className={`${isOpen ? "open-menu " : "closed-menu"}`}
        onClick={handleMenuToggle}
      >
        <MobileMenu menu={navLinks} />
      </div>

      {/* Navigation Header */}
      <NavHeader menu={navLinks} handleMenuToggle={handleMenuToggle} />
      <div className="my-1"></div>

      {/* Home section */}
      <Home />

      {/* About me */}
      <About />

      {/* Project section */}
      <Project />

      {/* Contact */}
      <Contact />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
