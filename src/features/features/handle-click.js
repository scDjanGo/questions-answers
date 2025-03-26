export const handleClick = (index, setOk) => {
  setOk((prev) => {
    const newElement = [...prev];
    newElement[index] = newElement[index] === 0 ? 1 : 0;
    return newElement;
  });
};
