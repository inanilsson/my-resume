import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import cpp from "../assets/img/cpp_logo.png";
import webimg from "../assets/img/web-logo.png";
import csharp from "../assets/img/c-sharp-logo.png";
import reacticon from "../assets/img/react-logo.png";
import dotnet from "../assets/img/net-logo.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-bx">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__fadeIn"
                        : "animate__animated animate__fadeOut"
                    }
                  >
                    <h2>Kompetenser</h2>
                    <p>
                      Mina kunskaper kommer främst från min utbildning -
                      kandidatprogrammet inom Datateknik på Mittuniversitetet.
                      Nedan har jag samlat några av de områden jag har jobbat
                      mest med, och markerat hur jag har fått kunskapen.
                    </p>
                  </div>
                )}
              </TrackVisibility>

              <Carousel
                showDots={true}
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={cpp} alt="Image" />
                  <h5>C++</h5>
                  <h5>MIUN</h5>
                </div>
                <div className="item">
                  <img src={webimg} alt="Image" />
                  <h5>Webbprogrammering</h5>
                  <h5>MIUN/Egna studier</h5>
                </div>
                <div className="item">
                  <img src={reacticon} alt="Image" />
                  <h5>React</h5>
                  <h5>Egna studier</h5>
                </div>
                <div className="item">
                  <img src={csharp} alt="Image" />
                  <h5>C#</h5>
                  <h5>Egna studier</h5>
                </div>
                <div className="item">
                  <img src={dotnet} alt="Image" />
                  <h5>.NET</h5>
                  <h5>Egna studier</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
