import style from "./App.module.css"
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={style.App}>
        <Header />
        <NavBar />
          <div className={style.MailObj}>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
