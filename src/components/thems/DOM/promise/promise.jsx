import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";

function Prom() {
  const [ok, setOk] = useState([]);
  const [set, setSet] = useState(false)

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

  const handleClick = (i) => {
    if (ok.includes(i)) {
      setOk(ok.filter((index) => index !== i));
    } else {
      setOk([...ok, i]);
    }
  };

 
  const toLocal =() => {
    handleSet("promiseConcept", ok, promiseConcept)
    setSet(true)
  }

  return (
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {promiseConcept.map((item, index) => (
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
          Правильные ответы " {ok.length} из {promiseConcept.length} "
        </h2>
        <button style={{ display: set ? 'none' : 'block' }} onClick={toLocal}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export { Prom };
