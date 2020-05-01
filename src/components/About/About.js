import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./About.css"


const About = () => (

    <Container fluid>

        <Row >
            <Col xs={12} lg={6} className="text-center text-lg-left d-inline-flex flex-column align-items-center my-5">
                <div className=" w-75">
                    <h2 className="mb-4 display-4">What is SoS?</h2>
                    <p className="lead" style={{ fontSize: "1.5em" }}>Shoot or Survive is an open-source web game of survival. You're either the one shooting or the one running away. The choice is yours. This plug and play FPS web game is a battle between you and your enemies that require accuracy & speed. The ability to attack or avoid enemies with different controls leads to a unique web experience.</p>
                </div>
            </Col>
            <Col xs={12} lg={6} className="p-0 d-inline-flex flex-column justify-content-center align-items-center p-0 pr-md-5 pr-lg-5 p-xl-0" >
                <div className="video embed-responsive embed-responsive-16by9">
                    <iframe title="Game trailer" className="embed-responsive-item" src="https://www.youtube.com/embed/bH1lHCirCGI"  allowFullScreen></iframe>
                </div>
            </Col>
        </Row>

    </Container>

);

export default About;
