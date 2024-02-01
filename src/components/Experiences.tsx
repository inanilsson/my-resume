import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";
import CV from "../assets/files/CV.pdf";
import report from "../assets/files/Projektrapport, inni2000.pdf";
import bonnier from "../assets/img/bonnier-news-logo.png";
import knowit from "../assets/img/knowit-logo.png";
import ikea from "../assets/img/IKEA-Logo.png";

export const Experiences = () => {
  return (
    <section className="experience" id="experience">
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
                  <h2>Erfarenheter</h2>
                  <p>
                    Nedan har jag valt några av mina tidigare erfarenheter som
                    jag anser har bidragit mest till kollegan jag är i dag. För
                    ytterligare information finner ni mitt fullständiga CV{" "}
                    <a href={CV} target="_blank">
                      här
                    </a>
                    .
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="experiences-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Bonnier News</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Examensarbete</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Ikea</Nav.Link>
                </Nav.Item>
              </Nav>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__fadeIn"
                        : "animate__animated animate__fadeOut"
                    }
                  >
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div className="experience-contents">
                          <p>
                            Jag har jobbat som redigerare på Bonnier News
                            (anställd via Marieberg Media) sedan sommaren 2022.
                            Jobber innebär att jag är en av dem som ritar upp
                            sidorna till flera titlar i hela Sverige, bland
                            annat Sundsvalls Tidning. Vi arbetar i InDesign för
                            själva ritningen, där vi får tillgång till sidor med
                            medföljande artiklar via ett annat program.
                            <br />
                            <br />
                            Det här har varit mitt första kontorsjobb, och jag
                            har fått lära mig mycket. Jag har behövt vara
                            lyhörd, stresstålig, strukturerad, uthållig (då jag
                            vanligtvis jobbar 11:30 till 23:30) och inte vara
                            rädd för att ställa frågor till mer erfarna
                            kollegor. När det gäller tidningar som ska tryckas
                            och distribueras gäller det att allting är korrekt
                            när sidan skickas till tryckeriet, vilket har passat
                            min noggrannhet utmärkt.
                          </p>
                          <img src={bonnier}></img>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="experience-contents">
                          <p>
                            Mitt examensarbete utförde jag hos Knowit under
                            våren 2023. Jag jobbade med RPA (robotic process
                            automation) och fick i uppgift att bygga en egen
                            robot. Jag jobbade då med plattformen UiPath för att
                            bygga roboten som hade som jobb att hämta
                            information från tre olika vädersidor. Jag gjorde
                            därefter en prestandajämförelse för att kunna dra
                            slutsatser gällande robotens styrkor och svagheter,
                            och därifrån kunna diskutera kring RPA:ns styrkor
                            och svagheter.
                            <br />
                            <br />
                            Jag fann mitt examensarbete väldigt roligt och
                            lärorikt. Jag fick en chans att prova på något nytt,
                            inte bara för mig utan också någonting som ligger i
                            framkant och som pekar mot en spännande framtid. Det
                            matade min vilja att lära mig nya saker och det gav
                            mig en inblick i att göra ett större projekt.
                            <br />
                            <br />
                            Eftersom det var ett examensarbete skrev jag också
                            en rapport om hela arbetet. Den kan ni hitta{" "}
                            <a href={report} target="_blank">
                              här
                            </a>
                            .
                          </p>
                          <img src={knowit}></img>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="experience-contents">
                          <p>
                            Mitt allra första riktiga jobb var på Ikea, sommaren
                            2018 efter att jag tog studenten. Där fick mitt
                            första smakprov på att vara anställd och ha ett så
                            pass stort ansvar.
                            <br />
                            <br />
                            Ikea var en otroligt bra första arbetsplats. Allt
                            från rekryteringsprocessen tills att mitt kontrakt
                            löpte ut gav mig enorm erfarenhet och kunskap
                            gällande arbetslivet.
                          </p>
                          <img src={ikea}></img>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                )}
              </TrackVisibility>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
