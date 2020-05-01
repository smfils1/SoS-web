import React from "react";
import Hero from "../Hero";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import s1 from "../../assets/images/sample1.jpg"
import s2 from "../../assets/images/sample2.jpg"
import s3 from "../../assets/images/sample3.jpg"

const HomePage = () => (
  <div>
    <Hero />
    <About />
    <Gallery images={[s1,s2,s3,s1,s2,s3,s1,s2]}/>
  </div>
)

export default HomePage;
