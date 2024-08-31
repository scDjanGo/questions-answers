import { NavLink, Outlet } from "react-router-dom";
import { DOM } from "../../function/data";

function Dom() {
    
      return (
        <div className="dom-container">
          <h2>
            <a href="https://learn.javascript.ru/dom-nodes" target="_blur">
            DOM (Document Object Model)
            </a>{" "} — это программный интерфейс для веб-документов. Он представляет собой структурированное представление документа, которое позволяет скриптам изменять содержимое
          </h2>
    
          <div className="pages">
            {DOM.map((item, index) => (
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