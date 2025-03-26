import { useEffect } from "react";

export const useStartEffect = (name, carts, setOk, setPassed) => {
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("result"));
    if (localData?.result?.[name]) {
      setOk(localData.result[name]);
      setPassed(prev => !prev)
    } else {
      setOk(Array(carts.length).fill(0));
    }
  }, [carts.length, name, setOk, setPassed]);
};


export const useTrueAnswers = (ok, setTruAnswer) => {
  useEffect(() => {
    setTruAnswer(ok.reduce((num, item) => (item === 1 ? (num += 1) : num), 0));
  }, [ok, setTruAnswer]);
};
