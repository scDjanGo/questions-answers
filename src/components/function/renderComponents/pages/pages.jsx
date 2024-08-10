import { Cart } from "../carts/carts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from './../../data';
import { useStartEffect, useTrueAnswers, handleClick } from './../../useStartEffect';
import { handleSet } from './../../localStorage';
import { RenderCarts } from './../RenderCarts';

const Pages = data.reduce((acc, item) => {
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
      handleSet(item.name, ok)
      handlePassed();
      nav(item.nextPath)
    };

    return (
      <RenderCarts
        passed={passed}
        handlePassed={handlePassed}
        handleClick={handleClick}
        dataArray={item.data}
        setOk={setOk}
        ok={ok}
        truAnswer={truAnswer}
        Cart={Cart}
        toLocal={toLocal}
      />
    );
  };
  
  return acc;
}, {});

export { Pages };