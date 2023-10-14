import { Outlet } from "react-router";
import { LiveClock } from "../LiveClock/LiveClock";

export const Home = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>

      <LiveClock />
    </>
  );
};
