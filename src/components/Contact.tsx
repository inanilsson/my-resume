import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : "animate__animated animate__fadeOut"
                  }
                >
                  <h2>Kontakt</h2>
                  <p>
                    ina.nilsson99@gmail.com
                    <br />
                    <br />
                    070-371 06 35
                    <br />
                    <br />
                    Sundsvall
                    <br />
                    <br />
                    <a
                      href="https://www.linkedin.com/in/ina-nilsson-b67079222/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
