import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      This is a layout visible in all pages
      <Outlet />
    </>
  );
}
