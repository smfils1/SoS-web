import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import logo from "../assets/images/logo_transparent.png";

const NavBar = () => (
  <Navbar variant="dark" bg="dark" expand="md" style={{ fontWeight: "300" }}>
    <Navbar.Brand>
      <Link to="/" className="nav-link text-white ">
        <Container>
          <img alt="" src={logo} style={{ width: "4em" }} />{" "}
          <div
            className="ml-auto"
            style={{ fontSize: "1.5em", lineHeight: "80%" }}
          >
            <Row>
              <Col className="p-0">AS/WA</Col>
            </Row>{" "}
            <Row>
              <Col className="p-0">LABS</Col>
            </Row>
          </div>
        </Container>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav
        className="ml-auto text-uppercase"
        style={{ fontSize: "1.5em", lineHeight: "80%" }}
      >
        <Link to="/" className="nav-link text-white m-3">
          Home
        </Link>
        <Link to="/beta" className="nav-link text-white m-3">
          Beta
        </Link>
        <Link to="/docs" className="nav-link text-white m-3">
          Docs
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
