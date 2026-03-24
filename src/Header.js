import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="hero_area">
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">

              <a className="navbar-brand" href="/">
                <img src="assests/images/logo.png" alt="" />
                <span>Lodge</span>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav">

                    <li className="nav-item active">
                      <a className="nav-link" href="/Home">Home</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/about">About</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/jewellery">Jewellery</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/contact">Contact us</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/login">Login</a>
                    </li>

                  </ul>
                </div>

                <div className="quote_btn-container">
                  <a href="#">
                    <img src="assests/images/cart.png" alt="" />
                  </a>
                </div>

              </div>
            </nav>
          </div>
        </header>

        {/* FIXED SECTION */}
        <section className="slider_section position-relative">

          <div className="design-box">
            <img src="assests/images/design-1.png" alt="" />
          </div>

          <div className="container">
            <div className="row">

              <div className="col-md-6">
                <div className="detail_box">
                  <h2>New Collection</h2>
                  <h1>Jewellery</h1>
                  <p>Lorem ipsum dolor sit amet...</p>

                  <a href="#">Shop Now</a>
                </div>
              </div>

              <div className="col-md-6">
                <div className="img-box">
                  <img src="assests/images/hero.jpg" alt="" />
                </div>
              </div>

            </div>
          </div>

        </section>

      </div>

      <div className="item_section layout_padding2">
        <div className="container">
          <div className="item_container">

            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="assests/images/earrings.png" alt="" />
              </div>
              <div className="name">
                <h5>Bracelet</h5>
              </div>
            </div>

            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="assests/images/multiplejewellery.png" alt="" />
              </div>
              <div className="name">
                <h5>Ring</h5>
              </div>
            </div>

            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="assests/images/nacklace.png" alt="" />
              </div>
              <div className="name">
                <h5>Earings</h5>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;