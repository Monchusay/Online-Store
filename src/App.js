import style from "./App.module.css";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MainPage from "./RoutingPages/MainPage/MainPage";
import ProductList from "./RoutingPages/ProductList/ProductList";

function App() {
  return (
    <BrowserRouter>
      <div className={style.App}>
        <Header />
        <NavBar />
        <div className={style.MailObj}>
          <Routes>
            <Route path="/MainPage/*" element={<MainPage />} />
            <Route path="/ProductList/*" element={<ProductList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
