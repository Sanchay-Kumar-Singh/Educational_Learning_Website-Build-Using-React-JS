import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      style={{
        background: "#000000",
        padding: "10px 20px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "38px",
            color: "white",
            cursor: "pointer",
          }}
        >
          E-Learners<span style={{ color: "#00aced" }}>.</span>
        </div>

        <div
          onClick={toggleMenu}
          style={{
            fontSize: "28px",
            color: "white",
            cursor: "pointer",
            display: "none",
          }}
          className="menu-icon"
        >
          {isOpen ? "✖" : "☰"}
        </div>
   
        <div
          style={{
            display: "flex",
            gap: "25px",
            fontWeight: "600",
            fontSize: "20px",
          }}
          className="desktop-menu"
        >
          <a href="#home" style={{ color: "white", textDecoration: "none",marginRight:"20px" }}>
            Home
          </a>
          <a href="#about" style={{ color: "white", textDecoration: "none",marginRight:"20px" }}>
            About
          </a>
          <a href="#course" style={{ color: "white", textDecoration: "none",marginRight:"20px" }}>
            Courses
          </a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" ,marginRight:"20px" }}>
            Contact Us
          </a>
        </div>
      </div>
    
      {isOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "10px",
            fontWeight: "600",
            fontSize: "18px",
            background: "#111",
            padding: "10px",
            borderRadius: "8px",
          }}
          className="mobile-menu"
        >
          <a href="#home" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
          <a href="#about" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
          <a href="#course" style={{ color: "white", textDecoration: "none" }}>
            Courses
          </a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
            Contact Us
          </a>
        </div>
      )}
     
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .menu-icon {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
