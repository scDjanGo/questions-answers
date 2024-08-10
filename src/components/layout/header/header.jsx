import { NavLink } from "react-router-dom";
import "./style.scss";

function Header() {
  const pages = [
    { name: "Главная", path: "/" },
    { name: "HTML", path: "/html" },
    { name: "CSS", path: "/css" },
    { name: "JS", path: "/js" },
    { name: "DOM", path: "/dom" },
    { name: "React", path: "/react" },
  ];

  return (
    <header className="header-container">
      <div className="inner">
        {pages.map((page, index) => (
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={page.path}
            key={index}
          >
            {page.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
}

export { Header };
