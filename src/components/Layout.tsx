import { Outlet } from "react-router-dom";
import { useCartContext } from "../context/Cart/useCartContext";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import LoginPopUp from "./LoginPopUp";

const Layout = () => {
  const { showPopUp } = useCartContext();

  return (
    <div className="relative">
      {showPopUp && <LoginPopUp />}

      <div inert={showPopUp}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
