import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tyi7irt", // Replace with your EmailJS Service ID
        "template_zbj78v2", // Replace with your EmailJS Template ID
        formData,
        "GNxAGzLN6F0rEQKtq" // Replace with your EmailJS Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        onClose(); // Close modal after submission
      })
      .catch((error) => console.error("Error sending email:", error));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Send
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
