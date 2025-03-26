export function  LocalStorageMove  (name, ok) {
    const storedResult = localStorage.getItem("result");
    const result = storedResult ? JSON.parse(storedResult) : {};
  
    if (typeof result !== "object" || result === null) {
      localStorage.setItem("result", {
        first_name: null,
        last_name_name: null,
        group: null,
        result: {
          [name]: ok,
        },
      });
    } else if (typeof result === "object") {
      if (typeof result.result === "object") {
        result.result[name] = ok;
        localStorage.setItem("result", JSON.stringify(result));
      }else {
        result.result = {};
        result.result[name] = ok;
        localStorage.setItem("result", JSON.stringify(result));
      }
    } else {
      result.result = {};
      result.result[name] = ok;
      localStorage.setItem("result", JSON.stringify(result));
    }
  };
  