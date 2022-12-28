import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

const pages = [
  {
    name: "Strona główna",
    url: "/",
  },
  {
    name: "Bilety miesięczne",
    url: "/tickets",
  },
  {
    name: "Aktualności",
    url: "/news",
  },
  {
    name: "Rozkład jazdy",
    url: "/timetable",
  },
  {
    name: "Galeria",
    url: "/gallery",
  },
  {
    name: "Kontakt",
    url: "/contact",
  },
];

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      {pages.map((page) => {
        const isActive = location.pathname === page.url;
        return (
          <div key={page.url} className={isActive ? "current" : ""}>
            <Link to={page.url}>{page.name}</Link>
          </div>
        );
      })}
    </nav>
  );
};
