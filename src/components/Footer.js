import React from "react";
import { FaGithub } from "react-icons/fa";
import SocialIcon from "./SocialIcon/SocialIcon";

const Footer = () => (
  <footer className="bg-dark medium text-center text-white-50">
    <SocialIcon
      style={{ fontSize: "2.5em" }}
      icon={FaGithub}
      link="http://www.github.com/smfils1/SoS"
    />

    <div className="p-3">Copyright &copy; 2020 AS/WA LABS </div>
  </footer>
);

export default Footer;
