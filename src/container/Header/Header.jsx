import React from "react";
import "./Header.css";
import images from "../../constants/images";
import { UnderlinedWord } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <p className="p__opensans">Find the best property</p>
      <h1 className="app__header-h1">
        Find your <UnderlinedWord word="perfect" /> property with us.
      </h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <button type="button" className="custom__button">
        Get Started
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.architecture} alt="header_img" />
    </div>
  </div>
);

export default Header;
