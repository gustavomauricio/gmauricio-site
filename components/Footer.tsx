import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center">
      <div className="w-full flex justify-center gap-4">
        <a
          href="https://github.com/gustavomauricio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-xl fa-github color"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/gustavommauricio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-xl fa-linkedin color"></i>
        </a>
        <a
          href="https://twitter.com/gustavomwy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-xl fa-twitter color"></i>
        </a>
        <a
          href="https://instagram.com/gustavommauricio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-xl fa-instagram color"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
