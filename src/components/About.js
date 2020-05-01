import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const About = () => (

    <Container fluid style={{
        backgroundColor: "#e3845d"
    }}>

        <Row >
            <Col xs={12} lg={6} className="text-center text-lg-left d-inline-flex flex-column align-items-center my-5">
                <div className=" w-75">
                    <h2 className="mb-4 display-4">What is SoS?</h2>
                    <p className="lead" style={{ fontSize: "1.5em" }}>Shoot or Survive is an open-source web game of survival. You're either the one shooting or the one running away. The choice is yours. This plug and play FPS web game is a battle between you and your enemies that require accuracy & speed. The ability to attack or avoid enemies with different controls leads to a unique web experience.</p>
                </div>
            </Col>
            <Col xs={12} lg={6} className="p-0  pr-lg-5 d-inline-flex flex-column justify-content-center" >
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/bH1lHCirCGI"  allowfullscreen></iframe>
                </div>
            </Col>
        </Row>

    </Container>

);

export default About;
