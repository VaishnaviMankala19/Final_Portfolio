import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Calc from "../Assets/img/Calc.png";
import Todo from "../Assets/img/Todo.png";
import Note from "../Assets/img/Note.png";
import Smarthome from "../Assets/img/Smarthome.png";
import Event from "../Assets/img/Event.png";
import Editor from "../Assets/img/Editor.png";
import Drum from "../Assets/img/Drum.png";
import Clock from "../Assets/img/Clock.png";
import Redesign from "../Assets/img/Redesign.png";
import Movie from "../Assets/img/Movie.png";
import Space from "../Assets/img/Space.png";
import colorSharp2 from "../Assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "KEEPER-APP",
      description: "A Note-application",
      imgUrl: Note,
      url: "https://zn54v3.csb.app/",
    },
    {
      title: "SMARTHOME",
      description: "A smarthome webpage",
      imgUrl: Smarthome,
      url: "https://smarthome-eight.vercel.app/",
    },
    {
      title: "EVENTSPHERE",
      description: "Landing page for Events",
      imgUrl: Event,
      url: "https://octanet-may-landing.vercel.app/",
    },
    {
      title: "CALC",
      description: "A basic Calculator",
      imgUrl: Calc,
      url: "https://vaishnavimankala19.github.io/CaluculateMe/",
    },
    {
      title: "TODO",
      description: "Todo-list application",
      imgUrl: Todo,
      url: "https://fknszw.csb.app/",
    },
    {
      title: "Online-Editor",
      description: "An online Editor",
      imgUrl: Editor,
      url: "https://github.com/VaishnaviMankala19/Myeditor",
    },
  ];

  const projects2 = [
    {
      title: "Drum-Kit",
      description: "",
      imgUrl: Drum,
      url: "https://vaishnavimankala19.github.io/Play-With-My-Drums/",
    },
    {
      title: "Analog Clock",
      description: "",
      imgUrl: Clock,
      url: "https://vaishnavimankala19.github.io/Analogclock/",
    },
  ]

  const projects3 = [
    {
      title: 'Ticket-Booking',
      description: "",
      imgUrl: Movie,
      url: "https://www.figma.com/design/PFKYP5kEJLQfguHeGKyaL8/MovieTicketsBooking?node-id=0-1&t=h1x82VwiH95DJYAR-0",
    },
    {
      title: "Space-Exploration",
      description: "Currently Working on it",
      imgUrl: Space,
      url: "https://www.figma.com/design/l72gV19wycNXSxeLrz7I8V/Space-Explorer?node-id=0-1&t=C8uzc2V7symLAGGC-0",
    },
    {
      title: "AP-SSDC Home Page Redesign",
      description: "",
      imgUrl: Redesign,
      url: "https://www.figma.com/design/Y0cUYk4StZfOIff15uGVqi/AP-SSDC-HOME-PAGE-RE-DESIGN?node-id=162-720&t=YdOOd01yAkBsX3n9-0",
    },
  ]


  const handlePreview = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Click To View The Projects Preview</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Dev Tab-1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Dev Tab-2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Design Tab</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handlePreview(project.url)}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handlePreview(project.url)}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handlePreview(project.url)}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
