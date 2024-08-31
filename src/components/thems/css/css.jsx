import { NavLink, Outlet } from "react-router-dom";
import { Css } from '../../function/data';

function CSS() {

  return (
    <div className="js-container">
      <h2>
        <a href="https://ru.wikipedia.org/wiki/CSS" target="_blink">
          CSS (Cascading Style Sheets, каскадные таблицы стилей)
        </a>
        — это язык
        стилей, который используется для описания внешнего вида и форматирования
        HTML-документов.
      </h2>

      <div className="pages">
        {Css.map((item, index) => (
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

export { CSS };
