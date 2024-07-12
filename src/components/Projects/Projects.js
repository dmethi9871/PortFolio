import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/image.png";
import emotion from "../../Assets/Projects/1_nwlU17J34ToIIaQW4blOsw.jpg";
import editor from "../../Assets/Projects/Medical-Animated-GIF-Icon-Pack-by-Discover-Template-2.gif";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/1710071557475.jpeg";
import ReactTooltip from "react-tooltip";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
    <ProjectCard
        imgPath={chatify}
        isBlog={false}
        title="Smart Helmet"
        description="An innovative Smart Helmet designed specifically for sewage workers. This helmet enhances safety with features like real-time communication, hazard detection, and emergency alerts, developed using HTML, CSS, and JavaScript. Finalist in Smart India Hackathon 2023."
        ghLink="https://github.com/dmethi9871/Smart-helmet"
        demoLink="https://smart-helmet.vercel.app/"
    />
    <ReactTooltip id="demo-tooltip2" place="top" effect="solid">
        <iframe src="https://smart-helmet.vercel.app/" title="demo-preview" />
    </ReactTooltip>
</Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Eze-Agro"
              description="Open-source smart farming solution utilizes IoT for real-time field monitoring, locust detection, laser fencing, automatic irrigation, and soil analysis. Join the revolution!"
              ghLink="https://github.com/dmethi9871/EZE-AGRO-React"
              demoLink="https://ezeagro.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Eze_Medi"
              description="EZE-Medi is a full-featured health monitoring kit designed to provide comprehensive health data for users. The kit includes sensors for temperature, ECG, and heart rate. Utilizing a user-friendly website, secure data transmission to a cloud server enables easy tracking and analysis of health metrics. This solution is ideal for remote patient monitoring and managing chronic illnesses."
              ghLink="https://github.com/dmethi9871/EZEMEDI"
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Signodes"
              description="Signodes (IoT Club) fosters IoT skills among students, enabling peer learning and project development. Explore our website for more!"
              ghLink="https://github.com/dmethi9871/Signodes_Website_Final"
              demoLink="https://signodes-club.netlify.app/"
              imgWidth="300px" // Set a specific width for the image
              imgHeight="200px"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Spotify_Clone"
              description="Your personalized music streaming platform! Enjoy seamless access to millions of songs, curated playlists, and personalized recommendations. Discover new music, create your own playlists, and experience music like never before. Join the Splotify community "
              ghLink="https://github.com/dmethi9871/Spotify-Clone"
            demoLink="https://spotify-clone-three-weld.vercel.app/"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
