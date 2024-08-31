import { Cart } from "../carts/carts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {HTML, Css, JavaScript, DOM, React } from './../../data';
import { useStartEffect, useTrueAnswers, handleClick } from './../../useStartEffect';
import { handleSet } from './../../localStorage';
import { RenderCarts } from './../RenderCarts';

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
      handleSet(item.name, ok)
      handlePassed();
      index + 1 === arr.length ? nav("/") : nav(arr[index + 1].path)
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