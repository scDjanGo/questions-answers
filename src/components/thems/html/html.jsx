import "./style.scss";
import { Pages } from "../../function/renderComponents/pages/pages";

function Html() {

  return (
    <div className="html-container">
      <h2>
        <a href="https://ru.wikipedia.org/wiki/HTML" target="_blink">
          HTML (HyperText Markup Language)
        </a>
        — это язык разметки, используемый для создания и структурирования
        веб-страниц.
      </h2>

      <Pages.Html />
    </div>
  );
}

export { Html };
