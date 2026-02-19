import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/cert1.jpg";
import projImg2 from "../assets/img/cert2.jpg";
import projImg3 from "../assets/img/cert3.jpg";
import projImg4 from "../assets/img/cert4.jpg";
import projImg5 from "../assets/img/cert5.jpg";
import projImg6 from "../assets/img/cert6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const AboutMe = () => {

  const projects = [
    {
      title: "Science and Technology Track - Cloud, Machine Learning, & Security Academy",
      description: "Issued by: U.S. – ASEAN Center | Coursera",
      imgUrl: projImg1,
      link: "https://www.coursera.org/account/accomplishments/badge/o0HlfMXfSZOB5XzF33mTMQ",
    },
    {
      title: "Generative AI: Introduction and Applications",
      description: "Issued by: Coursera",
      imgUrl: projImg2,
      link: "https://www.coursera.org/account/accomplishments/records/MI8V7UT8VO57",
    },
    {
      title: "Generative AI with Large Language Models",
      description: "Issued by: AWS | DeepLearning.AI | Coursera",
      imgUrl: projImg3,
      link: "https://www.coursera.org/account/accomplishments/records/UY53TW8QS6UA",
    },
    {
      title: "Introduction to Machine Learning on AWS",
      description: "Issued by AWS | Coursera",
      imgUrl: projImg4,
      link: "https://www.coursera.org/account/accomplishments/records/4VDF0M81FG48",
    },
    {
      title: "Cybersecurity for Everyones",
      description: "Issued by University of Maryland | Coursera",
      imgUrl: projImg5,
      link: "https://www.coursera.org/account/accomplishments/records/S0U5VECL8NVJ",
    },
    {
      title: "Introduction to Cybersecurity Essentials",
      description: "Issued by: IBM | Coursera",
      imgUrl: projImg6,
      link: "https://www.credly.com/badges/64e1d911-2403-4656-8f73-b71078c8dc98/public_url",
    },
  ];

  return (
    <section className="project" id="aboutme">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About me</h2>
                <p className = "about-me-description">Here you'll find a lot of information about my background. This is a detailed overview of all my education, experiences, achievements and milestones in the field of computing science and cybersecurity. No matter how hard the journey has been, I've always strived to grow and learn continuously and that's what I'm proud about myself.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Achievements</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <div className="education-timeline">
                          
                          <div className="timeline">
                            <div className="timeline-item">
                              <div className="timeline-year">2024 - 2027</div>
                              <div className="timeline-marker">
                                <div className="timeline-dot"></div>
                              </div>
                              <div className="timeline-content-wrapper">
                                <div className="timeline-content">
                                  <p className="timeline-institution"><strong>University of Technology Sydney (UTS)</strong></p>
                                  <p className="timeline-degree">Course: Bachelor of Computing Science (Honour)</p>
                                  <p className="timeline-major">Major: Cybersecurity and Privacy</p>
                                  <p className="timeline-gpa">Current GPA: <strong>6.75 / 7</strong> - <strong> High Distinction</strong></p>
                                  <p className="timeline-highlights"><strong>Outstanding Achievements:</strong> Dean's List 2025</p>
                                </div>
                              </div>
                            </div>
                            <div className="timeline-item">
                              <div className="timeline-year">2023 - 2024</div>
                              <div className="timeline-marker">
                                <div className="timeline-dot"></div>
                              </div>
                              <div className="timeline-content-wrapper">
                                <div className="timeline-content">
                                  <p className="timeline-institution"><strong>UTS College</strong></p>
                                  <p className="timeline-degree">Course: Diploma of IT</p>
                                  <p className="timeline-major">Major: Information Technology</p>
                                  <p className="timeline-gpa">GPA: <strong>5.9 / 7</strong> - <strong>Distinction</strong></p>
                                  <p className="timeline-highlights"><strong>Outstanding Achievements:</strong> Database Fundamental (HD) • Programming 1 (HD) • Programming 2 (HD)</p>
                                </div>
                              </div>
                            </div>
                            <div className="timeline-item">
                              <div className="timeline-year">2021 - 2023</div>
                              <div className="timeline-marker">
                                <div className="timeline-dot"></div>
                              </div>
                              <div className="timeline-content-wrapper">
                                <div className="timeline-content">
                                  <p className="timeline-institution"><strong>Le Hong Phong High School for Gifted</strong></p>
                                  <p className="timeline-gpa">GPA: <strong>9.0 / 10</strong></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="first">
                        <div className="exp-container">

                          <div className="exp-timeline">

                            {/* Item 1 */}
                            <div className="exp-item">
                              <div className="exp-date">
                                Dec 2025 – Present
                              </div>

                              <div className="exp-line-dot"></div>

                              <div className="exp-card">
                                <h3>AI Model Evaluator, DataAnnotation</h3>
                                <ul>
                                  <li>
                                    Evaluated and enhanced AI-generated outputs across natural language,
                                    reasoning, and programming tasks to improve model reliability.
                                  </li>
                                  <li>
                                    Reviewed and validated Python, JavaScript, and SQL code for logical
                                    correctness and performance efficiency.
                                  </li>
                                  <li>
                                    Performed hallucination detection and systematic fact-checking.
                                  </li>
                                  <li>
                                    Delivered structured feedback to refine LLM training alignment.
                                  </li>
                                </ul>
                              </div>
                            </div>

                            {/* Item 2 */}
                            <div className="exp-item">
                              <div className="exp-date">
                                Jan 2026 – Feb 2026
                              </div>

                              <div className="exp-line-dot"></div>

                              <div className="exp-card">
                                <h3>Cybersecurity Analyst Intern, KhaiFrost</h3>
                                <ul>
                                  <li>
                                    Contributed to enterprise IT infrastructure and security operations.
                                  </li>
                                  <li>
                                    Deployed and managed virtual machines in a production-like environment.
                                  </li>
                                  <li>
                                    Assisted in enterprise network configuration and troubleshooting.
                                  </li>
                                  <li>
                                    Applied security best practices including access control and system hardening.
                                  </li>
                                </ul>
                              </div>
                            </div>

                            {/* Item 3 */}
                            <div className="exp-item">
                              <div className="exp-date">
                                2022 – 2023
                              </div>

                              <div className="exp-line-dot"></div>

                              <div className="exp-card">
                                <h3>Teaching Assistant, Le Hong Phong High School for the Gifted</h3>
                                <ul>
                                  <li>
                                    Supported delivery of advanced Computer Science curriculum.
                                  </li>
                                  <li>
                                    Improved student academic performance by 30%.
                                  </li>
                                  <li>
                                    Built data-driven performance reports using Excel and Python.
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>
                        </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
