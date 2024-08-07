import { useState } from "react";
import { Cart } from "../../function/cart/carts";
import { handleSet } from "../../function/localStorage";
import { useNavigate } from "react-router-dom";
import { useStartEffect, useTrueAnswers, handleClick } from "../../function/startEffect";

function CSS() {
  const nav = useNavigate()
    const [ok, setOk] = useState([])
    const [truAnswer, setTruAnswer] = useState(0)
    const [passed, setPassed] = useState(false)

    const aboutCSS = [
      {title: "display", desc: `Свойство display в CSS используется для определения типа отображения элемента на странице и его поведения в контексте потока документа. Это ключевое свойство для управления макетом элементов.`},
        {title: 'Псевдоэлементы', desc: 'Псевдоэлементы - используются для добавления стилей к частям элемента или создания новых визуальных элементов, которые не существуют в исходном HTML. Они начинаются с двойного двоеточия "::"'},
        {title: 'Псевдоклассы', desc: `Псевдоклассы применяются к элементам на основе их состояния или положения в документе. Они начинаются с двоеточия ":"`},
        {title: "Grid ", desc: `предназначен для двумерных макетов, где требуется управление как строками, так и колонками. Grid позволяет создавать более сложные и структурированные макеты.`},
        {title: "Flexbox", desc: `предназначен для одномерных макетов (например, строка или колонка) и работает отлично для выравнивания и распределения пространства внутри одного направления.`},
        {title: "none", desc: `свойство которое работает для удаление элемента из поля видимости`}
    ]
 
// startEffect functions
  useStartEffect("CSS", aboutCSS, setOk, setPassed)
  useTrueAnswers(ok, setTruAnswer)

  
  const handlePassed = () => {
    setPassed(prev => !prev)
  }


  const toLocal =() => {
    handleSet("CSS", ok)
    handlePassed();
    nav('/js/varible');
  }

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

      {passed && (
      <div className="answers top">
        <>
        <button onClick={() => { handlePassed()}}>
          Перепройти
        </button>
        <h2>Правильные ответы " {truAnswer} из {aboutCSS.length} "</h2>
        </>
      </div>
      )}

      <div className="inner">
        <div className="carts">
          {aboutCSS.map((item, index) => (
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
        <h2>Правильные ответы " {truAnswer} из {aboutCSS.length} "</h2>
        <button style={{ marginBottom: '50px' }} onClick={() => { toLocal(); }}>
          Дальше
        </button>
        </>
         }
      </div>
    </div>
  );
}

export { CSS };
