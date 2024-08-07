import "./style.scss";
import { Cart } from "../../function/cart/carts";
import { handleSet } from "../../function/localStorage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStartEffect, useTrueAnswers, handleClick } from "../../function/startEffect";

function Html() {
  const nav = useNavigate()
  const [ok, setOk] = useState([]);
  const [truAnswer, setTruAnswer] = useState(0)
  const [passed, setPassed] = useState(false)

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


// startEffect functions
  useStartEffect("HTML", aboutHTML, setOk, setPassed)
  useTrueAnswers(ok, setTruAnswer)

  const handlePassed = () => {
    setPassed(prev => !prev)
  }
    

  const toLocal =() => {
    handleSet("HTML", ok)
    handlePassed();
    nav('/css');
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
      {passed && (
      <div className="answers top">
        <>
        <button onClick={() => { handlePassed()}}>
          Перепройти
        </button>
        <h2>Правильные ответы " {truAnswer} из {aboutHTML.length} "</h2>
        </>
      </div>
      )}

      <div className="inner">
        <div className="carts">
          {aboutHTML.map((item, index) => (
            <Cart
              key={index}
              title={item.title}
              desc={item.desc}
              ok={ok[index]}
              onClick={() => {(!passed && handleClick(index, setOk))}}
            />
          ))}
        </div>
      </div>

      <div className="answers">
        { !passed &&
        <>
        <h2>Правильные ответы " {truAnswer} из {aboutHTML.length} "</h2>
        <button style={{ marginBottom: '50px' }} onClick={() => { toLocal(); }}>
          Дальше
        </button>
        </>
         }
      </div>
    </div>
  );
}

export { Html };
