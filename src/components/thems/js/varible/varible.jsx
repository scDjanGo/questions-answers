import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";
import { useNavigate } from "react-router-dom";
import {useStartEffect,useTrueAnswers,handleClick,} from "../../../function/startEffect";

function Varible() {
  const [ok, setOk] = useState([]);
  const nav = useNavigate()
  const [truAnswer, setTruAnswer] = useState(0);
  const [passed, setPassed] = useState(false);

  const varibles = [
    {
      title: "var",
      desc: `var - имеет функциональную область видимости (function scope), что означает, что переменная доступна в пределах функции, где она объявлена, или глобально, если объявлена вне функции. var игнорирует блоки кода (например, блоки {} внутри if или for).`,
    },
    {
      title: "let",
      desc: `let имеет блочную область видимости (block scope), что означает, что переменная доступна только внутри блока кода, где она была объявлена.`,
    },
    {
      title: "const",
      desc: `Используется для объявлений неизменяемых переменных (неизменяемость относится только к ссылке на объект, но не к содержимому объекта)`,
    },
  ];

  // startEffect functions
  useStartEffect("Переменные", varibles, setOk, setPassed);
  useTrueAnswers(ok, setTruAnswer);

  const handlePassed = () => {
    setPassed((prev) => !prev);
  };

  const toLocal = () => {
    handleSet("Переменные", ok);
    handlePassed();
    nav("/js/data");
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

export { Varible };
