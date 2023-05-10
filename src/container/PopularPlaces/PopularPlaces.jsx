import React from "react";
import "./PopularPlaces.css";

import { IoIosArrowForward } from "react-icons/io";
import { UnderlinedWord } from "../../components";
import { data } from "../../constants";

const Card = ({ popularPlaces: { imgUrl, location, properties } }) => (
  <div className="app__popularPlaces-card">
    <div className="card-popularPlaces">
      <img src={imgUrl} alt="house" />
      <div className="app__popularPlaces-card_content">
        <p
          style={{
            marginTop: "10px",
            fontSize: "21px",
            fontWeight: "600",
            color: "#0C0C0C",
          }}
        >
          {location}
        </p>
        <p
          style={{
            marginTop: "8px",
            color: "#AAAAAA",
            fontSize: "17px",
            fontWeight: "500",
          }}
        >
          {properties} Properties
        </p>
        <p className="p-absolute-icon">
          <IoIosArrowForward
            style={{
              marginTop: "4px",
              marginLeft: "7px",
            }}
          />
        </p>
      </div>
    </div>
  </div>
);

const PopularPlaces = () => {
  return (
    <div className="app__popularPlaces app__bg flex__center section__padding">
      <div className="app__popularPlaces-heading">
        <h1>
          Most popular <UnderlinedWord word="places" />
        </h1>
      </div>
      <div className="app__popularPlaces-p flex__center">
        <p className="p__opensans">
          See our featured properties and explore all of that to know more about
          our real estate properties very easily.
        </p>
      </div>
      <div className="app__popularPlaces-cards">
        {data.popularPlaces.map((popularPlaces) => (
          <Card popularPlaces={popularPlaces} key={popularPlaces.properties} />
        ))}
      </div>
      <div className="app__popularPlaces-button">
        <button type="button">See More</button>
      </div>
    </div>
  );
};

export default PopularPlaces;
