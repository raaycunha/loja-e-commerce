import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const Layout = () => {
  return (
    <div className="relative">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
