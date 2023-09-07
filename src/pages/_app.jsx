import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="text-center mb-5">This is a layout visible in all pages</div>
      <Outlet />
    </>
  );
}
