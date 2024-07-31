import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";

function StrNum() {
  const [ok, setOk] = useState([]);
  const [set, setSet] = useState(false)


  const stringAndNumberMethods = [
    {
      title: "Строки (String)",
      desc: `Строки в JavaScript представляют собой последовательности символов, используемые для хранения и работы с текстовой информацией. Они являются примитивным типом данных и обладают множеством встроенных методов.`,
    },
    {
      title: "Метод `String.length`",
      desc: `Свойство \`String.length\` возвращает количество символов в строке.`,
    },
    {
      title: "Метод `String.charAt()`",
      desc: `Метод \`String.charAt(index)\` возвращает символ строки по указанному индексу \`index\`. Если индекс выходит за пределы строки, возвращает пустую строку.`,
    },
    {
      title: "Метод `String.includes()`",
      desc: `Метод \`String.includes(searchString, position)\` проверяет, содержится ли в строке подстрока \`searchString\` начиная с позиции \`position\`. Возвращает \`true\`, если подстрока найдена, и \`false\`, если нет.`,
    },
    {
      title: "Метод `String.indexOf()`",
      desc: `Метод \`String.indexOf(searchValue, fromIndex)\` возвращает индекс первого вхождения подстроки \`searchValue\`, начиная с позиции \`fromIndex\`. Возвращает \`-1\`, если подстрока не найдена.`,
    },
    {
      title: "Метод `String.slice()`",
      desc: `Метод \`String.slice(beginIndex, endIndex)\` возвращает новую строку, содержащую часть исходной строки, начиная с индекса \`beginIndex\` и заканчивая индексом \`endIndex\` (не включая его).`,
    },
    {
      title: "Метод `String.substring()`",
      desc: `Метод \`String.substring(indexStart, indexEnd)\` возвращает новую строку, содержащую символы из исходной строки между индексами \`indexStart\` и \`indexEnd\` (не включая \`indexEnd\`).`,
    },
    {
      title: "Метод `String.toLowerCase()`",
      desc: `Метод \`String.toLowerCase()\` возвращает новую строку, в которой все символы преобразованы в нижний регистр.`,
    },
    {
      title: "Метод `String.toUpperCase()`",
      desc: `Метод \`String.toUpperCase()\` возвращает новую строку, в которой все символы преобразованы в верхний регистр.`,
    },
    {
      title: "Метод `String.trim()`",
      desc: `Метод \`String.trim()\` возвращает новую строку, в которой удалены пробелы с начала и конца строки.`,
    },
    {
      title: "Метод `String.replace()`",
      desc: `Метод \`String.replace(searchValue, newValue)\` возвращает новую строку, в которой первое вхождение \`searchValue\` заменено на \`newValue\`. Если \`searchValue\` является регулярным выражением, заменяются все совпадения.`,
    },
    {
      title: "Метод `String.split()`",
      desc: `Метод \`String.split(separator, limit)\` разбивает строку на массив подстрок, разделённых указанным разделителем \`separator\`. Если \`limit\` указан, возвращается не более \`limit\` элементов.`,
    },
    {
      title: "Метод `String.repeat()`",
      desc: `Метод \`String.repeat(count)\` возвращает новую строку, состоящую из повторяющихся строк \`count\` раз.`,
    },
    {
      title: "Числа (Number)",
      desc: `Числа в JavaScript представляют собой примитивный тип данных для хранения числовых значений. Они включают в себя целые числа, числа с плавающей запятой и специальные значения NaN, Infinity и -Infinity.`,
    },
    {
      title: "Метод `Number.toFixed()`",
      desc: `Метод \`Number.toFixed(digits)\` возвращает строку, представляющую число с фиксированным количеством десятичных знаков \`digits\`. Округляет число до указанного количества знаков после запятой.`,
    },
    {
      title: "Метод `Number.parseFloat()`",
      desc: `Метод \`Number.parseFloat(string)\` преобразует строку \`string\` в число с плавающей запятой. Игнорирует начальные пробелы и останавливается на первом недопустимом символе.`,
    },
    {
      title: "Метод `Number.parseInt()`",
      desc: `Метод \`Number.parseInt(string, radix)\` преобразует строку \`string\` в целое число, используя основание \`radix\` системы счисления (по умолчанию 10).`,
    },
    {
      title: "Метод `Number.isNaN()`",
      desc: `Метод \`Number.isNaN(value)\` проверяет, является ли переданное значение NaN (Not-a-Number). Возвращает \`true\`, если значение NaN, и \`false\`, если нет.`,
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
    handleSet("stringAndNumberMethods", ok, stringAndNumberMethods)

    setSet(true)
  }

  return (
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {stringAndNumberMethods.map((item, index) => (
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
          Правильные ответы " {ok.length} из {stringAndNumberMethods.length} "
        </h2>
        <button style={{ display: set ? 'none' : 'block' }} onClick={toLocal}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export { StrNum };
