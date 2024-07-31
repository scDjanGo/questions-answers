import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";

function Storage() {
  const [ok, setOk] = useState([]);
  const [set, setSet] = useState(false)



  const storageMethods = [
    {
      title: "localStorage",
      desc: `localStorage предоставляет способ хранения данных в веб-браузере, который сохраняет данные в течение длительного времени. Данные, сохранённые в localStorage, сохраняются даже после закрытия браузера или перезагрузки страницы.`,
    },
    {
      title: "localStorage.setItem - сохраняет данные",
      desc: `Метод \`localStorage.setItem(key, value)\` сохраняет данные в localStorage. Принимает два параметра: \`key\` (ключ, по которому данные будут сохранены) и \`value\` (значение, которое будет сохранено). Значение всегда сохраняется как строка.`,
    },
    {
      title: "localStorage.getItem - возвращает данные",
      desc: `Метод \`localStorage.getItem(key)\` возвращает значение, сохранённое в localStorage по указанному ключу \`key\`. Если данные с таким ключом отсутствуют, возвращает \`null\`.`,
    },
    {
      title: "localStorage-removeItem - удаляет данные",
      desc: `Метод \`localStorage.removeItem(key)\` удаляет данные из localStorage по указанному ключу \`key\`. Если данных с таким ключом нет, метод ничего не делает.`,
    },
    {
      title: "localStorage.clear - удаляет все данные",
      desc: `Метод \`localStorage.clear()\` удаляет все данные из localStorage для текущего домена. Используйте с осторожностью, так как это действие необратимо.`,
    },
    {
      title: "localStorage.key - возвращает имя ключа",
      desc: `Метод \`localStorage.key(index)\` возвращает имя ключа по заданному индексу \`index\`. Индексы начинаются с 0 и идут по порядку. Если индекс выходит за пределы диапазона, возвращает \`null\`.`,
    },
    {
      title: "sessionStorage",
      desc: `sessionStorage предоставляет способ хранения данных в веб-браузере, который сохраняет данные только на время текущей сессии. Данные, сохранённые в sessionStorage, удаляются при закрытии вкладки или окна браузера.`,
    },
    {
      title: "sessionStorage-setItem - сохраняет данные",
      desc: `Метод \`sessionStorage.setItem(key, value)\` сохраняет данные в sessionStorage. Принимает два параметра: \`key\` (ключ, по которому данные будут сохранены) и \`value\` (значение, которое будет сохранено). Значение всегда сохраняется как строка.`,
    },
    {
      title: "sessionStorage-getItem - возвращает данные",
      desc: `Метод \`sessionStorage.getItem(key)\` возвращает значение, сохранённое в sessionStorage по указанному ключу \`key\`. Если данные с таким ключом отсутствуют, возвращает \`null\`.`,
    },
    {
      title: "sessionStorage-removeItem - удаляет данные",
      desc: `Метод \`sessionStorage.removeItem(key)\` удаляет данные из sessionStorage по указанному ключу \`key\`. Если данных с таким ключом нет, метод ничего не делает.`,
    },
    {
      title: "sessionStorage.clear - удаляет все данные",
      desc: `Метод \`sessionStorage.clear()\` удаляет все данные из sessionStorage для текущего домена. Используйте с осторожностью, так как это действие необратимо.`,
    },
    {
      title: "sessionStorage.key - возвращает имя ключа",
      desc: `Метод \`sessionStorage.key(index)\` возвращает имя ключа по заданному индексу \`index\`. Индексы начинаются с 0 и идут по порядку. Если индекс выходит за пределы диапазона, возвращает \`null\`.`,
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
    handleSet("storageMethods", ok, storageMethods)

    setSet(true)
  }

  return (
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {storageMethods.map((item, index) => (
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
          Правильные ответы " {ok.length} из {storageMethods.length} "
        </h2>
        <button style={{ display: set ? 'none' : 'block' }} onClick={toLocal}>
          Дальше
        </button>
      </div>
    </div>
  );
}

export { Storage };
