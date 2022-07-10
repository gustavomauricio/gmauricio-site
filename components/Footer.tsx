import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 text-center">
      <p className="font-semibold text-lg mb-2">@gustavommauricio</p>
      <div className="w-full flex justify-center">
        <a
          href="https://www.linkedin.com/in/gustavommauricio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-2x fa-linkedin color mx-2"></i>
        </a>
        <a
          href="https://twitter.com/gustavomwy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-2x fa-twitter color mx-2"></i>
        </a>
        <a
          href="https://instagram.com/gustavommauricio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-2x fa-instagram color mx-2"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
