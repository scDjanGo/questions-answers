import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";

function EventLoop() {
  const [ok, setOk] = useState([]);
  const [set, setSet] = useState(false)

  const eventLoopSequence = [
    {
      title: "1. Выполнение синхронного кода",
      desc: `JavaScript исполняет весь синхронный код по очереди, добавляя вызовы функций в стек вызовов (Call Stack). В этом шаге выполняется основной код и функции без ожидания.`,
    },
    {
      title: "2. Проверка очереди микрозадач (Microtask Queue)",
      desc: `После завершения текущего стека вызовов Event Loop проверяет очередь микрозадач. Микрозадачи, такие как обработчики, добавленные с помощью \`Promise.then\`, \`catch\`, \`finally\` или \`queueMicrotask\`, выполняются перед любыми задачами из очереди задач (Task Queue). Все микрозадачи должны быть выполнены, прежде чем двигаться дальше.`,
    },
    {
      title: "3. Выполнение макрозадач (Task Queue)",
      desc: `После выполнения всех микрозадач Event Loop проверяет очередь задач (Task Queue). Макрозадачи включают события, обработчики событий, асинхронные вызовы, такие как \`setTimeout\` и \`setInterval\`, а также ввод/вывод. Самая первая задача из этой очереди помещается в стек вызовов и исполняется.`,
    },
    {
      title: "4. Повторение цикла",
      desc: `После выполнения всех задач из очереди задач и микрозадач Event Loop снова начинает процесс с первого шага — проверки стека вызовов и выполнения оставшегося кода. Это повторяется до тех пор, пока приложение работает.`,
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
    handleSet("eventLoopSequence", ok, eventLoopSequence)
    setSet(true)
  }

  return (
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {eventLoopSequence.map((item, index) => (
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
          Правильные ответы " {ok.length} из {eventLoopSequence.length} "
        </h2>
        <button style={{ display: set ? 'none' : 'block' }} onClick={toLocal}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export { EventLoop };
