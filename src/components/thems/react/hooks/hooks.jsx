import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";

function Hooks() {
  const [ok, setOk] = useState([]);
  const [set, setSet] = useState(false)



  const reactHooks = [
    {
      title: "useState - управление состоянием",
      desc: `Хук \`useState(initialState)\` позволяет добавить состояние в функциональные компоненты. При вызове он возвращает массив с двумя элементами: текущее состояние и функция для его обновления. \`initialState\` задаёт начальное значение состояния.`,
    },
    {
      title: "useEffect - побочные эффекты",
      desc: `Хук \`useEffect(callback, [dependencies])\` позволяет выполнять побочные эффекты в функциональных компонентах, такие как получение данных, подписки или манипуляции с DOM. \`callback\` выполняется после рендеринга компонента. \`[dependencies]\` — массив зависимостей, который определяет, когда \`callback\` должен выполняться.`,
    },
    {
      title: "useContext - доступ к контексту",
      desc: `Хук \`useContext(Context)\` позволяет получить значение из контекста. Контекст создаётся с помощью \`React.createContext\` и используется для передачи данных через дерево компонентов без необходимости прокидывания пропсов.`,
    },
    {
      title: "useReducer - управление состоянием с редьюсером",
      desc: `Хук \`useReducer(reducer, initialState)\` используется для управления состоянием с помощью редьюсера, что может быть полезно для сложного состояния. \`reducer\` — функция, которая принимает текущее состояние и действие, и возвращает новое состояние. \`initialState\` задаёт начальное состояние.`,
    },
    {
      title: "useMemo - мемоизация значений",
      desc: `Хук \`useMemo(callback, [dependencies])\` позволяет мемоизировать значения, чтобы избежать их перерасчёта при каждом рендеринге. \`callback\` выполняется только при изменении значений в массиве \`[dependencies]\`, что может повысить производительность компонентов.`,
    },
    {
      title: "useCallback - мемоизация функций",
      desc: `Хук \`useCallback(callback, [dependencies])\` позволяет мемоизировать функции, чтобы предотвратить их пересоздание при каждом рендеринге компонента. \`callback\` выполняется только при изменении значений в массиве \`[dependencies]\`, что может улучшить производительность при передаче функций в дочерние компоненты.`,
    },
    {
      title: "useRef - доступ к DOM элементам",
      desc: `Хук \`useRef(initialValue)\` возвращает объект с свойством \`current\`, которое может быть использовано для хранения мутируемых значений или ссылок на DOM-элементы. Значение \`current\` сохраняется между рендерами и не вызывает повторный рендер компонента при его изменении.`,
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
    handleSet("reactHooks", ok, reactHooks)
    setSet(true)
  }

  return (
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {reactHooks.map((item, index) => (
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
          Правильные ответы " {ok.length} из {reactHooks.length} "
        </h2>
        <button style={{ display: set ? 'none' : 'block' }} onClick={toLocal}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export { Hooks };
