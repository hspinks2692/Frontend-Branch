import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
    backgroundColor: "rgb(139, 215, 233)"
  };

  return (
    <footer>
      <nav style={navStyle}>
        <a href="https://github.com/hspinks2692" target="_blank">Github</a>
        <a href="https://docs.google.com/document/d/1VXj33BI8-2gexl4IT-aWYDlAt8-bn564/edit?usp=sharing&ouid=111919377303368324677&rtpof=true&sd=true" target="_blank">Resume</a>
        <Link to="/contact">
          <div>Contact Me</div>
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;