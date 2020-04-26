import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import heroImage from "../assets/images/hero_image.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Hero = () => (
  <Jumbotron
    style={{
      height: "100vh",
      backgroundImage: `url(${heroImage})`,
      backgroundRepeat: "no-reapeat",
      backgroundSize: "cover"
    }}
    className="m-0"
  >
    <Row className="h-75 align-items-center text-center text-md-left text-center justify-content-center justify-content-md-start ">
      <Col xs="auto" md={{ span: 4, offset: 1 }}>
        <h1
          className="display-3"
          style={{ fontWeight: "900", lineHeight: "50%" }}
        >
          {" "}
          Shoot{" "}
        </h1>
        <h1 className="display-3" style={{ fontWeight: "900" }}>
          {" "}
          or
        </h1>
        <h1
          className="display-3"
          style={{ fontWeight: "900", lineHeight: "50%" }}
        >
          {" "}
          Survive
        </h1>
        <h4 className="my-4" style={{ fontWeight: "300", fontSize: "1.7em" }}>
          Beta is now available
        </h4>
        <Button
          size="lg"
          variant="primary"
          style={{
            backgroundColor: "rgb(221, 102, 53)",
            outline: "none",
            borderWidth: "0px",
            fontSize: "1.5em"
          }}
          className="my-auto "
        >
          Learn More
        </Button>
      </Col>
    </Row>
  </Jumbotron>
);

export default Hero;
