import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "./components/layout/layout";
import { HomePage } from "./components/layout/homePage/homePage";

//Thems
import { Html } from "./components/thems/html/html";
import { CSS } from "./components/thems/css/css";
import { JS } from "./components/thems/js/js";
import { Dom } from "./components/thems/DOM/dom";
import { Rct } from "./components/thems/react/react";

// Topic pages
import { Pages } from "./components/function/renderComponents/pages/pages";
const { Varible, Data, Operators, Loop,Func,Obj, Arr,Json, StrNum, Storage, DomNav, ClassListModule, Manipulation, Prom, EventLoop, FetchApi, Hooks, Rut} = Pages

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="html" element={<Html />} />
          <Route path="css" element={<CSS />} />
          <Route path="js" element={<JS />}>
            <Route index element={<Navigate to={"varible"} />} />
            <Route path="varible" element={<Varible />} />
            <Route path="data" element={<Data />} />
            <Route path="operators" element={<Operators />} />
            <Route path="loop" element={<Loop />} />
            <Route path="func" element={<Func />} />
            <Route path="obj" element={<Obj />} />
            <Route path="array" element={<Arr />} />
            <Route path="json" element={<Json />} />
            <Route path="strNum" element={<StrNum />} />
            <Route path="storage" element={<Storage />} />
          </Route>
          <Route path="dom" element={<Dom />}>
            <Route index element={<Navigate to={"domNav"} />} />
            <Route path="domNav" element={<DomNav />} />
            <Route path="classList" element={<ClassListModule />} />
            <Route path="manipulation" element={<Manipulation />} />
            <Route path="prom" element={<Prom />} />
            <Route path="eventloop" element={<EventLoop />} />
            <Route path="fetch" element={<FetchApi />} />
          </Route>
          <Route path="react" element={<Rct />}>
            <Route index element={<Navigate to={"hooks"} />} />
            <Route path="hooks" element={<Hooks />} />
            <Route path="route" element={<Rut />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
