import style from "./App.module.css";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MainPage from "./RoutingPages/MainPage/MainPage";
import ProductListContainer from "./RoutingPages/ProductList/ProductListContainer";
import Delivery from "./RoutingPages/Delivery/Delivery";
import AboutUs from "./RoutingPages/AboutUs/AboutUs";
import {useState} from "react";
import CartContainer from "./RoutingPages/Cart/CartContainer";

function App() {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <BrowserRouter>
      <div className={style.App}>
        <Header />
        <NavBar active={menuActive} setActive={setMenuActive}/>
        <div className={style.MailObj}>
          <Routes>
            <Route path="/*" element={<MainPage />} />
            <Route path="/ProductList/*" element={<ProductListContainer />} />
            <Route path="/Delivery/*" element={<Delivery/>}/>
            <Route path="/AboutUs/*" element={<AboutUs/>}/>
          </Routes>
        </div>
        <CartContainer active={menuActive} setActive={setMenuActive}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
