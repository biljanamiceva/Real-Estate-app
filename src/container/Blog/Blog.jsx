import React, { useRef } from "react";
import "./Blog.css";
import { UnderlinedWord } from "../../components";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { data } from "../../constants";

const Blog = () => {
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
    <div className="app__blog app__bg flex__center section__padding">
      <div className="app__blog-heading">
        <h1>
          Read our <UnderlinedWord word="blog" />
        </h1>
      </div>
      <div className="app__blog-p flex__center">
        <p className="p__opensans">
          See our featured properties and explore all of that to know more about
          our real estate properties very easily.
        </p>
      </div>

      <div className="app__blog-images">
        <div className="app__blog-images_container" ref={scrollRef}>
          {data.blog.map((blog) => (
            <div className="app__blog-images_card " key={blog.name}>
              <img src={blog.imgUrl} alt="blog" />
              <p className="app__blog-title-p">{blog.title}</p>

              <div className="app__blog-footer">
                <p>By {blog.name} </p> <div />
                <p> {blog.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="app__blog-images_arrows">
          <BiLeftArrowAlt
            className="blog__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BiRightArrowAlt
            className="blog__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
