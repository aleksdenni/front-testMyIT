import { Outlet } from "react-router-dom";

import s from "./layout.module.scss";
const Layout = () => {
  return (
    <>
      <main className={s.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
