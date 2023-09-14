import { Outlet } from "react-router";
import { LiveClock } from "../LiveClock/LiveClock";

export const Home = () => {
  return (
    <>
      <h1>React Exercise</h1>

      <div>
        <Outlet />
      </div>

      <LiveClock />
    </>
  );
};
