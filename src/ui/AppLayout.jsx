import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import CartOverview from "./CartOverview";

function AppLayout() {
  return (
    <div>
      <NavBar />
      <main>{<Outlet />}</main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
