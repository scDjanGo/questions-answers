import { NavLink, Outlet } from "react-router-dom";

function Dom() {
    const domNav = [
        { name: "Навигация", path: "domNav" },
        { name: "ClassList", path: "classList" },
        { name: "Ман-ция элементов", path: "manipulation" },
        { name: "Promise/try-catch", path: "prom" },
        { name: "event loop", path: "eventloop" },
        { name: "Fetch/axios", path: "fetch" },
      ];
    
      return (
        <div className="dom-container">
          <h2>
            <a href="https://learn.javascript.ru/dom-nodes" target="_blur">
            DOM (Document Object Model)
            </a>{" "} — это программный интерфейс для веб-документов. Он представляет собой структурированное представление документа, которое позволяет скриптам изменять содержимое
          </h2>
    
          <div className="pages">
            {domNav.map((item, index) => (
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

export {Dom}