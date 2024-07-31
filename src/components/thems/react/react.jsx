import { NavLink, Outlet } from "react-router-dom";

function Rct() {
    const domNav = [
        { name: "Хуки", path: "hooks" },
        { name: "React-router", path: "route" },
      ];
    
      return (
        <div className="dom-container">
          <h2>
            <a href="https://ru.legacy.reactjs.org/" target="_blur">
            React
            </a>{" "} — это популярная библиотека JavaScript для создания пользовательских интерфейсов. Она позволяет разрабатывать веб-приложения, которые динамически обновляют и рендерят интерфейс без необходимости перезагрузки страницы.
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

export {Rct}