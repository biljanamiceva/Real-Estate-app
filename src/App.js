import React from "react";

import { Header, Achievement, FeaturedProperties, PopularPlaces, Agents, Testimonial, Blog} from './container';
import { Navbar, Footer1} from './components';
import './App.css';


const App =() =>  (
    <div>
      <Navbar />
      <Header />
      <Achievement />
     <FeaturedProperties />
     <PopularPlaces />
     <Agents />
     <Testimonial />
     <Blog />
     <Footer1 />
    </div>
  );


export default App;
