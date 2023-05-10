import React from "react";
import "./Achievement.css";
import { UnderlinedWord } from "../../components";
import { GoPlus } from "react-icons/go";

const Achievement = () => {
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="app__achivement app__bg flex__center section__padding">
      <div className="app__achivement-heading">
        <h1>
          Our <UnderlinedWord word="achivement" />
        </h1>
      </div>
      <div className="app__achivement-p flex__center">
        <p className="p__opensans">
          See and understand what we have archieved in the last few years. We
          have completed so many projects in this period.
        </p>
      </div>
      <div className="app__achievement-info">
        <ul className="app__achievement-info-ul">
          <li>
            <h1>
              {randomNumberInRange(1000, 3000)}{" "}
              <GoPlus style={{ fontSize: "22px" }} />
            </h1>
            <p className="p__opensans">Completed Property</p>
          </li>
          <li>
            <h1>
              {randomNumberInRange(2000, 5000)}{" "}
              <GoPlus style={{ fontSize: "22px" }} />
            </h1>
            <p className="p__opensans">Property Sales</p>
          </li>
          <li>
            <h1>
              {randomNumberInRange(1000, 4000)}{" "}
              <GoPlus style={{ fontSize: "22px" }} />
            </h1>
            <p className="p__opensans">Apartment Rent</p>
          </li>
          <li>
            <h1>
              {" "}
              {randomNumberInRange(1000, 3000)}{" "}
              <GoPlus style={{ fontSize: "22px" }} />
            </h1>
            <p className="p__opensans">Happy Clients</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achievement;
