import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";

function Jso() {
  const [ok, setOk] = useState([]);
  const [set, setSet] = useState(false)
  
  const jsonAndTimingFunctions = [
    {
      title: "JSON",
      desc: `JSON (JavaScript Object Notation) — это формат обмена данными, который представляет собой текстовый формат для хранения и передачи данных. Он используется для обмена данными между клиентом и сервером. JSON легко читается человеком и парсится программами.`,
    },
    {
      title: "Метод `JSON.parse()`",
      desc: `Метод \`JSON.parse(text, reviver)\` преобразует строку в формате JSON в JavaScript-объект. При этом можно использовать функцию \`reviver\`, чтобы изменить или фильтровать значения во время преобразования.`,
    },
    {
      title: "Метод `JSON.stringify()`",
      desc: `Метод \`JSON.stringify(value, replacer, space)\` преобразует JavaScript-объект в строку JSON. Можно использовать параметр \`replacer\` для фильтрации значений, а параметр \`space\` для добавления отступов для форматирования строки.`,
    },
    {
      title: "Функция `setTimeout()`",
      desc: `Функция \`setTimeout(callback, delay)\` запускает функцию \`callback\` через заданное время \`delay\` (в миллисекундах). Возвращает идентификатор таймера, который можно использовать для его отмены с помощью \`clearTimeout\`. `,
    },
    {
      title: "Функция `setInterval()`",
      desc: `Функция \`setInterval(callback, interval)\` запускает функцию \`callback\` через определённые интервалы времени \`interval\` (в миллисекундах). Возвращает идентификатор интервала, который можно использовать для его отмены с помощью \`clearInterval\`. `,
    },
    {
      title: "Функция `clearTimeout()`",
      desc: `Функция \`clearTimeout(timeoutId)\` отменяет таймер, заданный с помощью \`setTimeout()\`, используя идентификатор таймера \`timeoutId\`. Таймер больше не будет выполнен.`,
    },
    {
      title: "Функция `clearInterval()`",
      desc: `Функция \`clearInterval(intervalId)\` отменяет интервал, заданный с помощью \`setInterval()\`, используя идентификатор интервала \`intervalId\`. Интервал больше не будет продолжать выполнение.`,
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
    handleSet("jsonAndTimingFunctions", ok, jsonAndTimingFunctions)

    setSet(true)
  }

  return (
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {jsonAndTimingFunctions.map((item, index) => (
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
          Правильные ответы " {ok.length} из {jsonAndTimingFunctions.length} "
        </h2>
        <button style={{ display: set ? 'none' : 'block' }} onClick={toLocal}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export { Jso };
