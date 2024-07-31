import "./style.scss";
import { Cart } from "../../function/cart/carts";
import { handleSet } from "../../function/localStorage";
import { useState } from "react";

function Html() {
  const [ok, setOk] = useState([]);
  const [set, setSet] = useState(false)

  const aboutHTML = [
    {
      title: "Теги",
      desc: "Теги в HTML используются для разметки и определения структуры и содержания веб-страницы.",
    },
    {
      title: "Aтрибут",
      desc: "Атрибуты в HTML — это дополнительные параметры, которые можно добавить к тегам для определения их поведения или внешнего вида.",
    },
    {
      title: "Link",
      desc: "HTML-элемент, который используется для связывания внешних ресурсов с HTML-документом.",
    },
    {
      title: "script",
      desc: " <script> используется для внедрения и выполнения JavaScript-кода на веб-странице.",
    },
    {
      title: "<!DOCTYPE html>",
      desc: "DOCTYPE - это декларация, которая размещается в начале HTML-документа и сообщает браузеру, что документ написан в стандарте HTML5.",
    },
  ];

  const handleClick = (i) => {
    if (ok.includes(i)) {
      setOk(ok.filter(index => index !== i));
    } else {
      setOk([...ok, i]);
    }
  };

  
  const toLocal =() => {
    handleSet("html", ok, aboutHTML)
    setSet(true)
  }

  return (
    <div className="html-container">
      <h2>
        <a href="https://ru.wikipedia.org/wiki/HTML" target="_blink">
          HTML (HyperText Markup Language)
        </a>
        — это язык разметки, используемый для создания и структурирования
        веб-страниц.
      </h2>

      <div className="inner">
        <div className="carts">
          {aboutHTML.map((item, index) => (
            <Cart
              key={index}
              title={item.title}
              desc={item.desc}
              ok={ok.includes(index)}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>

      <div className="answers">
        <h2>Правильные ответы " {ok.length} из {aboutHTML.length} "</h2>
        <button style={{ display: set ? 'none' : 'block', marginBottom: '50px' }} onClick={toLocal}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export { Html };
