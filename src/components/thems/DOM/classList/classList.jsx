import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";

function ClassListModule() {
  const [ok, setOk] = useState([]);
  const [set, setSet] = useState(false)

  const classListMethods = [
    {
      title: "add - добавляет класс",
      desc: `Метод \`classList.add(className)\` добавляет указанный класс \`className\` к элементу. Если класс уже существует, метод не добавляет его снова.`,
    },
    {
      title: "remove - удаляет класс",
      desc: `Метод \`classList.remove(className)\` удаляет указанный класс \`className\` из элемента. Если такого класса нет, метод ничего не делает.`,
    },
    {
      title: "toggle - переключает класс",
      desc: `Метод \`classList.toggle(className, [force])\` переключает указанный класс \`className\` на элементе. Если класс присутствует, метод его удаляет, если отсутствует — добавляет. Необязательный параметр \`force\` (булево значение) указывает, должен ли класс быть добавлен или удалён.`,
    },
    {
      title: "contains - проверяет наличие класса",
      desc: `Метод \`classList.contains(className)\` проверяет, есть ли указанный класс \`className\` у элемента. Возвращает \`true\`, если класс присутствует, и \`false\`, если нет.`,
    },
    {
      title: "replace - заменяет класс",
      desc: `Метод \`classList.replace(oldClass, newClass)\` заменяет существующий класс \`oldClass\` на новый класс \`newClass\`. Если класс \`oldClass\` отсутствует, ничего не происходит.`,
    },
    {
      title: "length - количество классов",
      desc: `Свойство \`classList.length\` возвращает количество классов, назначенных элементу.`,
    },
    {
      title: "item - получение класса по индексу",
      desc: `Метод \`classList.item(index)\` возвращает класс по указанному индексу \`index\`. Индексы начинаются с 0. Если индекс выходит за пределы диапазона, возвращает \`null\`.`,
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
    handleSet("classListMethods", ok, classListMethods)
    setSet(true)
  }

  return (
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {classListMethods.map((item, index) => (
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
          Правильные ответы " {ok.length} из {classListMethods.length} "
        </h2>
        <button style={{ display: set ? 'none' : 'block' }} onClick={toLocal}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export { ClassListModule };
