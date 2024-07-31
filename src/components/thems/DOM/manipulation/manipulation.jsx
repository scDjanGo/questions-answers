import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";

function Manipulation() {
  const [ok, setOk] = useState([]);
  const [set, setSet] = useState(false)

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
      desc: `Метод \`document.createElement(tagName)\` создаёт новый элемент с указанным тегом \`tagName\`. Новый элемент создаётся, но не добавляется на страницу до тех пор, пока он не будет вставлен в DOM.`,
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
  
  
  
  

  const handleClick = (i) => {
    if (ok.includes(i)) {
      setOk(ok.filter((index) => index !== i));
    } else {
      setOk([...ok, i]);
    }
  };

 
  const toLocal =() => {
    handleSet("domManipulationMethods", ok, domManipulationMethods)
    setSet(true)
  }

  return (
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {domManipulationMethods.map((item, index) => (
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
        <h2>
          Правильные ответы " {ok.length} из {domManipulationMethods.length} "
        </h2>
        <button style={{ display: set ? 'none' : 'block' }} onClick={toLocal}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export { Manipulation };
