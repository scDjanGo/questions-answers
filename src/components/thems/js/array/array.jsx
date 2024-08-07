import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";
import { useNavigate } from "react-router-dom";
import {useStartEffect,useTrueAnswers,handleClick,} from "../../../function/startEffect";

function Arr() {
  const [ok, setOk] = useState([]);
  const nav = useNavigate()
  const [truAnswer, setTruAnswer] = useState(0);
  const [passed, setPassed] = useState(false);

  const arrays = [
    {
      title: "Массивы",
      desc: `Массивы в JavaScript — это объекты, представляющие собой упорядоченные коллекции значений. Они могут содержать элементы любых типов данных и имеют числовые индексы для доступа к этим элементам.`,
    },
    {
      title: "Создание массивов",
      desc: `Массивы можно создавать различными способами:
             - С помощью литерала массива: \`const arr = [1, 2, 3];\`
             - С помощью конструктора \`Array\`: \`const arr = new Array(3);\` (создаёт массив с 3 неинициализированными элементами).`,
    },
    {
      title: "Метод `Array.isArray()`",
      desc: `Метод \`Array.isArray(value)\` проверяет, является ли переданное значение массивом. Возвращает \`true\`, если значение является массивом, и \`false\` в противном случае.`,
    },
    {
      title: "Метод `Array.push()`",
      desc: `Метод \`Array.push(...items)\` добавляет один или несколько элементов в конец массива и возвращает новую длину массива.`,
    },
    {
      title: "Метод `Array.pop()`",
      desc: `Метод \`Array.pop()\` удаляет последний элемент из массива и возвращает его. Изменяет длину массива.`,
    },
    {
      title: "Метод `Array.shift()`",
      desc: `Метод \`Array.shift()\` удаляет первый элемент из массива и возвращает его. Изменяет длину массива.`,
    },
    {
      title: "Метод `Array.unshift()`",
      desc: `Метод \`Array.unshift(...items)\` добавляет один или несколько элементов в начало массива и возвращает новую длину массива.`,
    },
    {
      title: "Метод `Array.concat()`",
      desc: `Метод \`Array.concat(...arrays_or_values)\` объединяет два или более массива в один новый массив. Не изменяет исходные массивы.`,
    },
    {
      title: "Метод `Array.slice()`",
      desc: `Метод \`Array.slice(start, end)\` возвращает новый массив, содержащий копию части исходного массива, начиная с индекса \`start\` и заканчивая индексом \`end\` (не включая его). Исходный массив не изменяется.`,
    },
    {
      title: "Метод `Array.splice()`",
      desc: `Метод \`Array.splice(start, deleteCount, ...items)\` изменяет содержимое массива, удаляя или заменяя существующие элементы и/или добавляя новые элементы. Возвращает массив удалённых элементов.`,
    },
    {
      title: "Метод `Array.forEach()`",
      desc: `Метод \`Array.forEach(callback, thisArg)\` выполняет предоставленную функцию один раз для каждого элемента массива. Не возвращает ничего.`,
    },
    {
      title: "Метод `Array.map()`",
      desc: `Метод \`Array.map(callback, thisArg)\` создаёт новый массив с результатами вызова предоставленной функции для каждого элемента массива. Не изменяет исходный массив.`,
    },
    {
      title: "Метод `Array.filter()`",
      desc: `Метод \`Array.filter(callback, thisArg)\` создаёт новый массив с элементами, которые прошли проверку предоставленной функции. Не изменяет исходный массив.`,
    },
    {
      title: "Метод `Array.reduce()`",
      desc: `Метод \`Array.reduce(callback, initialValue)\` выполняет функцию редукции для каждого элемента массива, от первого к последнему, и возвращает одно итоговое значение. \`initialValue\` является необязательным.`,
    },
    {
      title: "Метод `Array.find()`",
      desc: `Метод \`Array.find(callback, thisArg)\` возвращает первый элемент массива, который удовлетворяет предоставленной функции, или \`undefined\`, если ни один элемент не соответствует.`,
    },
    {
      title: "Метод `Array.findIndex()`",
      desc: `Метод \`Array.findIndex(callback, thisArg)\` возвращает индекс первого элемента массива, который удовлетворяет предоставленной функции, или \`-1\`, если ни один элемент не соответствует.`,
    },
    {
      title: "Метод `Array.some()`",
      desc: `Метод \`Array.some(callback, thisArg)\` проверяет, удовлетворяет ли хотя бы один элемент массива предоставленной функции. Возвращает \`true\`, если такой элемент найден, и \`false\`, если нет.`,
    },
    {
      title: "Метод `Array.every()`",
      desc: `Метод \`Array.every(callback, thisArg)\` проверяет, удовлетворяют ли все элементы массива предоставленной функции. Возвращает \`true\`, если все элементы соответствуют, и \`false\`, если нет.`,
    },
    {
      title: "Метод `Array.sort()`",
      desc: `Метод \`Array.sort(compareFunction)\` сортирует элементы массива на месте и возвращает отсортированный массив. Если функция сравнения не указана, элементы сортируются как строки.`,
    },
    {
      title: "Метод `Array.reverse()`",
      desc: `Метод \`Array.reverse()\` изменяет порядок элементов массива на обратный и возвращает изменённый массив.`,
    },
    {
      title: "Метод `Array.includes()`",
      desc: `Метод \`Array.includes(valueToFind, fromIndex)\` проверяет, содержит ли массив указанный элемент \`valueToFind\`, начиная с индекса \`fromIndex\`. Возвращает \`true\`, если элемент найден, и \`false\`, если нет.`,
    },
    {
      title: "Метод `Array.join()`",
      desc: `Метод \`Array.join(separator)\` объединяет все элементы массива в строку, используя указанный разделитель \`separator\`. По умолчанию элементы разделяются запятой.`,
    },
    {
      title: "Метод `Array.copyWithin()`",
      desc: `Метод \`Array.copyWithin(target, start, end)\` копирует часть массива в другое место в том же массиве. Не изменяет длину массива.`,
    },
    {
      title: "Метод `Array.fill()`",
      desc: `Метод \`Array.fill(value, start, end)\` заменяет все элементы массива от индекса \`start\` до \`end\` на указанное значение \`value\`. Если \`start\` и \`end\` не указаны, заполняется весь массив.`,
    },
    {
      title: "Метод `Array.from()`",
      desc: `Метод \`Array.from(arrayLike, mapFunction, thisArg)\` создаёт новый массив из массивоподобного объекта или итерируемого объекта. Можно также использовать функцию отображения \`mapFunction\` для преобразования элементов.`,
    },
  ];

  // startEffect functions
  useStartEffect("Методы массива", arrays, setOk, setPassed);
  useTrueAnswers(ok, setTruAnswer);

  const handlePassed = () => {
    setPassed((prev) => !prev);
  };

  const toLocal = () => {
    handleSet("Методы массива", ok);
    handlePassed();
    nav("/js/json");
  };
  return (
    <>
    {passed && (
    <div className="answers top">
      <>
      <button onClick={() => { handlePassed()}}>
        Перепройти
      </button>
      <h2>Правильные ответы " {truAnswer} из {arrays.length} "</h2>
      </>
    </div>
    )}
      <div className="varible-container">
        <div className="inner">
          <div className="carts">
            {arrays.map((item, index) => (
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
        <h2>Правильные ответы " {truAnswer} из {arrays.length} "</h2>
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

export { Arr };
