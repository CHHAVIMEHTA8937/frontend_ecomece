import React from 'react';
import { Link } from "react-router-dom";

const About = () => {
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

                <p>
                  Lorem ipsum dolor sit amet...
                </p>

                <div>
                  <Link to="/contact">
                    Read More
                  </Link>
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
    </>
  );
};

export default About;