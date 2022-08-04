import React, { useEffect } from "react";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Uses from "../components/Uses";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Hero />

      <Testimonials />
      <Uses />
      <Quote />
      <Footer />
    </>
  );
}

export default Home;
