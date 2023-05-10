import React from "react";
import "./FeaturedProperties.css";
import { UnderlinedWord } from "../../components";
import { ImLocation } from "react-icons/im";
import { BsFillHeartFill } from "react-icons/bs";
import { data } from "../../constants";

const Card = ({
  featuredProperties: {
    imgUrl,
    buildingType,
    condition,
    price,
    location,
    type,
    beds,
    baths,
    code,
  },
}) => (
  <div className="app__featuredProperties-card">
    <div className="card">
      <h1 className="h1-absolute">{type}</h1>
      <img src={imgUrl} alt="apartment" />
      <p className="p-absolute">{price}</p>
      <p className="icon-absolute">
        <BsFillHeartFill />
      </p>
      <div className="app__featuredProperties-card_content">
        <p
          className="p__opensans"
          style={{ color: "#289BDE", fontWeight: "500" }}
        >
          {buildingType}
        </p>

        <h1
          className="p__opensans"
          style={{ color: "#0C0C0C", fontWeight: "600", fontSize: "20px" }}
        >
          {condition}
        </h1>
        <p style={{ color: "#545454", marginTop: "10px" }}>
          <ImLocation /> {location}
        </p>
        <p className="card-footer">
          <span style={{ marginRight: "20px" }}>Beds: {beds} </span>
          <span style={{ marginRight: "20px" }}>Baths: {baths} </span>
          <span>Code: {code} </span>
        </p>
      </div>
    </div>
  </div>
);

const FeaturedProperties = () => {
  return (
    <div className="app__featuredProperties app__bg flex__center section__padding">
      <div className="app__featuredProperties-heading">
        <h1>
          Featured <UnderlinedWord word="properties" />
        </h1>
      </div>

      <div className="app__featuredProperties-p flex__center">
        <p className="p__opensans">
          See our featured properties and explore all of that to know more about
          our real estate properties very easily.
        </p>
      </div>
      <div className="app__featuredProperties-cards">
        {data.featuredProperties.map((featuredProperties) => (
          <Card
            featuredProperties={featuredProperties}
            key={featuredProperties.buildingType}
          />
        ))}
      </div>
      <div className="app__featuredProperties-button">
        <button type="button">See More</button>
      </div>
    </div>
  );
};

export default FeaturedProperties;
