import "./components/styles/main.scss";

import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "./components/layout/layout";
import { HomePage } from "./components/homePage/homePage";

//Thems
import Html from "./pages/thems/html/html";
import CSS from "./pages/thems/css/css";
import JS from "./pages/thems/js/js";
import Dom from "./pages/thems/DOM/dom";
import Rct from "./pages/thems/react/react";

// Topic pages
import { Pages } from "./pages/render-pages";

const {
  Varible,
  Begin,
  Css,
  Data,
  MapSetData,
  NewData,
  Operators,
  Loop,
  Func,
  Obj,
  Arr,
  Json,
  StrNum,
  Storage,
  DomNav,
  ClassListModule,
  Manipulation,
  MouseEvents,
  MouseEventProps,
  Prom,
  EventLoop,
  FetchApi,
  Hooks,
  Rut,
} = Pages;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="html" element={<Html />}>
            <Route index element={<Navigate to={"begin"} />} />
            <Route path="begin" element={<Begin />} />
          </Route>
          <Route path="css" element={<CSS />}>
            <Route index element={<Navigate to={"begin"} />} />
            <Route path="begin" element={<Css />} />
          </Route>
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
            <Route path="map_set_data" element={<MapSetData />} />
            <Route path="new-data" element={<NewData />} />
          </Route>
          <Route path="dom" element={<Dom />}>
            <Route index element={<Navigate to={"domNav"} />} />
            <Route path="domNav" element={<DomNav />} />
            <Route path="classList" element={<ClassListModule />} />
            <Route path="manipulation" element={<Manipulation />} />
            <Route path="mouse-event" element={<MouseEvents />} />
            <Route path="mouse-event-props" element={<MouseEventProps />} />
            <Route path="prom" element={<Prom />} />
            <Route path="eventloop" element={<EventLoop />} />
            <Route path="fetch" element={<FetchApi />} />
          </Route>
          <Route path="react" element={<Rct />}>
            <Route index element={<Navigate to={"hooks"} />} />
            <Route path="hooks" element={<Hooks />} />
            <Route path="router" element={<Rut />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
