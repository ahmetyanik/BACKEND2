import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../public/Footer";
import Header from "../public/Header";

const RegisterPage = () => {
  return (
    <React.StrictMode>
      <Header />

      <section className="section-content padding-y bg">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <aside class="col-md-6">
              <div class="card">
                <article class="card-body">
                  <header class="mb-4">
                    <h4 class="card-title">Üye Ol</h4>
                  </header>
                  <form>
                    <div class="form-row">
                      <div class="col form-group">
                        <label>İsim</label>
                        <input
                          name="isim"
                          autoComplete="off"
                          type="text"
                          class="form-control"
                          placeholder="İsim giriniz"
                          required
                        />
                      </div>
                      <div class="col form-group">
                        <label>Soyisim</label>
                        <input
                          name="soyisim"
                          autoComplete="off"
                          type="text"
                          class="form-control"
                          placeholder="Soyisim giriniz"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col form-group">
                        <label>Email</label>
                        <input
                          autoComplete="off"
                          name="email"
                          type="email"
                          class=""
                          placeholder="Email giriniz"
                          required
                        />
                        <small class="form-text text-muted"></small>
                      </div>
                      <div class="col form-group">
                        <label>Telefon</label>
                        <input
                          name="telefon"
                          class="form-control"
                          placeholder="Telefon no giriniz"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="custom-control custom-radio custom-control-inline">
                        <input
                          class="custom-control-input"
                          type="radio"
                          name="cinsiyet"
                          value="Erkek"
                        />
                        <span class="custom-control-label"> Erkek </span>
                      </label>
                      <label class="custom-control custom-radio custom-control-inline">
                        <input
                          class="custom-control-input"
                          type="radio"
                          name="cinsiyet"
                          value="Kadın"
                        />
                        <span class="custom-control-label"> Kadın </span>
                      </label>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-sm-12">
                        <label>Adres</label>
                        <input
                          name="adres"
                          required
                          type="text"
                          class="form-control"
                          placeholder="Adres giriniz"
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label>Şifre oluştur</label>
                        <input name="sifre" class="" type="password" required />
                        <small class="form-text text-muted"></small>
                      </div>
                      <div class="form-group col-md-6">
                        <label>Şifre Tekrarı</label>
                        <input
                          name="resifre"
                          class=""
                          type="password"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group mt-3">
                      <button
                        type="submit"
                        class="btn btn-primary btn-block"
                      ></button>
                    </div>
                    <p class="text-muted">
                      "Kayıt ol" butonuna tıklayarak gizlilik sözleşmesini kabul
                      etmiş olursunuz.
                    </p>
                  </form>
                  <hr />
                  <p class="text-center">
                    Zaten üye misin ? <a href="/giris">Giriş Yap</a>
                  </p>
                </article>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </React.StrictMode>
  );
};

export default RegisterPage;
