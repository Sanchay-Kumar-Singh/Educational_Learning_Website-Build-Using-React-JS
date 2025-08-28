import React from "react";
import "./home.css"; // Import external CSS
import heroImg from "./assets/learn-learning-knowledge-education-college-concept_53876-133560.avif"; // Add your image in src/assets/

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="home-text">
          <h1>Welcome to <span>E-Learners</span></h1>
          <p>
           <h2> "Empowering Your Digital Journey"</h2>
            Discover amazing solutions and services that help you grow and achieve your goals. 
            We combine technology and creativity to deliver excellence.
          </p>
          <a href="#about" className="btn-primary">Get Started</a>
        </div>
        <div className="home-image">
          <img src={heroImg} alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default Home;
