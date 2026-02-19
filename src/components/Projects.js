import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

/* ===============================
   PROJECT BOX COMPONENT
================================= */

const ProjectBox = ({ number, title, description, tech, link }) => {

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="projbox-item">

      <div className="projbox-badge">{number}</div>

      <h3 className="projbox-title">{title}</h3>

      <h4 className={`projbox-desc ${expanded ? "expanded" : ""}`}>
        {description}
      </h4>

      <button
        className="projbox-toggle"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "View less" : "View more"}
      </button>

      <div className="projbox-tech">
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <a
        href={link}
        className="projbox-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub link →
      </a>

    </div>
  );
};


/* ===============================
   MAIN PROJECTS COMPONENT
================================= */

export const Projects = () => {

  const projects = [

    {
      number: "01",
      title: "SOC Automation System Deploying On Microsoft Azure (Lab)",
      description:
        "Built a SOC automation lab on Microsoft Azure to simulate real-world detection and incident response workflows. The project integrates Wazuh (SIEM), TheHive (incident response), and Shuffle (SOAR) to automate alert ingestion, enrichment, case management, and response. Attack activity was simulated on a Windows 11 endpoint using Mimikatz to validate detection logic and end-to-end automation within a cloud-based SOC environment.",
      tech: [
        "Incident Response",
        "Detection Engineering",
        "Virtual Computing",
        "SOC",
        "SOAR",
        "SIEM",
        "Wazuh",
        "TheHive",
        "Azure",
        "Ubuntu"
      ],
      link:
        "https://github.com/lilmilo2704/SOC-automation-lab-on-Microsoft-Azure"
    },

    {
      number: "02",
      title:
        "Hands-on Cybersecurity Lab: Intrusion Detection & Prevention with Snort",
      description:
        "This is a lab project for the subject Cybersecurity - 48730. In this lab, I completed a practical cybersecurity lab focused on configuring and operating Snort, an open-source Intrusion Detection and Prevention System (IDS/IPS), in a simulated attack–defense environment using separate Server and Attacker virtual machines.",
      tech: [
        "Network Security",
        "Intrusion Detection",
        "Intrusion Prevention",
        "Log Analysis",
        "Linux",
        "Snort IDS/IPS"
      ],
      link:
        "https://github.com/lilmilo2704/Hands-on-Cybersecurity-Lab-Intrusion-Detection-Prevention-with-Snort"
    },

    {
      number: "03",
      title: "Force.com University Management System",
      description:
        "This is a project of the subject Cloud Computing and Software as a Service - 41001 at UTS that I conducted with another member. We created an imaginated case study where UTS is embracing digital transformation and currently in need of building a more responsive and student-centered ecosystem. Therefore, I collaborated with my partner to develop a prototype management system that can be used by all stakeholders including leadership, staff, and students. The ideas and functions of this system were inspired by the CANVAS platform used by UTS. Different objectives and requirements for each role were successfully integrated and deployed, helping us achieve the maximum grade for this assignment.",
      tech: [
        "Force.com",
        "CRM",
        "System Deployment",
        "Teamworking",
        "Cloud Computing"
      ],
      link: "#"
    }

  ];


  return (
    <section className="project" id="projects">

      <Container>

        <Row>

          <Col size={12}>

            <TrackVisibility>
              {({ isVisible }) =>

                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                  <h2>Projects</h2>

                  <p className = "projects-description">
                    These projects represent key milestones I have undertaken
                    throughout my academic journey and practical training in the field.
                    They stand as clear evidence of my professional competence and
                    subject-matter expertise. You are welcome to review them at your discretion.
                  </p>


                  <div className="projbox-wrapper">

                    <div className="projbox-grid">

                      {projects.map((project, index) => (
                        <ProjectBox
                          key={index}
                          number={project.number}
                          title={project.title}
                          description={project.description}
                          tech={project.tech}
                          link={project.link}
                        />
                      ))}

                    </div>

                  </div>


                </div>

              }
            </TrackVisibility>

          </Col>

        </Row>

      </Container>

    </section>
  );
};
