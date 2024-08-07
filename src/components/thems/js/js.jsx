import "./style.scss";
import { NavLink, Outlet } from "react-router-dom";

function JS() {
  const jsInner = [
    { name: "Переменные", path: "varible" },
    { name: "Типы данных", path: "data" },
    { name: "Операторы", path: "operators" },
    { name: "Циклы", path: "loop" },
    { name: "Функция", path: "func" },
    { name: "Объект", path: "obj" },
    { name: "Массив", path: "array" },
    { name: "JSON", path: "json" },
    { name: "String/number", path: "strNum" },
    { name: "local/SessionStorage", path: "storage" },
  ];

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
        {jsInner.map((item, index) => (
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
