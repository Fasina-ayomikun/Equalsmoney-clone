import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FiAlignJustify } from "react-icons/fi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
function Navbar() {
  const [scroll, setScroll] = useState(false);
  useState(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY !== 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
    return window.removeEventListener("scroll", () => {
      if (window.scrollY !== 0) {
        setScroll(true);
      } else {
      }
    });
  }, [scroll]);
  return (
    <nav className={`${scroll ? "fixed-nav nav dark-bcg" : "nav dark-bcg"}`}>
      <div className='nav-container'>
        <div className='img-container'>
          <div className='logo'>
            <div className='gold-bcg'></div>
            <div className='gold-bcg'></div>
          </div>
          <h4>
            <b>EQUALS</b>
            <br />
            <span>Money</span>
          </h4>
        </div>

        <ul className='nav-links'>
          <li className='nav-link'>
            Products <FaChevronDown />
          </li>
          <li className='nav-link'>
            Why Equals Money <FaChevronDown />
          </li>
          <li className='nav-link'>Pricing</li>
          <li className='nav-link'>
            Work with us <FaChevronDown />
          </li>
          <li className='nav-link'>
            Support <FaChevronDown />
          </li>
        </ul>
        <div className='nav-btns'>
          <Button variant='outline-primary' className='signin-btn '>
            Sign in
          </Button>
          <Button variant='primary' className='signup-btn '>
            Get started
          </Button>
        </div>
        <FiAlignJustify className='toggle-btn' />
      </div>
    </nav>
  );
}

export default Navbar;
