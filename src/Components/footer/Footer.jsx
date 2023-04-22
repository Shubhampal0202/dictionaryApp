import React from 'react'
import "./footer.css"
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
function Footer() {
  return (
    <div>
      <hr />
      <h4>
        Made by <span>Shubham Pal</span>
      </h4>
      <div className="social-links">
        <BsInstagram className="icon" />
        <BsLinkedin className="icon" />
        <AiFillYoutube className="icon" />
      </div>
    </div>
  );
}

export default Footer