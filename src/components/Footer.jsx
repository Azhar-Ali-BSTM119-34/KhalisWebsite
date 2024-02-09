import React from "react";
import { logo } from "../assets";
function Footer() {
  const handleEmailClick = () => {
    // Replace these values with your actual Email.js template ID and user ID
    const templateParams = {
      to_email: "avinashdm@outlook.com",
    };

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        templateParams,
        "your_user_id"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };
  //bg-gradient-to-r  from-indigo-900 to-blue-900
  return (
    <div>
      <footer className="w-full lg:absolute bottom-0 bg-opacity-30 bg-tertiary text-white p-6 rounded-tl-3xl">
        <div className="row flex lg:flex-row flex-col lg:w-85 mx-auto items-start justify-between">
          <div className="lg:flex-basis-25 flex-basis-full p-4 lg:p-10">
            <img
              src={logo}
              alt="Logo"
              className="w-40 h-16 object-contain mb-4 lg:mb-0"
            />
            <p className="mt-5">
              Khalis - Nurturing Lives with Pure Dairy Goodness. Your journey to
              unadulterated purity begins here. Download our app and join the
              dairy revolution. From farm to your doorstep, every product
              embodies authenticity and quality. Taste the difference with
              Khalis.
            </p>
          </div>
          <div className="lg:flex-basis-25 flex-basis-full p-4 lg:p-10">
            <div className="p-3"></div>
            <h3 className="font-bold mb-5">Office</h3>
            <p className=""> Riyadh, Saudi Arabia</p>
            <p
              className="email-id border-b-1 border-gray-300  cursor-pointer"
              onClick={handleEmailClick}
            >
              services@logxperts.com
            </p>
            <h4> +966-50-110-8026</h4>
          </div>
          <div className="lg:flex-basis-25 flex-basis-full p-4 lg:p-10"></div>
          <div className="lg:flex-basis-25 flex-basis-full p-4 lg:p-10"></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
