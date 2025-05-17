import { Header } from "../header/header";
import { Outlet } from "react-router-dom";
import { useScrollToTop } from "../../features/scrollTop/scrollTop";
import To_WEB_Redactor from "../To_WEB_Redactor";

function Layout() {
  useScrollToTop()
  
  

  return (
    <>
      <Header />
      <Outlet />
      <To_WEB_Redactor />
    </>
  );
}


export {Layout}
