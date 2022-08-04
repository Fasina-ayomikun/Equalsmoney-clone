import React from "react";
import { Col, Row } from "react-bootstrap";
import { ImQuotesLeft } from "react-icons/im";
import logo from "../images/trustpilot.png";
function Featured() {
  return (
    <section className='featured-section'>
      <div className='featured-container'>
        <Row>
          <Col>
            <div className='title'>
              <h1>Already trusted by thousands</h1>
              <ImQuotesLeft />
            </div>
            <p>
              Don’t just take our word for it, hear from some of the 10,000+
              businesses that already work with us and how they have benefited
              from our great rates and award-winning service.
            </p>
            <img src={logo} alt='Trust Pilot' />
          </Col>
          <Col>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              recusandae reiciendis aspernatur debitis id consequatur excepturi
              tenetur quaerat. Modi explicabo placeat corrupti? Earum vel illo
              nostrum eos consequuntur iusto facilis at et voluptatibus optio
              quidem, esse assumenda? Aut adipisci eaque voluptatum minus earum
              id sunt placeat dolore eos omnis facere, aperiam natus incidunt
              similique eligendi expedita? Dolorum, aliquid. In et illo,
              deserunt eveniet aliquam similique iste eos, voluptatem a
              temporibus hic! Sit, praesentium architecto in ducimus vel eveniet
              perspiciatis commodi consectetur laudantium, at expedita quidem
              dolore. Explicabo minima eaque nesciunt hic maxime. Odio repellat
              totam deserunt praesentium tempora in mollitia?
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Featured;
