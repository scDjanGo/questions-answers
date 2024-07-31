import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";

function DomNavigate() {
  const [ok, setOk] = useState([]);
  const [set, setSet] = useState(false)

  const domNavigate = [
    {
      title: "document-getElementById - получение элемента по ID",
      desc: `Метод \`document getElementById(id)\` возвращает элемент, соответствующий указанному идентификатору \`id\`. Если такого элемента не существует, возвращает \`null\`.`,
    },
    {
      title: "document-querySelector - первый элемент по CSS-селектору",
      desc: `Метод \`document querySelector(selector)\` возвращает первый элемент, соответствующий заданному CSS-селектору \`selector\`. Если таких элементов нет, возвращает \`null\`.`,
    },
    {
      title: "document-querySelectorAll - все элементы по CSS-селектору",
      desc: `Метод \`document querySelectorAll(selector)\` возвращает NodeList (список узлов) всех элементов, соответствующих заданному CSS-селектору \`selector\`. Если таких элементов нет, возвращает пустой список.`,
    },
    {
      title: "document-getElements ByClassName - элементы по классу",
      desc: `Метод \`document getElements ByClassName(className)\` возвращает HTMLCollection всех элементов, которые имеют указанный класс \`className\`. Это живой список, который обновляется при изменении DOM.`,
    },
    {
      title: "document-getElements ByTagName - элементы по тегу",
      desc: `Метод \`document getElements ByTagName(tagName)\` возвращает HTMLCollection всех элементов с указанным именем тега \`tagName\`. Это живой список, который обновляется при изменении DOM.`,
    },
    {
      title: "element-parentNode - родительский узел",
      desc: `Свойство \`parentNode\` возвращает родительский узел данного элемента. Если родительского узла нет (например, для корневого элемента), возвращает \`null\`.`,
    },
    {
      title: "element-firstChild - первый дочерний узел",
      desc: `Свойство \`firstChild\` возвращает первый дочерний узел данного элемента. Если у элемента нет дочерних узлов, возвращает \`null\`.`,
    },
    {
      title: "element-lastChild - последний дочерний узел",
      desc: `Свойство \`lastChild\` возвращает последний дочерний узел данного элемента. Если у элемента нет дочерних узлов, возвращает \`null\`.`,
    },
    {
      title: "element-previousSibling - предыдущий соседний узел",
      desc: `Свойство \`previousSibling\` возвращает предыдущий соседний узел данного элемента. Если такого узла нет, возвращает \`null\`.`,
    },
    {
      title: "element-nextSibling - следующий соседний узел",
      desc: `Свойство \`nextSibling\` возвращает следующий соседний узел данного элемента. Если такого узла нет, возвращает \`null\`.`,
    },
    {
      title: "element-children - дочерние элементы",
      desc: `Свойство \`children\` возвращает HTMLCollection всех дочерних элементов данного элемента (исключая текстовые узлы и комментарии). Это живой список, который обновляется при изменении DOM.`,
    },
    {
      title: "element-childNodes - все дочерние узлы",
      desc: `Свойство \`childNodes\` возвращает NodeList всех дочерних узлов данного элемента, включая текстовые узлы и комментарии. Это живой список, который обновляется при изменении DOM.`,
    },
    {
      title: "element-closest - ближайший предок по селектору",
      desc: `Метод \`element.closest(selector)\` возвращает ближайший родительский элемент (включая сам элемент), который соответствует заданному CSS-селектору \`selector\`. Если такого элемента нет, возвращает \`null\`.`,
    },
    {
      title: "element-parentElement - родительский элемент",
      desc: `Свойство \`parentElement\` возвращает родительский элемент данного элемента. В отличие от \`parentNode\`, возвращает \`null\`, если родительский узел не является элементом.`,
    },
    {
      title: "element-contains - проверка наличия потомка",
      desc: `Метод \`element.contains(node)\` проверяет, является ли \`node\` потомком данного элемента. Возвращает \`true\`, если является, и \`false\`, если нет.`,
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
    handleSet("domNavigate", ok, domNavigate)
    setSet(true)
  }

  return (
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {domNavigate.map((item, index) => (
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
          Правильные ответы " {ok.length} из {domNavigate.length} "
        </h2>
        <button style={{ display: set ? 'none' : 'block' }} onClick={toLocal}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export { DomNavigate };
