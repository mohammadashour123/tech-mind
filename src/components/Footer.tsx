import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useLangContext from "../hooks/useLangContext";

import logo from "../assets/logo-color-m.png";
import footer from "../data/footer";

const Footer = (): JSX.Element => {
  const { isEnglish } = useLangContext();
  return (
    <footer
      dir={isEnglish ? "ltr" : "rtl"}
      className="page-footer bg-main font-small blue pt-4">
      {footer && (
        <>
          <Container
            className={`container-fluid text-lg-${
              isEnglish ? "start" : "end"
            }`}>
            <Row>
              <div className="col-5 col-sm-6 col-md-6 col-lg-3 mt-md-0 my-3">
                <img
                  className="footer-logo mx-auto"
                  src={logo}
                  alt="logo"
                  style={{ maxWidth: "190px" }}
                />
                <p className="footer-logo-text text-white fw-semibold fs-4">
                  {footer.words}
                </p>
                <ul className="footer-social list-unstyled p-0 d-flex">
                  {footer.social_icons.map((icon, i) => (
                    <div
                      key={i}
                      className="rounded-circle bg-white mx-1 mx-sm-2 d-flex p-1"
                      style={{ width: "fit-content" }}
                      role="button">
                      <FontAwesomeIcon
                        className="text-center fs-5"
                        color="var(--yellow-color)"
                        icon={icon.icon}
                      />
                    </div>
                  ))}
                </ul>
              </div>

              <div className="col-7 col-sm-6 col-md-6 col-lg-3 mb-md-0 my-3">
                <h4 className="text-white fw-semibold">
                  {isEnglish ? "Services" : "الخدمات"}
                </h4>
                <ul className="list-unstyled p-0">
                  {footer.services.map((link, i) => (
                    <li className="my-3" key={i}>
                      <Link className="text-white" to={link.href}>
                        {link.name[isEnglish ? "EN" : "AR"]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-5 col-sm-6 col-md-6 col-lg-3 mb-md-0 my-3">
                <h4 className="text-white fw-semibold">
                  {isEnglish ? "Usefull Links" : "روابط مفيدة"}
                </h4>
                <ul className="list-unstyled p-0">
                  {footer.usefu_links.map((link, i) => (
                    <li className="my-3" key={i}>
                      <Link className="text-white" to={link.href}>
                        {link.name[isEnglish ? "EN" : "AR"]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-7 col-sm-6 col-md-6 col-lg-3 mb-md-0 my-3">
                <h4 className="text-white fw-semibold">
                  {isEnglish ? "Contact Us" : "تواصل معنا"}
                </h4>
                <ul className="list-unstyled p-0">
                  {footer.contact.map((link, i) => (
                    <li className="text-white my-3" key={i}>
                      <FontAwesomeIcon
                        color="var(--yellow-color)"
                        fontSize={20}
                        icon={link.icon}
                        className="mx-2"
                      />
                      <span className="mx-1 footer-contact-text">
                        {link.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Row>
          </Container>

          <div className="footer-copyright text-center py-3 text-white">
            © 2023 Copyright: Tech Mind
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
