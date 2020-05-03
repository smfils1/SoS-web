import React from "react";
import Hero from "../Hero";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import template from "../template";

const HomePage = () => (
  <div>
    <Hero />
    <About />
    <Gallery images={template.galleryImages} />
  </div>
);

export default HomePage;
