import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";

function Loop() {
  const [ok, setOk] = useState([]);
  const [set, setSet] = useState(false)
  const loopsAndRecursion = [
    {
      title: "Цикл `for`",
      desc: `Цикл \`for\` используется для выполнения блока кода несколько раз, пока условие истинно. Он включает три части: инициализацию, условие и итерацию.`,
    },
    {
      title: "Цикл `while`",
      desc: `Цикл \`while\` выполняет блок кода, пока указанное условие истинно. Если условие изначально ложно, код в цикле может не выполниться ни разу.`,
    },
    {
      title: "Цикл `do...while`",
      desc: `Цикл \`do...while\` похож на цикл \`while\`, но гарантирует, что блок кода выполнится хотя бы один раз, даже если условие ложно.`,
    },
    {
      title: "Цикл `for...in`",
      desc: `Цикл \`for...in\` используется для перебора свойств объекта. Он перебирает все перечисляемые свойства объекта, включая унаследованные свойства.`,
    },
    {
      title: "Цикл `for...of`",
      desc: `Цикл \`for...of\` используется для перебора элементов коллекций, таких как массивы, строки, карты и множества. Он перебирает значения, а не ключи.`,
    },
    {
      title: "Рекурсия",
      desc: `Рекурсия — это техника программирования, когда функция вызывает саму себя. Это полезно для решения задач, которые можно разбить на подобные подзадачи. Основные элементы рекурсии включают базовый случай, при котором рекурсия прекращается, и рекурсивный случай, где функция вызывает сама себя.`,
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
    handleSet("loopsAndRecursion", ok, loopsAndRecursion)

    setSet(true)
  }

  return (
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {loopsAndRecursion.map((item, index) => (
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
          Правильные ответы " {ok.length} из {loopsAndRecursion.length} "
        </h2>
        <button style={{ display: set ? 'none' : 'block' }} onClick={toLocal}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export { Loop };
