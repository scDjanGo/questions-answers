import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";

function Varible() {
  const [ok, setOk] = useState([]);
  const [set, setSet] = useState(false)

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

  const handleClick = (i) => {
    if (ok.includes(i)) {
      setOk(ok.filter((index) => index !== i));
    } else {
      setOk([...ok, i]);
    }
  };

  const toLocal =() => {
    handleSet("varibles", ok, varibles)

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

export { Varible };
