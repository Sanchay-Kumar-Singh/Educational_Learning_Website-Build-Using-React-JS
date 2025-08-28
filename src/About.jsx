import React from "react";
import "./about.css";
import aboutImg from "./assets/Screenshot 2025-08-27 023609.png"; // Ensure an image is in src/assets/

function About() {
  return (
 <>
 <h1 className="sets">About US</h1>
    <section className="about" id="about">
      <div className="about-container">
        {/* Image Section */}
        <div className="about-image">
          <img src={aboutImg} alt="E-learning" />
        </div>

        {/* Text Section */}
        <div className="about-text">
          <h1>📚 About Our Platform</h1>
          <p>
            Welcome to <strong>E-Learners</strong>! 🚀 We make education accessible, 
            engaging, and fun. Whether you’re a student 🎓, a professional 💼, 
            or a lifelong learner 🌱, we have something for you.
          </p>
          <p>
            With <span className="highlight">expert instructors 👩‍🏫</span>, 
            <span className="highlight">interactive content 💻</span>, and 
            <span className="highlight">flexible schedules ⏳</span>, we ensure 
            you can grow your skills at your own pace while staying motivated. 
          </p>
          <a href="#course" className="btn-primary">🔥 Explore Courses</a>
        </div>
      </div>
    </section>
    <hr /></>
  );
}

export default About;
