import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";
import { useNavigate } from "react-router-dom";
import {useStartEffect,useTrueAnswers,handleClick,} from "../../../function/startEffect";

function FetchApi() {
  const [ok, setOk] = useState([]);
  const nav = useNavigate()
  const [truAnswer, setTruAnswer] = useState(0);
  const [passed, setPassed] = useState(false);

  const fetchMethods = [
    {
      title: "fetch - выполнение HTTP-запросов",
      desc: `Метод \`fetch(url, options)\` используется для выполнения HTTP-запросов. Он принимает два параметра: \`url\` — адрес ресурса и \`options\` (необязательный) — объект с настройками запроса. Возвращает промис, который разрешается в объект \`Response\`, представляющий ответ на запрос.`,
    },
    {
      title: "Response.json - парсинг JSON",
      desc: `Метод \`response.json()\` используется для парсинга тела ответа в формате JSON. Возвращает промис, который разрешается в объект JavaScript, созданный из JSON-данных.`,
    },
    {
      title: "Request.method - метод запроса",
      desc: `Свойство \`request.method\` у объекта \`Request\` указывает HTTP-метод, используемый в запросе (например, 'GET', 'POST'). Метод указывается в объекте \`options\` при вызове \`fetch\`.`,
    },
    {
      title: "Request.headers - заголовки запроса",
      desc: `Свойство \`request.headers\` у объекта \`Request\` содержит заголовки запроса. Заголовки могут быть переданы в объекте \`options\` при вызове \`fetch\`, либо использованы по умолчанию.`,
    },
    {
      title: "Request.body - тело запроса",
      desc: `Свойство \`request.body\` у объекта \`Request\` содержит тело запроса. Тело запроса может быть задано в объекте \`options\` при вызове \`fetch\`, например, для отправки данных в запросе POST.`,
    },
    {
      title: "fetch - метод GET",
      desc: `Метод \`fetch(url)\` с параметрами по умолчанию выполняет HTTP-запрос типа GET, который используется для получения данных с сервера.`,
    },
    {
      title: "fetch - метод PATCH",
      desc: `Метод \`fetch(url, { method: 'PATCH', body: data })\` выполняет HTTP-запрос типа PATCH. Этот метод используется для частичного обновления данных на сервере. В параметре \`body\` указывается обновлённые данные, которые будут применены к существующему ресурсу.`,
    },
    {
      title: "fetch - метод POST",
      desc: `Метод \`fetch(url, { method: 'POST', body: data })\` выполняет HTTP-запрос типа POST. Этот метод используется для отправки данных на сервер. В параметре \`body\` указывается данные, которые будут отправлены на сервер (например, JSON или форма).`,
    },
    {
      title: "fetch - метод PUT",
      desc: `Метод \`fetch(url, { method: 'PUT', body: data })\` выполняет HTTP-запрос типа PUT. Этот метод используется для обновления данных на сервере. В параметре \`body\` указывается обновлённые данные, которые будут отправлены на сервер.`,
    },
    {
      title: "fetch - метод DELETE",
      desc: `Метод \`fetch(url, { method: 'DELETE' })\` выполняет HTTP-запрос типа DELETE. Этот метод используется для удаления данных на сервере. Параметр \`body\` обычно не используется с методом DELETE, но его можно указать при необходимости.`,
    },
    {
      title: "axios.request - метод REQUEST",
      desc: `Метод \`axios.request(config)\` используется для выполнения HTTP-запроса с полной конфигурацией. Этот метод позволяет указать URL, метод, заголовки, данные и другие параметры запроса.`,
    },
    {
      title: "axios.create - создание экземпляра",
      desc: `Метод \`axios.create(config)\` используется для создания нового экземпляра Axios с предустановленными настройками. Возвращает новый экземпляр Axios, который можно использовать для выполнения запросов с указанными настройками.`,
    },
    {
      title: "axios.interceptors - перехватчики",
      desc: `Axios позволяет добавлять перехватчики запросов и ответов с помощью \`axios.interceptors.request.use\` и \`axios.interceptors.response.use\`. Перехватчики позволяют выполнять действия до отправки запроса или после получения ответа.`,
    },
    {
      title: "axios.defaults - настройки по умолчанию",
      desc: `Объект \`axios.defaults\` используется для указания глобальных настроек, которые будут применяться ко всем запросам, выполненным с помощью Axios. Например, можно указать базовый URL, заголовки по умолчанию и другие параметры.`,
    }
  
  ];
  
    

  // startEffect functions
  useStartEffect("fetcg/axios", fetchMethods, setOk, setPassed);
  useTrueAnswers(ok, setTruAnswer);

  const handlePassed = () => {
    setPassed((prev) => !prev);
  };

  const toLocal = () => {
    handleSet("fetch/axios", ok);
    handlePassed();
    nav("/react/hooks");
  };

  return (
    <>
    {passed && (
    <div className="answers top">
      <>
      <button onClick={() => { handlePassed()}}>
        Перепройти
      </button>
      <h2>Правильные ответы " {truAnswer} из {fetchMethods.length} "</h2>
      </>
    </div>
    )}
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {fetchMethods.map((item, index) => (
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
        <h2>Правильные ответы " {truAnswer} из {fetchMethods.length} "</h2>
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

export { FetchApi };
