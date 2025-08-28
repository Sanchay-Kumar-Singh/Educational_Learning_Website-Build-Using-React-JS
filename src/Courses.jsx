import React from "react";
import "./courses.css";
import webImg from "./assets/web-dev-img1.jpeg";
import dsaImg from "./assets/dsa.png";
import dsImg from "./assets/data-science-course-benefits.webp";
import mlImg from "./assets/Machine-Learning-1.jpg";
import aiImg from "./assets/blog-26.jpg";
import appImg from "./assets/app-development-banner_33099-1720.avif";
import cyb from "./assets/WhatsApp_Image_2024-11-28_at_11_48_07_AM.jpeg";
import gra from "./assets/Graphic-Design.webp";

function Courses() {
  const courses = [
    {
      title: "💻 Web Development",
      desc: "Master HTML, CSS, JavaScript, and modern frameworks to build stunning websites.",
      img: webImg
    },
    {
      title: "📊 Data Science",
      desc: "Learn data analysis, visualization, and predictive modeling with Python and advanced tools.",
      img: dsImg
    },
    {
      title: "🤖 Machine Learning",
      desc: "Understand algorithms and models to solve real-world problems with intelligent systems.",
      img: mlImg
    },
    {
      title: "🧠 Artificial Intelligence",
      desc: "Explore deep learning, neural networks, and AI-powered innovations.",
      img: aiImg
    },
     {
      title: "🎨 Graphic Design",
      desc: "Master Photoshop, Illustrator, and design principles for stunning visuals.",
      img: gra
    },
     {
      title: "🔒 Cybersecurity",
      desc: "Protect systems, networks, and data with top security techniques.",
      img: cyb
    },
     {
      title: "🧮 Data Structures & Algorithms (DSA)",
      desc: "Build a strong foundation in problem-solving and coding for interviews and real-world challenges.",
      img: dsaImg
    },
    {
      title: "📱 App Development",
      desc: "Create Android and iOS applications with modern tools like Flutter and React Native.",
      img: appImg
    }
  ];

  return (
  <>
    <section className="courses" id="course">
      <div className="courses-container">
        <h2 className="courses-title">📚 Our Popular Courses</h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.img} alt={course.title} className="course-image" />
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <a href="#enroll" className="btn-enroll">Enroll Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
    <hr /></>
  );
}

export default Courses;
