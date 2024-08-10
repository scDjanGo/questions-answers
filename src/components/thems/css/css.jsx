import {Pages} from '../../function/renderComponents/pages/pages'

function CSS() {

  return (
    <div className="css-container">
      <h2>
        <a href="https://ru.wikipedia.org/wiki/CSS" target="_blink">
          CSS (Cascading Style Sheets, каскадные таблицы стилей)
        </a>
        — это язык
        стилей, который используется для описания внешнего вида и форматирования
        HTML-документов.
      </h2>

      <Pages.Css />
    </div>
  );
}

export { CSS };
