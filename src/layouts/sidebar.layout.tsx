import { Outlet } from "react-router";

export default function Sidebar() {
  return (
    <>
      <div className="grid grid-cols-24 grid-flow-col gap-4 p-4 h-screen w-screen">
        <aside className="bg-green-200 col-span-4">holamundo</aside>
        <Outlet />
      </div>
    </>
  );
}
