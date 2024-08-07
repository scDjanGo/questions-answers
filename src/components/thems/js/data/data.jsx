import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";
import { useNavigate } from "react-router-dom";
import {useStartEffect,useTrueAnswers,handleClick,} from "../../../function/startEffect";

function Data() {
  const [ok, setOk] = useState([]);
  const nav = useNavigate()
  const [truAnswer, setTruAnswer] = useState(0);
  const [passed, setPassed] = useState(false);

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

  // startEffect functions
  useStartEffect("Типы данных", varibles, setOk, setPassed);
  useTrueAnswers(ok, setTruAnswer);

  const handlePassed = () => {
    setPassed((prev) => !prev);
  };

  const toLocal = () => {
    handleSet("Типы данных", ok);
    handlePassed();
    nav("/js/operators");
  };

  return (
    <>
    {passed && (
    <div className="answers top">
      <>
      <button onClick={() => { handlePassed()}}>
        Перепройти
      </button>
      <h2>Правильные ответы " {truAnswer} из {varibles.length} "</h2>
      </>
    </div>
    )}
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {varibles.map((item, index) => (
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
        <h2>Правильные ответы " {truAnswer} из {varibles.length} "</h2>
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

export { Data };
