import { useState } from "react";
import { Cart } from "../../../function/cart/carts";
import { handleSet } from "../../../function/localStorage";
import { useNavigate } from "react-router-dom";
import {useStartEffect,useTrueAnswers,handleClick,} from "../../../function/startEffect";

function Rut() {
  const [ok, setOk] = useState([]);
  const nav = useNavigate()
  const [truAnswer, setTruAnswer] = useState(0);
  const [passed, setPassed] = useState(false);



  const reactRouterDom = [
    {
      title: "BrowserRouter - контейнер маршрутизации",
      desc: `Компонент \`<BrowserRouter>\` используется для оборачивания приложения и управления маршрутизацией с помощью HTML5 History API. Он предоставляет контекст маршрутизации для всех дочерних компонентов. Обычно используется как корневой компонент приложения.`,
    },
    {
      title: "Routes - определение маршрутов",
      desc: `Компонент \`<Routes>\` используется для определения маршрутов и их соответствующих компонентов. Он заменяет старый компонент \`<Switch>\`. Внутри \`<Routes>\` используются компоненты \`<Route>\` для указания, какой компонент должен рендериться для каждого пути.`,
    },
    {
      title: "Route - определение маршрутов",
      desc: `Компонент \`<Route>\` определяет, какой компонент должен быть отрендерен для заданного пути. Используется внутри \`<Routes>\`. Пример: \`<Route path="/" element={<Home />} />\` указывает, что компонент \`<Home>\` должен быть отрендерен для пути \`/\`.`,
    },
    {
      title: "Link - навигация между страницами",
      desc: `Компонент \`<Link>\` используется для создания ссылок, которые позволяют пользователям перемещаться между различными маршрутами в приложении. Он заменяет стандартный тег \`<a>\` и предотвращает перезагрузку страницы.`,
    },
    {
      title: "NavLink - активные ссылки",
      desc: `Компонент \`<NavLink>\` аналогичен \`<Link>\`, но позволяет добавлять активные стили к текущему маршруту. Это полезно для отображения активного состояния навигационного элемента.`,
    },
    {
      title: "useNavigate - программная навигация",
      desc: `Хук \`useNavigate()\` предоставляет функцию для программной навигации в приложении. Используется для выполнения навигации в коде, например, при отправке формы или выполнении каких-то действий. Возвращает функцию, которая принимает путь и параметры навигации.`,
    },
    {
      title: "useLocation - доступ к информации о маршруте",
      desc: `Хук \`useLocation()\` предоставляет информацию о текущем местоположении в приложении, такую как текущий путь и состояние. Это полезно для выполнения действий в зависимости от текущего маршрута.`,
    },
    {
      title: "useParams - доступ к параметрам маршрута",
      desc: `Хук \`useParams()\` позволяет получить параметры из URL. Это полезно для работы с динамическими маршрутами, где путь содержит параметры, такие как ID или имена. Возвращает объект с параметрами маршрута.`,
    },
    {
      title: "Outlet - отображение вложенных маршрутов",
      desc: `Компонент \`<Outlet>\` используется для отображения дочерних маршрутов внутри родительского маршрута. Это позволяет создавать вложенные маршруты и отображать их в определённых областях компонента.`,
    },
  ];
  
    

  // startEffect functions
  useStartEffect("React-router", reactRouterDom, setOk, setPassed);
  useTrueAnswers(ok, setTruAnswer);

  const handlePassed = () => {
    setPassed((prev) => !prev);
  };

  const toLocal = () => {
    handleSet("React-router", ok);
    handlePassed();
    nav("/");
  };

  return (
    <>
    {passed && (
    <div className="answers top">
      <>
      <button onClick={() => { handlePassed()}}>
        Перепройти
      </button>
      <h2>Правильные ответы " {truAnswer} из {reactRouterDom.length} "</h2>
      </>
    </div>
    )}
    <div className="varible-container">
      <div className="inner">
        <div className="carts">
          {reactRouterDom.map((item, index) => (
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
        <h2>Правильные ответы " {truAnswer} из {reactRouterDom.length} "</h2>
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

export { Rut };
