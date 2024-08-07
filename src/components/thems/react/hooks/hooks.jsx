import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";
import { useNavigate } from "react-router-dom";
import {useStartEffect,useTrueAnswers,handleClick,} from "../../../function/startEffect";

function Hooks() {
  const [ok, setOk] = useState([]);
  const nav = useNavigate()
  const [truAnswer, setTruAnswer] = useState(0);
  const [passed, setPassed] = useState(false);



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
  
  
    

  // startEffect functions
  useStartEffect("Хуки", reactHooks, setOk, setPassed);
  useTrueAnswers(ok, setTruAnswer);

  const handlePassed = () => {
    setPassed((prev) => !prev);
  };

  const toLocal = () => {
    handleSet("Хуки", ok);
    handlePassed();
    nav("/react/route");
  };

  return (
    <>
    {passed && (
    <div className="answers top">
      <>
      <button onClick={() => { handlePassed()}}>
        Перепройти
      </button>
      <h2>Правильные ответы " {truAnswer} из {reactHooks.length} "</h2>
      </>
    </div>
    )}
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {reactHooks.map((item, index) => (
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
        <h2>Правильные ответы " {truAnswer} из {reactHooks.length} "</h2>
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


export { Hooks };
