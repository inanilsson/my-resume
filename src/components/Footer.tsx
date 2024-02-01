import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/name-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/ina-nilsson-b67079222/"
                target="_blank"
              >
                <img src={navIcon1} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
