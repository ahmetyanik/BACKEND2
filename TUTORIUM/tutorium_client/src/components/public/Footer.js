import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="section-name bg padding-y-sm">
        <div className="container">
          <header className="section-heading">
            <h3 className="section-title">Our Brands</h3>
          </header>

          <div className="row">
            <div className="col-md-2 col-6">
              <figure className="box item-logo">
                <a href="#">
                  <img src="/images/logos/logo1.png" alt="" />
                </a>
                <figcaption className="border-top pt-2">36 Products</figcaption>
              </figure>
            </div>
            <div className="col-md-2  col-6">
              <figure className="box item-logo">
                <a href="#">
                  <img src="/images/logos/logo2.png" alt="" />
                </a>
                <figcaption className="border-top pt-2">
                  980 Products
                </figcaption>
              </figure>
            </div>
            <div className="col-md-2  col-6">
              <figure className="box item-logo">
                <a href="#">
                  <img src="/images/logos/logo3.png" alt="" />
                </a>
                <figcaption className="border-top pt-2">25 Products</figcaption>
              </figure>
            </div>
            <div className="col-md-2  col-6">
              <figure className="box item-logo">
                <a href="#">
                  <img src="/images/logos/logo4.png" alt="" />
                </a>
                <figcaption className="border-top pt-2">72 Products</figcaption>
              </figure>
            </div>
            <div className="col-md-2  col-6">
              <figure className="box item-logo">
                <a href="#">
                  <img src="/images/logos/logo5.png" alt="" />
                </a>
                <figcaption className="border-top pt-2">41 Products</figcaption>
              </figure>
            </div>
            <div className="col-md-2  col-6">
              <figure className="box item-logo">
                <a href="#">
                  <img src="/images/logos/logo2.png" alt="" />
                </a>
                <figcaption className="border-top pt-2">12 Products</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section-name padding-y">
        <div className="container">
          <h3 className="mb-3">Download app demo text</h3>

          <a href="#">
            <img src="/images/misc/appstore.png" height="40" alt="" />
          </a>
          <a href="#">
            <img src="/images/misc/appstore.png" height="40" alt="" />
          </a>
        </div>
      </section>

      <footer className="section-footer border-top bg">
        <div className="container">
          <section className="footer-top  padding-y">
            <div className="row">
              <aside className="col-md col-6">
                <h6 className="title">Brands</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Adidas</a>
                  </li>
                  <li>
                    <a href="#">Puma</a>
                  </li>
                  <li>
                    <a href="#">Reebok</a>
                  </li>
                  <li>
                    <a href="#">Nike</a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Company</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">Find a store</a>
                  </li>
                  <li>
                    <a href="#">Rules and terms</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Help</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Money refund</a>
                  </li>
                  <li>
                    <a href="#">Order status</a>
                  </li>
                  <li>
                    <a href="#">Shipping info</a>
                  </li>
                  <li>
                    <a href="#">Open dispute</a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Account</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#"> User Login </a>
                  </li>
                  <li>
                    <a href="#"> User register </a>
                  </li>
                  <li>
                    <a href="#"> Account Setting </a>
                  </li>
                  <li>
                    <a href="#"> My Orders </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md">
                <h6 className="title">Social</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook"></i> Facebook{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i> Twitter{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i> Instagram{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube"></i> Youtube{" "}
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          <section className="footer-bottom row">
            <div className="col-md-2">
              <p className="text-muted"> 2019 Company name </p>
            </div>
            <div className="col-md-8 text-md-center">
              <span className="px-2">info@pixsellz.io</span>
              <span className="px-2">+879-332-9375</span>
              <span className="px-2">Street name 123, Avanue abc</span>
            </div>
            <div className="col-md-2 text-md-right text-muted">
              <i className="fab fa-lg fa-cc-visa"></i>
              <i className="fab fa-lg fa-cc-paypal"></i>
              <i className="fab fa-lg fa-cc-mastercard"></i>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
