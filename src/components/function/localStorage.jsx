export const handleSet = (name, ok, arr) => {
  const data = JSON.parse(localStorage.getItem("data"));
  let newData;
  if (data) {
    newData = {
      ...data,
      [name]: ok.length,
      answer: (+arr.length + +data.answer).toString(),
    };
  } else {
    newData = {
      [name]: ok.length,
      answer: arr.length.toString(),
    };
  }
  localStorage.setItem("data", JSON.stringify(newData));
};
