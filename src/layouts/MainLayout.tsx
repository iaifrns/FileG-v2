import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1400px]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
