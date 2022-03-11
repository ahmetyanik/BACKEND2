import axios from "axios";
import React, { useEffect, useState } from "react";

const Header_Login = () => {
  return (
    <div className="widget-header">
      <small className="title text-muted">Hoşgeldiniz !</small>
      <div>
        <React.StrictMode>
          <a href="/giris">Giriş Yap</a>
          <span className="dark-transp"> | </span>
          <a href="/kayit"> Kayıt Ol</a>
        </React.StrictMode>
      </div>
    </div>
  );
};

export default Header_Login;
