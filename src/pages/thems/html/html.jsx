import { NavLink, Outlet } from "react-router-dom";
import { HTML } from '../../../data/data';

export default function Html() {

  

  return (
    <div className="js-container">
      <h2>
        <a href="https://ru.wikipedia.org/wiki/HTML" target="_blink">
          HTML (HyperText Markup Language)
        </a>
        — это язык разметки, используемый для создания и структурирования
        веб-страниц.
      </h2>

      <div className="pages">
        {HTML.map((item, index) => (
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "none")}
            key={index}
            to={item.path}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <Outlet />
    </div>
  );
}

