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
        <a href="https://github.com/hspinks2692">Github</a>
        <a href="https://docs.google.com/document/d/1DrI6AP4276d1ef2a0yyRN3om3PCGP_qM/">Resume</a>
        <Link to="/contact">
          <div>Contact Me</div>
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;