
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {HTML, Css, JavaScript, DOM, React } from "../data/data";
import { useStartEffect, useTrueAnswers } from "../features/hooks/custom-hooks";
import { LocalStorageMove } from "../features/features/localStorage-move";
import RenderCards from "../components/cards/render-cards";

const Pages = [...HTML, ...Css, ...JavaScript, ...DOM, ...React].reduce((acc, item, index, arr) => {

  acc[item.ComponentName] = function PageComponent() {
    const nav = useNavigate();
    const [ok, setOk] = useState([]);
    const [truAnswer, setTruAnswer] = useState(0);
    const [passed, setPassed] = useState(false);

    useStartEffect(item.name, item.data, setOk, setPassed);
    useTrueAnswers(ok, setTruAnswer);

    const handlePassed = () => {
      setPassed(prev => !prev);
    };

    const toLocal = () => {
     LocalStorageMove(item.name, ok)
      handlePassed();
      index + 1 === arr.length ? nav("/") : nav(arr[index + 1].path)
    };

    return (
      <RenderCards
        passed={passed}
        handlePassed={handlePassed}
        // handleClick={handleClick}
        dataArray={item.data}
        setOk={setOk}
        ok={ok}
        truAnswer={truAnswer}
        toLocal={toLocal}
      />
    );
  };
  
  return acc;
}, {});

export { Pages };