import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";
import { useNavigate } from "react-router-dom";
import {useStartEffect,useTrueAnswers,handleClick,} from "../../../function/startEffect";

function Function() {
  const [ok, setOk] = useState([]);
  const nav = useNavigate()
  const [truAnswer, setTruAnswer] = useState(0);
  const [passed, setPassed] = useState(false);

  const functions = [
    {
      title: "Функции",
      desc: `Функции в JavaScript — это блоки кода, которые можно вызывать по имени, чтобы выполнить определённую задачу. Функции помогают организовать код, избегать повторений и улучшать читаемость.`,
    },
    {
      title: "Функции объявленные с помощью function",
      desc: `Функции, объявленные с помощью ключевого слова \`function\`, имеют функциональную область видимости и могут быть вызваны до их объявления (подъём функции). Такие функции могут быть объявлены и вызваны в любой части программы.`,
    },
    {
      title: "Стрелочные функции",
      desc: `Стрелочные функции, введённые в ES6, предоставляют короткий синтаксис для написания функций. Они не имеют собственного контекста \`this\`, что полезно в некоторых случаях. Формат: \`(параметры) => выражение\`.`,
    },
    {
      title: "Замыкания",
      desc: `Замыкания — это функция, которая сохраняет доступ к переменным своей внешней функции даже после того, как внешняя функция завершила выполнение. Это позволяет создавать функции с приватными данными.`,
    },
    {
      title: "Рекурсивные функции",
      desc: `Рекурсивные функции — это функции, которые вызывают сами себя. Они полезны для решения задач, которые можно разбить на подзадачи, аналогичные основной задаче.`,
    },
    {
      title: "Функции обратного вызова (callback functions)",
      desc: `Функции обратного вызова — это функции, передаваемые в другие функции в качестве аргументов. Они вызываются по завершению какого-либо действия или события.`,
    },
    {
      title: "Оператор spread",
      desc: `Оператор \`...\` (spread) позволяет разворачивать элементы массива или объекта в места, где ожидаются нуль или более аргументов (для массивов) или пар ключ-значение (для объектов).`,
    },
    {
      title: "REST-оператор",
      desc: `REST-оператор \`...\` (rest) используется для сбора оставшихся аргументов функции в массив. Он позволяет собирать неопределённое количество аргументов в функции в один массив. REST-оператор применяется в определении функции и указывается в конце списка параметров.`,
    },
  ];
  

  // startEffect functions
  useStartEffect("Функция", functions, setOk, setPassed);
  useTrueAnswers(ok, setTruAnswer);

  const handlePassed = () => {
    setPassed((prev) => !prev);
  };

  const toLocal = () => {
    handleSet("Функция", ok);
    handlePassed();
    nav("/js/obj");
  };

  return (
    <>
    {passed && (
    <div className="answers top">
      <>
      <button onClick={() => { handlePassed()}}>
        Перепройти
      </button>
      <h2>Правильные ответы " {truAnswer} из {functions.length} "</h2>
      </>
    </div>
    )}
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {functions.map((item, index) => (
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
        <h2>Правильные ответы " {truAnswer} из {functions.length} "</h2>
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

export { Function };
