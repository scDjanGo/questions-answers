import "./style.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [on, setOn] = useState(false);
  const [result, setResult] = useState(null);
  const [tableResult, setTableResult] = useState(null);

  const thems = [
    { placeholder: "HTML", value: "html", id: "formSelect_html" },
    { placeholder: "CSS", value: "css", id: "formSelect_html" },
    { placeholder: "JS", value: "js/varible", id: "formSelect_html" },
    { placeholder: "DOM", value: "dom/domNav", id: "formSelect_html" },
    { placeholder: "React", value: "react/hooks", id: "formSelect_html" },
  ];

  const formData = [
    { id: "first_name", name: "first_name", placeholder: "Имя", type: "text" },
    {
      id: "last_name",
      name: "last_name",
      placeholder: "Фамилия",
      type: "text",
    },
    { id: "group", name: "group", placeholder: "Группа", type: "text" },
  ];

  useEffect(() => {
    const myResults = JSON.parse(localStorage.getItem("result"));
    if (myResults) {
      setResult(myResults);
      setTableResult(Object.entries(myResults.result));
    }else {
      setResult(null)
    }
  }, [on]);

  const handleClear = () => {
    localStorage.removeItem("result");
    setOn((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    formData.result = {};
    localStorage.setItem("result", JSON.stringify(formData));
    navigate(formData.path);
  };

  return (
    <main className="homePage-container">
      {result ? (
        <div className="result">
          <h2>Результат</h2>
          <div className="about">
            <div>
              <span>Имя</span>
              <h3>{result.first_name || "Пусто"}</h3>
            </div>
            <div>
              <span>Фамилия</span>
              <h3>{result.last_name || "Пусто"}</h3>
            </div>
            <div>
              <span>Группа</span>
              <h3>{result.group || "Пусто"}</h3>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <td>Тема</td>
                <td> Вопросы</td>
                <td>Ложные ответы</td>
                <td>Верные ответы</td>
              </tr>
            </thead>
            <tbody>
              {tableResult.map((item, index) => (
                <tr key={index} className={(item[1].reduce((acc, i) => i === 0 ? acc += 1 : acc, 0) >= item[1].reduce((acc, i) => i === 1 ? acc += 1 : acc, 0)) ? "fall" : 'good' }>
                  <td>{item[0]}</td>
                  <td>{item[1].length} шт</td>
                  <td>
                    {item[1].reduce(
                      (num, item) => (item === 0 ? (num += 1) : num),
                      0
                    )}{" "}
                    шт
                  </td>
                  <td>
                    {item[1].reduce(
                      (num, item) => (item === 1 ? (num += 1) : num),
                      0
                    )}{" "}
                    шт
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="all-results">
            <span>Итог</span>
            <p>Правильные ответы: {tableResult.reduce((num, item) => {
              return num += item[1].reduce((num2, elem) => elem === 1 ? num2 += 1 : num2, 0)
            }, 0)} из {tableResult.reduce((num, item) => num += item[1].length, 0)}</p>
          </div>

          <button onClick={handleClear}>Закончить тест</button>
        </div>
      ) : (
        <div className="inner">
          <div className="text">
            <h2>hello world.</h2>
          </div>
          <form onSubmit={handleSubmit}>
            {formData.map((item, index) => (
              <label key={index} htmlFor={item.id}>
                {item.placeholder}
                <input id={item.id} name={item.id} type={item.type} required />
              </label>
            ))}
            <div className="select">
              <select name="path" id="path">
                {thems.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.placeholder}
                  </option>
                ))}
              </select>
            </div>

            <button>Начать</button>
          </form>
        </div>
      )}
    </main>
  );
}

export { HomePage };
