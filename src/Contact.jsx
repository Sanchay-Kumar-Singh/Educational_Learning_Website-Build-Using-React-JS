import React from "react";
import "./contact.css"; // Import external CSS

function App() {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // ✅ Correctly append your Web3Forms access key
    formData.append("access_key", "17067777-eb0c-4d4b-8039-e3b51331296e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success:", res);
        alert("Thank you! Your message has been sent.");
        event.target.reset();
      } else {
        console.error("Error:", res);
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network error, please check your connection.");
    }
  };

  return (
  <>
    <div className="contact-container" id="contact">
      <h2 className="contact-title">Contact Us</h2>
      <form onSubmit={onSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}

export default App;
