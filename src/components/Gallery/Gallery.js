import React from "react";
import Container from "react-bootstrap/Container";
import "./Gallery.css";

const Gallery = ({ images }) => {
  const imageItems = images.map((image, index) => (
    <img
      src={image}
      key={index}
      className="galleryImage"
      alt={`sample${index}`}
    />
  ));
  return (
    <Container fluid className="p-0">
      <div className=" d-inline-flex flex-wrap justify-content-center text-decoration-underline align-items-stretch w-100">
        {imageItems}
      </div>
    </Container>
  );
};

export default Gallery;
