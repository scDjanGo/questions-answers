import { NavLink, Outlet } from "react-router-dom";
import { JavaScript } from "../../function/data";

function JS() {
  

  return (
    <div className="js-container">
      <h2>
        <a href="https://learn.javascript.ru/" target="_blur">
          JavaScript (JS)
        </a>{" "}
        — это язык программирования, который используется для создания
        интерактивных и динамичных веб-страниц.
      </h2>

      <div className="pages">
        {JavaScript.map((item, index) => (
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

export { JS };
