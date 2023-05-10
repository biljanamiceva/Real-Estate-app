import React, { useRef } from "react";
import "./Testimonial.css";
import { UnderlinedWord } from "../../components";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { data } from "../../constants";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 350;
    } else {
      current.scrollLeft += 350;
    }
  };

  return (
    <div className="app__testimonial app__bg flex__center section__padding">
      <div className="app__testimonial-heading">
        <h1>
          Our <UnderlinedWord word="testimonial" />
        </h1>
      </div>
      <div className="app__testimonial-p flex__center">
        <p className="p__opensans">
          See our featured properties and explore all of that to know more about
          our real estate properties very easily.
        </p>
      </div>
      <div className="app__testimonial-images">
        <div className="app__testimonial-images_container" ref={scrollRef}>
          {data.testimonial.map((testimonial) => (
            <div
              className="app__testimonial-images_card "
              key={testimonial.name}
            >
              <p className="p__testimonial_quote_icon">
                <FaQuoteLeft style={{ color: "#ffb111", fontSize: "30px" }} />
              </p>
              <h2 className="app__testimonial-title-h2">{testimonial.title}</h2>
              <p className="app__testimonial-desc-p">{testimonial.desc}</p>
              <div className="app__testimonial-footer">
                <img src={testimonial.imgUrl} alt="testimonial" />
                <div className="app__testimonial-footer-info">
                  <h3 className="app__testimonial-name-h3">
                    {testimonial.name}
                  </h3>
                  <h5 className="app__testimonial-footer-position">
                    {testimonial.position}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="app__testimonial-images_arrows">
          <BiLeftArrowAlt
            className="testimonial__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BiRightArrowAlt
            className="testimonial__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
