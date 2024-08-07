import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";
import { useNavigate } from "react-router-dom";
import {useStartEffect,useTrueAnswers,handleClick,} from "../../../function/startEffect";

function Prom() {
  const [ok, setOk] = useState([]);
  const nav = useNavigate()
  const [truAnswer, setTruAnswer] = useState(0);
  const [passed, setPassed] = useState(false);

  const promiseConcept = [
    {
      title: "Promise - создание промиса",
      desc: `Конструктор \`new Promise(executor)\` создаёт новый объект Promise. Функция \`executor\` выполняется немедленно и принимает два аргумента: \`resolve\` и \`reject\`. \`resolve(value)\` — функция, которая должна быть вызвана при успешном завершении операции и передать результат; \`reject(error)\` — функция, которая должна быть вызвана при ошибке и передать причину отказа (ошибку).`,
    },
    {
      title: "then - обработка успешного завершения",
      desc: `Метод \`promise.then(onFulfilled, onRejected)\` добавляет обработчики для выполнения при успешном завершении промиса или при его отказе. \`onFulfilled(value)\` вызывается с результатом, если промис был решён успешно. \`onRejected(error)\` вызывается с причиной отказа, если промис был отклонён.`,
    },
    {
      title: "catch - обработка ошибок",
      desc: `Метод \`promise.catch(onRejected)\` добавляет обработчик, который будет вызван в случае отклонения промиса. Он аналогичен вызову \`then(null, onRejected)\`.`,
    },
    {
      title: "finally - завершающий обработчик",
      desc: `Метод \`promise.finally(onFinally)\` добавляет обработчик, который будет выполнен после завершения промиса, независимо от того, завершился он успешно или с ошибкой. \`onFinally()\` не принимает аргументов и служит для выполнения завершающих операций.`,
    }
  ];
    

  // startEffect functions
  useStartEffect("Promise/try-catch", promiseConcept, setOk, setPassed);
  useTrueAnswers(ok, setTruAnswer);

  const handlePassed = () => {
    setPassed((prev) => !prev);
  };

  const toLocal = () => {
    handleSet("Promise/try-catch", ok);
    handlePassed();
    nav("/dom/eventloop");
  };

  return (
    <>
    {passed && (
    <div className="answers top">
      <>
      <button onClick={() => { handlePassed()}}>
        Перепройти
      </button>
      <h2>Правильные ответы " {truAnswer} из {promiseConcept.length} "</h2>
      </>
    </div>
    )}
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {promiseConcept.map((item, index) => (
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
        <h2>Правильные ответы " {truAnswer} из {promiseConcept.length} "</h2>
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

export { Prom };
