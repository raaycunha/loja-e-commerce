import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Accessories from "../pages/categories/Accessories";
import Essential from "../pages/categories/Essential";
import Female from "../pages/categories/Female";
import Male from "../pages/categories/Male";
import News from "../pages/categories/News";
import Offers from "../pages/categories/Offers";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Layout from "./Layout";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="carrinho" element={<Cart />} />
          <Route path="feminino" element={<Female />} />
          <Route path="masculino" element={<Male />} />
          <Route path="novidades" element={<News />} />
          <Route path="essenciais" element={<Essential />} />
          <Route path="acessorios" element={<Accessories />} />
          <Route path="ofertas" element={<Offers />} />
          <Route path="produto/:slug" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
