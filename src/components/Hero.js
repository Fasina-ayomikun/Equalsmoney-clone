import React from "react";

import { Button } from "react-bootstrap";
function Hero() {
  return (
    <section className='hero-section'>
      <div className='hero-container' data-aos='fade-up'>
        <div className='hero-info'>
          <p>Equal Money</p>
          <h1>Payments, cards and expenses, made simple</h1>
          <p>
            The Equals Money account is here to revolutionise the way finance
            teams manage a company’s payments, expenses, budgets, payroll and
            more, putting time back on the clock and money back on the balance
            sheet.
          </p>
          <Button variant='primary' className='signup-btn'>
            Get started
          </Button>
          <div>
            We hold your funds held in specially designated, safeguarded bank
            accounts, which keep your funds separated from our other assets.
            This means your funds are protected. However, the Equals Money
            account is not covered by the Financial Services Compensation Scheme
            - please see FAQs for more information.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
