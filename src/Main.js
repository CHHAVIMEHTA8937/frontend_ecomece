import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <section className="about_section layout_padding2-top layout_padding-bottom">
        <div className="design-box">
          <img src="assets/images/design-2.png" alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Jewellery Shop</h2>
                </div>

                <p>Lorem ipsum dolor sit amet...</p>

                <div>
                  <Link to="/about">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="img-box">
                <img src="assets/images/about.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="price_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Jewellery Price</h2>
          </div>

          <div className="price_container">

            <div className="box">
              <h6>Earings</h6>
              <img src="assets/images/earrings.jpg" alt="" />
              <h5>$1000</h5>
              <Link to="/login">Buy Now</Link>
            </div>

            <div className="box">
              <h6>Multiple Jewellery</h6>
              <img src="assets/images/multiple jewellery.jpg" alt="" />
              <h5>$10000</h5>
              <Link to="/login">Buy Now</Link>
            </div>

            <div className="box">
              <h6>Necklace Set</h6>
              <img src="assets/images/necklace set.jpg" alt="" />
              <h5>$100000</h5>
              <Link to="/login">Buy Now</Link>
            </div>

          </div>

          <div className="d-flex justify-content-center">
            <Link to="/jewellery" className="price_btn">See More</Link>
          </div>
        </div>
      </section>

      <section className="ring_section layout_padding">
        <div className="design-box">
          <img src="assets/images/design-1.png" alt="" />
        </div>

        <div className="container">
          <div className="row">

            <div className="col-md-5">
              <h4>Special</h4>
              <h2>Wedding Ring</h2>
              <Link to="/login">Buy Now</Link>
            </div>

            <div className="col-md-7">
              <img src="assets/images/ring.jpg" alt="" />
            </div>

          </div>
        </div>
      </section>

      {/* FIXED TYPO */}
      <img src="assets/images/clients1.jpg" alt="" />

    </>
  );
};

export default Main;