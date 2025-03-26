import { Header } from "../header/header";
import { Outlet } from "react-router-dom";
import { useScrollToTop } from "../../features/scrollTop/scrollTop";

function Layout() {
  useScrollToTop()
  
  

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}


export {Layout}
