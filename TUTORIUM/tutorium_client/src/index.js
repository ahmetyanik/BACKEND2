import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./components/pages/CartPage";
import CategoryPage from "./components/pages/CategoryPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import ProductPage from "./components/pages/ProductPage";
import RegisterPage from "./components/public/RegisterPage";
import {CookiesProvider} from "react-cookie";

ReactDOM.render(
  <CookiesProvider>

  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />}/>
      <Route path="/urun/:id" element={<ProductPage />}/>
      <Route path="/kategori/:kategori_url" element={<CategoryPage />}/>
      <Route path="/sepetim" element={<CartPage />}/>
      <Route path="/kayitol" element={<RegisterPage />}/>
      <Route path="/giris" element={<LoginPage />}/>
        
    </Routes>
  </BrowserRouter>
  </CookiesProvider>,

  document.getElementById("root")
);
