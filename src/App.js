import style from "./App.module.css";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MainPage from "./RoutingPages/MainPage/MainPage";
import ProductListContainer from "./RoutingPages/ProductList/ProductListContainer";
import Delivery from "./RoutingPages/Delivery/Delivery";
import AboutUs from "./RoutingPages/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <div className={style.App}>
        <Header />
        <NavBar />
        <div className={style.MailObj}>
          <Routes>
            <Route path="/MainPage/*" element={<MainPage />} />
            <Route path="/ProductList/*" element={<ProductListContainer />} />
            <Route path="/Delivery/*" element={<Delivery/>}/>
            <Route path="/AboutUs/*" element={<AboutUs/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
