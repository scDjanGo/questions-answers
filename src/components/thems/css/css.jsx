import { useState } from "react";
import { Cart } from "../../function/cart/carts";
import { handleSet } from "../../function/localStorage";

function CSS() {
    const [ok, setOk] = useState([])
    const [set, setSet] = useState(false)

    const aboutCSS = [
      {title: "display", desc: `Свойство display в CSS используется для определения типа отображения элемента на странице и его поведения в контексте потока документа. Это ключевое свойство для управления макетом элементов.`},
        {title: 'Псевдоэлементы', desc: 'Псевдоэлементы - используются для добавления стилей к частям элемента или создания новых визуальных элементов, которые не существуют в исходном HTML. Они начинаются с двойного двоеточия "::"'},
        {title: 'Псевдоклассы', desc: `Псевдоклассы применяются к элементам на основе их состояния или положения в документе. Они начинаются с двоеточия ":"`},
        {title: "Grid ", desc: `предназначен для двумерных макетов, где требуется управление как строками, так и колонками. Grid позволяет создавать более сложные и структурированные макеты.`},
        {title: "Flexbox", desc: `предназначен для одномерных макетов (например, строка или колонка) и работает отлично для выравнивания и распределения пространства внутри одного направления.`},
        {title: "none", desc: `свойство которое работает для удаление элемента из поля видимости`}
    ]

    const handleClick = (i) => {
        if (ok.includes(i)) {
          setOk(ok.filter(index => index !== i));
        } else {
          setOk([...ok, i]);
        }
      };
      const toLocal =() => {
        handleSet("css", ok, aboutCSS)
        setSet(true)
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

      <div className="inner">
        <div className="carts">
          {aboutCSS.map((item, index) => (
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
        <h2>Правильные ответы " {ok.length} из {aboutCSS.length} "</h2>
        <button style={{ display: set ? 'none' : 'block' , marginBottom: '50px'}} onClick={toLocal}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export { CSS };
