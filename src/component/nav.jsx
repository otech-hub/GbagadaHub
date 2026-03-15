import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";

export const Nav = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const handleClick = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between sticky top-0 bg-bg px-4 lg:px-0 items-center py-13.5 z-50">
      {/* Logo */}

      <div className="flex gap-2 items-center">
        <img className="w-12 h-12" src="/logo.svg" alt="Brand Logo" />
        <p className="flex flex-col font-body">
          GBAGADA <span>HUB</span>
        </p>
      </div>

      <nav className="hidden md:flex gap-4 font-display">
        <NavLink to="/" className="py-0.5 px-1 [&.active]:border-b-2">
          Home
        </NavLink>
        <NavLink to="/about" className="py-0.5 px-1 [&.active]:border-b-2">
          About
        </NavLink>
        <NavLink to="/pricing" className="py-0.5 px-1 [&.active]:border-b-2">
          Pricing
        </NavLink>
        <NavLink to="/contact" className="py-0.5 px-1 [&.active]:border-b-2">
          Contact
        </NavLink>
      </nav>
      <button className="hidden md:block rounded border px-4 py-2">
        Book a Tour
      </button>

      {/* Small Screen navigation */}

      {/* menu toggle button for mobile view */}

      <button onClick={() => SetIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <X /> : <Menu />}
      </button>

      <div
        className={`md:hidden absolute top-13.5 flex flex-col items-center px-4 bg-white w-full left-0 transition-all duration-200 ease-in-out ${isOpen ? "max-h-400px opacity-100" : "max-h-0 opacity-0"}`}
      >
        {/* close button */}

        <button className="self-end" onClick={() => SetIsOpen(!isOpen)}>
          <X />
        </button>

        <nav className="flex flex-col gap-4">
          <Link to="/" className="py-0.5 px-1" onClick={handleClick}>
            Home
          </Link>
          <Link to="/about" className="py-0.5 px-1" onClick={handleClick}>
            About
          </Link>
          <Link to="/contact" className="py-0.5 px-1" onClick={handleClick}>
            Contact
          </Link>
          <Link to="/pricing" className="py-0.5 px-1" onClick={handleClick}>
            Pricing
          </Link>
        </nav>
        <button
          className="rounded border px-4 py-2 w-fit mt-4"
          onClick={handleClick}
        >
          Book a Tour
        </button>
      </div>
    </div>
  );
};
