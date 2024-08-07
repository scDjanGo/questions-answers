import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "./components/layout/layout";
import { HomePage } from "./components/homePage/homePage";
import { Html } from "./components/thems/html/html";
import { CSS } from "./components/thems/css/css";
import { JS } from "./components/thems/js/js";
import { Varible } from "./components/thems/js/varible/varible";
import { Data } from "./components/thems/js/data/data";
import { Operators } from "./components/thems/js/operators/operators";
import { Loop } from "./components/thems/js/loop/loop";
import { Function } from "./components/thems/js/func/func";
import { Obj } from "./components/thems/js/object/object";
import { Arr } from "./components/thems/js/array/array";
import { Jso } from "./components/thems/js/json/json";
import { StrNum } from "./components/thems/js/str&num/strnum";
import { Storage } from "./components/thems/js/storage/storage";
import { Dom } from "./components/thems/DOM/dom";
import { DomNavigate } from "./components/thems/DOM/navigation/navigation";
import { ClassListModule } from "./components/thems/DOM/classList/classList";
import { Prom } from "./components/thems/DOM/promise/promise";
import { EventLoop } from "./components/thems/DOM/eventLoop/eventLoop";
import { Manipulation } from "./components/thems/DOM/manipulation/manipulation";
import { FetchApi } from "./components/thems/DOM/fetch/fetch";
import { Rct } from "./components/thems/react/react";
import { Hooks } from "./components/thems/react/hooks/hooks";
import { Rut } from "./components/thems/react/route/route";

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
            <Route path="func" element={<Function />} />
            <Route path="obj" element={<Obj />} />
            <Route path="array" element={<Arr />} />
            <Route path="json" element={<Jso />} />
            <Route path="strNum" element={<StrNum />} />
            <Route path="storage" element={<Storage />} />
          </Route>
          <Route path="dom" element={<Dom />}>
            <Route index element={<Navigate to={"domNav"} />} />
            <Route path="domNav" element={<DomNavigate />} />
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
