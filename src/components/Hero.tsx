import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useLangContext from "../hooks/useLangContext";
import { currentLanguage } from "../utils";
interface ParamsType {
  name: {
    AR: string;
    EN: string;
  };
  description: {
    AR: string;
    EN: string;
  };
  href: string;
}

const Hero = ({ name, description, href }: ParamsType) => {
  const { isEnglish } = useLangContext();
  return (
    <div className="py-5 bg-dark text-white">
      <Container>
        <h1 style={{ fontSize: "40px" }}>
          {name[currentLanguage(isEnglish)]} Diploma
        </h1>
        <p className="mt-3 mb-5 pb-1" style={{ maxWidth: "400px" }}>
          {description[currentLanguage(isEnglish)]}
        </p>
        <Link to={href} className="main-btn px-5">
          {isEnglish ? "Start Your Career" : "ابدأ حياتك المهنية"}
        </Link>
      </Container>
    </div>
  );
};

export default Hero;
