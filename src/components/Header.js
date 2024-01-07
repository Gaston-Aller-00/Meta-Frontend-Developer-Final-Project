import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/restauranfood.jpg";
const Header = () => {
  return (
    <header className="header">
      <section>
        {/* banner con los textoss */}
        <div className="banner">
          <h2>Little Lemon </h2>
          <h1>Chicago</h1>
          <p>
            We are family owned Mediterraneran restaurant, focused on
            traditional recipes served with a modern twist
          </p>
          <Link to="">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
        {/* banner imageen */}
        <div className="banner-img">
          <img src={bannerImg
        } alt="banner " />
        </div>
      </section>
    </header>
  );
};

export default Header;
