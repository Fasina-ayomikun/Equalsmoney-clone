import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import house from "../images/house.svg";
function Testimonials() {
  return (
    <section className='testimonials-section'>
      <Container className='testimonials-container'>
        <Row className='testimonials'>
          <Col>
            <img src={house} alt='' />
            <h4>Publicly listed</h4>
            <p>Equals Group Plc is AIM-listed on the London Stock Exchange</p>
          </Col>
          <Col>
            <img src={house} alt='' />
            <h4>Publicly listed</h4>
            <p>Equals Group Plc is AIM-listed on the London Stock Exchange</p>
          </Col>
          <Col>
            <img src={house} alt='' />
            <h4>Publicly listed</h4>
            <p>Equals Group Plc is AIM-listed on the London Stock Exchange</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
