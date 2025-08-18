import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Experiences from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import Blogs from "./sections/Blogs";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experiences />
      <Projects />
      <Blogs />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
