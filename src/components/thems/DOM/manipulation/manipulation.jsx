import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";
import { useNavigate } from "react-router-dom";
import {useStartEffect,useTrueAnswers,handleClick,} from "../../../function/startEffect";

function Manipulation() {
  const [ok, setOk] = useState([]);
  const nav = useNavigate()
  const [truAnswer, setTruAnswer] = useState(0);
  const [passed, setPassed] = useState(false);

  const domManipulationMethods = [
    {
      title: "innerHTML - вставка HTML-контента",
      desc: `Свойство \`innerHTML\` позволяет получить или установить HTML-содержимое элемента. Устанавливая \`innerHTML\`, вы можете добавить HTML-разметку или заменить существующую разметку внутри элемента.`,
    },
    {
      title: "outerHTML - вставка и замена всего элемента",
      desc: `Свойство \`outerHTML\` позволяет получить или заменить сам элемент, включая его HTML-теги. Устанавливая \`outerHTML\`, вы можете заменить элемент и его содержимое новыми HTML-тегами.`,
    },
    {
      title: "textContent - вставка текстового контента",
      desc: `Свойство \`textContent\` позволяет получить или установить текстовое содержимое элемента. В отличие от \`innerHTML\`, оно обрабатывает текст как простую строку, без интерпретации HTML-тегов.`,
    },
    {
      title: "createElement - создание нового элемента",
      desc: `Метод \`document createElement(tagName)\` создаёт новый элемент с указанным тегом \`tagName\`. Новый элемент создаётся, но не добавляется на страницу до тех пор, пока он не будет вставлен в DOM.`,
    },
    {
      title: "append - добавление узлов",
      desc: `Метод \`element.append(...nodes)\` добавляет один или несколько узлов или строки в конец списка дочерних элементов указанного родительского элемента. Этот метод поддерживает как узлы, так и строки в качестве параметров.`,
    },
    {
      title: "appendChild - добавление дочернего элемента",
      desc: `Метод \`element.appendChild(node)\` добавляет узел \`node\` в конец дочерних элементов указанного родительского элемента. В отличие от \`append\`, этот метод принимает только один узел и не поддерживает строки.`,
    },
    {
      title: "prepend - добавление узлов в начало",
      desc: `Метод \`element.prepend(...nodes)\` добавляет один или несколько узлов или строки в начало списка дочерних элементов указанного родительского элемента. Этот метод поддерживает как узлы, так и строки в качестве параметров.`,
    },
    {
      title: "remove - удаление элемента",
      desc: `Метод \`element.remove()\` удаляет элемент из DOM. Он удаляет элемент, на котором вызывается метод, из родительского элемента.`,
    }
  ];
  
  
 
  // startEffect functions
  useStartEffect("Манипуляция в DOM", domManipulationMethods, setOk, setPassed);
  useTrueAnswers(ok, setTruAnswer);

  const handlePassed = () => {
    setPassed((prev) => !prev);
  };

  const toLocal = () => {
    handleSet("Манипуляция в DOM", ok);
    handlePassed();
    nav("/dom/prom");
  };

  return (
    <>
    {passed && (
    <div className="answers top">
      <>
      <button onClick={() => { handlePassed()}}>
        Перепройти
      </button>
      <h2>Правильные ответы " {truAnswer} из {domManipulationMethods.length} "</h2>
      </>
    </div>
    )}
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {domManipulationMethods.map((item, index) => (
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
        <h2>Правильные ответы " {truAnswer} из {domManipulationMethods.length} "</h2>
        <button style={{ marginBottom: '50px' }} onClick={() => { toLocal(); }}>
          Дальше
        </button>
        </>
         }
      </div>
    </div>
    </>
  );
}

export { Manipulation };
