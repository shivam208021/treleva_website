import React from "react";
import { Button } from "@mui/material";
import { Call, WhatsApp, Email } from "@mui/icons-material";

const handleWhatsAppButtonClick = () => {
  const whatsappNumber = "7905492116"; // Replace with the actual WhatsApp number
  const message = encodeURIComponent("Hello!!");
  window.open(
    `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`,
    "_blank"
  );
};

const handleCallButtonClick = () => {
  const phoneNumber = "7905492116"; // Replace with the actual phone number
  window.open(`tel:${phoneNumber}`);
};

const emailLink = "mailto:trapti.shinde@treleva.org";

const Contact = () => {
  return (
    <div >
      
    </div>
  );
};

export default Contact;
