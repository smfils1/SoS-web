import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import FTP from "../../assets/images/FTP.png"
import PAP from "../../assets/images/PAP.png"
import logo from "../../assets/images/logo_transparent.png"
const Features = () => (
<Container className="bg-dark" fluid>
    <Row>
      <Col
        xs={12}
        lg={5}
        className="d-inline-flex align-items-center justify-content-center"
      >
        <div className="w-50" style={{backgroundColor:"rgb(14, 14, 14)"}}>
            <img src={FTP} className="img-fluid" alt="free to play" />
        </div>
      </Col>
      <Col
        xs={12}
        lg={2}
        className="d-inline-flex align-items-center justify-content-center"
      >
        <div className="w-50 ">
            <img src={logo} className="img-fluid" alt="free to play" />
        </div>
      </Col>
      <Col
        xs={12}
        lg={5}
        className="d-inline-flex justify-content-center align-items-center p-0 p-md-4 p-lg-4 p-xl-0"
      >
        <div  className="w-50 m-5" style={{backgroundColor:"rgb(14, 14, 14)"}}>
            <img src={PAP} className="img-fluid" alt="plug and play" />
         
        </div>
      </Col>
    </Row>
  </Container>

   
);

export default Features;
//  <div style={{
//         backgroundImage:`url(${s5})`,
//         width:"100%",
//         height: "320px",
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat'
//       }}>1</div>