/* eslint-disable no-unused-vars */
import React from "react";
import brick from "../../assets/brick.svg"
import catering from "../../assets/catering.svg"
import code from "../../assets/code.svg"
import fashion from "../../assets/fashion.svg"

const Navbar = () => {
  return (
    <>
      <section>
        <div>
          <p>
            Charit<span>Able</span>
          </p>
        </div>
        <div>
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">Contact</a>
          <a href="">Login</a>
        </div>
        <section className="nav-body">
          <div>
            <h1>
              Get equipped to <span>over the world</span>
            </h1>
            <p>
              Reach your dreams through Discovering and Exploring your
              potentials.
            </p>
            <button>Get started</button>
          </div>
          <div>
            <img src={catering} alt="" />
            <img src={brick} alt="" />
            <img src={code} alt="" />
            <img src={fashion} alt="" />
          </div>
        </section>
      </section>
    </>
  );
};

export default Navbar;
