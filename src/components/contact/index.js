import React from "react";

const ContactInfo = () => {
  return (
    <div className="mt-5">
      <div className="text-center">
        <h2>Contact Information</h2>
        <hr style={{ backgroundColor: "black" }} />
        <img
          style={{ height: "250px", paddingRight: "4px", paddingBottom: "3px" }}
          src="C:\Users\somay\OneDrive\Desktop\Challenges\challenge-20\src\assets\images"
          alt="Somayyah Maqsudi"
        />
        <h4>
          Type something about yourself and how you want to be contacted.
        </h4>
        <hr style={{ backgroundColor: "lightgray", width: "25%" }} />
        <h3>Cell Phone</h3>
        <hr style={{ backgroundColor: "black", width: "25%" }} />
        <a href="tel:4044498329">
          <i className="fa fa-phone-alt" /> your phone number
        </a>
        <hr style={{ backgroundColor: "lightgray", width: "25%" }} />
        <h3>E-mail</h3>
        <hr style={{ backgroundColor: "black", width: "25%" }} />
        <a href="mailto:somayyah1994@gmail.com">
          <i className="fa fa-envelope" /> your email address
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
