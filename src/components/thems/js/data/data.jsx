import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";

function Data() {
  const [ok, setOk] = useState([]);
  const [set, setSet] = useState(false)

  const varibles = [
    {
      title: "number",
    desc: "Хранит числовые значения, как целые, так и с плавающей запятой."},
    {
      title: "string",
      desc: `Хранит строки текста. Строки могут быть заключены в одинарные ('), двойные (")`,
    },
    {
      title: "boolean",
      desc: `Хранит логические значения true или false.`,
    },
    {title: `undefined`, desc: `Значение по умолчанию для переменных, которые были объявлены, но не инициализированы. Также возвращается функцией, которая ничего не возвращает.`},
    {title: `null`, desc: `Является явным указанием на отсутствие значения или объект. Оно часто используется для инициализации переменных, которые будут позже заполнены значением.`},
    {title: `symbol`, desc: `Хранит уникальные и неизменяемые идентификаторы, часто используются в качестве ключей для свойств объектов.`},
    {title: `bigint`, desc: `Хранит целые числа произвольной длины. Это полезно для работы с числами, которые выходят за пределы диапазона обычных чисел.`},
    {title: `object`, desc: `Хранит коллекцию пар "ключ-значение". Объекты могут быть использованы для создания более сложных структур данных`},

  ];

  const handleClick = (i) => {
    if (ok.includes(i)) {
      setOk(ok.filter((index) => index !== i));
    } else {
      setOk([...ok, i]);
    }
  };

  
  const toLocal =() => {
    handleSet( "data", ok, varibles)

    setSet(true)
  }

  return (
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {varibles.map((item, index) => (
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
          Правильные ответы " {ok.length} из {varibles.length} "
        </h2>
        <button style={{ display: set ? 'none' : 'block' }} onClick={toLocal}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export { Data };
