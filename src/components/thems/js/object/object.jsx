import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";

function Obj() {
  const [ok, setOk] = useState([]);
  const [set, setSet] = useState(false)
  const objectsAndMethods = [
    {
      title: "Объекты",
      desc: `Объекты в JavaScript — это коллекции пар "ключ-значение". Ключи (или свойства) могут быть строками или символами, а значения могут быть любого типа данных. Объекты позволяют хранить связанные данные и функции, которые работают с этими данными.`,
    },
    {
      title: "Создание объектов",
      desc: `Объекты можно создавать различными способами:
             - С помощью литерала объекта: \`const obj = { ключ1: значение1, ключ2: значение2 };\`
             - С помощью конструктора \`Object\`: \`const obj = new Object();\``,
    },
    {
      title: "Метод `Object.keys()`",
      desc: `Метод \`Object.keys(obj)\` возвращает массив строк, содержащих имена всех собственных перечисляемых свойств объекта \`obj\`. Этот метод полезен для перебора свойств объекта.`,
    },
    {
      title: "Метод `Object.values()`",
      desc: `Метод \`Object.values(obj)\` возвращает массив значений всех собственных перечисляемых свойств объекта \`obj\`. Он позволяет получить все значения свойств объекта без их ключей.`,
    },
    {
      title: "Метод `Object.entries()`",
      desc: `Метод \`Object.entries(obj)\` возвращает массив массивов, где каждый внутренний массив содержит ключ и значение одного собственного перечисляемого свойства объекта \`obj\`. Это удобно для перебора пар ключ-значение.`,
    },
    {
      title: "Метод `Object.assign()`",
      desc: `Метод \`Object.assign(target, ...sources)\` копирует значения всех собственных перечисляемых свойств из одного или нескольких исходных объектов в целевой объект. Возвращает целевой объект. Используется для объединения объектов или копирования свойств.`,
    },
    {
      title: "Метод `Object.freeze()`",
      desc: `Метод \`Object.freeze(obj)\` предотвращает изменение существующих свойств объекта \`obj\` и добавление новых свойств. Объект становится "замороженным", и любые попытки изменить его вызовут ошибку в строгом режиме.`,
    },
    {
      title: "Метод `Object.seal()`",
      desc: `Метод \`Object.seal(obj)\` предотвращает добавление новых свойств к объекту \`obj\` и делает все существующие свойства не настраиваемыми. Существующие свойства можно изменять, но не удалять.`,
    },
    {
      title: "Метод `Object-hasOwnProperty()`",
      desc: `Метод \`obj.hasOwnProperty(key)\` проверяет, есть ли у объекта \`obj\` собственное перечисляемое свойство с именем \`key\`. Возвращает \`true\`, если такое свойство существует, и \`false\` в противном случае.`,
    },
  ];
  

  const handleClick = (i) => {
    if (ok.includes(i)) {
      setOk(ok.filter((index) => index !== i));
    } else {
      setOk([...ok, i]);
    }
  };
  
  const toLocal =() => {
    handleSet("objectsAndMethods", ok, objectsAndMethods)

    setSet(true)
  }

  return (
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {objectsAndMethods.map((item, index) => (
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
          Правильные ответы " {ok.length} из {objectsAndMethods.length} "
        </h2>
        <button style={{ display: set ? 'none' : 'block' }} onClick={toLocal}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export { Obj };
