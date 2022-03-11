import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../public/Footer";
import Header from "../public/Header";

const LoginPage = () => {
  return (
    <React.StrictMode>
      <Header />
      <section className="section-content padding-y bg">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <aside className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4">Giriş Yap</h4>
                  <form>
                    <a href="#" className="btn btn-facebook btn-block mb-2">
                      <i className="fab fa-facebook-f"></i> &nbsp; Facebook ile
                      giriş yap
                    </a>
                    <a href="#" className="btn btn-google btn-block mb-4">
                      <i className="fab fa-google"></i> &nbsp; Google ile giriş
                      yap
                    </a>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <input
                          autoComplete="off"
                          required
                          name="email"
                          className="form-control"
                          placeholder="Email giriniz"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-lock"></i>
                          </span>
                        </div>
                        <input
                          name="sifre"
                          className="form-control"
                          placeholder="Şifrenizi giriniz"
                          type="password"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        className={`btn btn-primary btn-block`}
                      ></button>
                    </div>

                    <div className="form-group text-center"></div>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </React.StrictMode>
  );
};

export default LoginPage;
