import React from "react";
import "./Agents.css";
import { UnderlinedWord } from "../../components";
import { data } from "../../constants";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

const CardAgent = ({ agents: { imgUrl, name, position } }) => (
  <div className="app__agent-card">
    <div className="card-agent">
      <img src={imgUrl} alt="agent" />

      <div className="app__agent-card_content">
        <h1 className="app__agent-h1">{name}</h1>
        <h3 className="app__agent-h3">{position}</h3>
      </div>
      <div className="app__agent-card_icons">
        <AiFillFacebook />
        <AiFillTwitterSquare />
        <AiFillLinkedin />
      </div>
    </div>
  </div>
);

const Agents = () => {
  return (
    <div className="app__agent app__bg flex__center section__padding">
      <div className="app__agent-heading">
        <h1>
          Meet our <UnderlinedWord word="agent" />
        </h1>
      </div>

      <div className="app__agent-p flex__center">
        <p className="p__opensans">
          See our featured properties and explore all of that to know more about
          our real estate properties very easily.
        </p>
      </div>

      <div className="app__agent-cards">
        {data.agents.map((agents) => (
          <CardAgent agents={agents} key={agents.name} />
        ))}
      </div>
    </div>
  );
};

export default Agents;
