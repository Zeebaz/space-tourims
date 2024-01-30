import { useState } from "react";
import { NavItem } from "./NavItem";
import logo from "@/assets/shared/logo.svg";
import openIcon from "@/assets/shared/icon-hamburger.svg";
import closeIcon from "@/assets/shared/icon-close.svg";

const pages = [
  {
    number: "00",
    name: "home",
  },
  {
    number: "01",
    name: "destinations",
  },
  {
    number: "02",
    name: "crew",
  },
  {
    number: "03",
    name: "technology",
  },
];

export const Header = () => {
  const [showNavSide, setShowNavSide] = useState("true");

  return (
    <header className="primary-header flex">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        style={{
          backgroundImage:
            showNavSide === "true" ? `url(${closeIcon})` : `url(${openIcon})`,
        }}
        onClick={() =>
          setShowNavSide((prev) => (prev == "true" ? "false" : "true"))
        }
      >
        <span className="sr-only" aria-expanded={false}>
          Menu
        </span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className="primary-navigation underline-indicators flex"
          data-visible={showNavSide}
        >
          {pages.map((page) => (
            <NavItem
              key={page.number}
              decoration={page.number}
              name={page.name}
              setShowNavSide={setShowNavSide}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};
