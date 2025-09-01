import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Existing assets
import leaf from "../../Assets/Projects/image.png";
import emotion from "../../Assets/Projects/1_nwlU17J34ToIIaQW4blOsw.jpg";
import editor from "../../Assets/Projects/Medical-Animated-GIF-Icon-Pack-by-Discover-Template-2.gif";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png"; // Not used but kept in case
import bitsOfCode from "../../Assets/Projects/1710071557475.jpeg";
import boticx from "../../Assets/Projects/Boticx.c7f396701ed894b94932b93cdf4d394b.svg";
import pgnetwork from "../../Assets/Projects/logo pg network.b15ebdfba4092326cbf1.jpg";
import digify from "../../Assets/Projects/Digify.png";

// New logos (you need to save them in your Assets/Projects/ folder)
import gaLogo from "../../Assets/Projects/Screenshot 2025-09-01 072444.png";
import tmMattersLogo from "../../Assets/Projects/tmmatters.png";
import civieaseLogo from "../../Assets/Projects/civiease.png";

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

      
          {/* NEW: TM Matters */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tmMattersLogo}
              isBlog={false}
              title="TM Matters"
              description="Providing reliable, compliant traffic management solutions across New Zealand for safe and effective roadways."
              demoLink="https://tmmatters.co.nz/"
            />
          </Col>

          {/* NEW: CiviEase */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={civieaseLogo}
              isBlog={false}
              title="CiviEase"
              description="Delivering comprehensive traffic management and consenting solutions — trusted by Canterbury’s builders and developers."
              demoLink="https://civiease.co.nz/"
            />
          </Col>

          {/* Botricx */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={boticx}
              isBlog={false}
              title="Botricx Website"
              description="Revamped Botricx’s online presence with a sleek, modern website built using React.js. The site offers an intuitive user experience with fast loading times, interactive elements, and a design tailored to showcase their technological solutions in smart farming."
              demoLink="https://www.boticx.com/"
            />
          </Col>

          {/* PG Network */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pgnetwork}
              isBlog={false}
              title="PG Network"
              description="Developed a comprehensive, responsive website for PG Network using React.js. The platform features a user-friendly interface, advanced performance optimizations, and bespoke functionalities designed to enhance their network services and client interactions."
              demoLink="https://www.pgnetwork.in/"
            />
          </Col>

          {/* Digify App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digify}
              isBlog={false}
              title="Digify App"
              description="Created an engaging and performant mobile app for Coolbrain Solution using React Native, Node.js, and MongoDB. The app offers a smooth user experience with interactive features and optimized performance, tailored to meet the needs of their innovative digital solutions."
              demoLink="https://drive.google.com/file/d/1ttZWE7FyG0Um6Vf1CkkkO_DHo9SWBYTO/view"
            />
          </Col>

          {/* Eze-Agro */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Eze-Agro"
              description="Open-source smart farming solution utilizes IoT for real-time field monitoring, locust detection, laser fencing, automatic irrigation, and soil analysis."
              ghLink="https://github.com/dmethi9871/EZE-AGRO-React"
              demoLink="https://ezeagro.vercel.app/"
            />
          </Col>

          {/* Smart Helmet */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Smart Helmet"
              description="An innovative Smart Helmet designed specifically for sewage workers. Enhances safety with real-time communication, hazard detection, and emergency alerts. Finalist in Smart India Hackathon 2023."
              ghLink="https://github.com/dmethi9871/Smart-helmet"
              demoLink="https://smart-helmet.vercel.app/"
            />
          </Col>

          {/* EZE-Medi */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Eze-Medi"
              description="A health monitoring kit with sensors for temperature, ECG, and heart rate. Includes a web dashboard with secure cloud-based tracking, ideal for remote patient monitoring and chronic illness management."
              ghLink="https://github.com/dmethi9871/EZEMEDI"
            />
          </Col>

          {/* Signodes */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Signodes"
              description="Signodes (IoT Club) fosters IoT skills among students, enabling peer learning and project development."
              ghLink="https://github.com/dmethi9871/Signodes_Website_Final"
              demoLink="https://signodes-club.netlify.app/"
              imgWidth="300px"
              imgHeight="200px"
            />
          </Col>

          {/* Spotify Clone */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Spotify Clone"
              description="Your personalized music streaming platform! Enjoy seamless access to millions of songs, curated playlists, and personalized recommendations. Discover new music, create playlists, and experience music like never before."
              ghLink="https://github.com/dmethi9871/Spotify-Clone"
              demoLink="https://spotify-clone-three-weld.vercel.app/"
            />
          </Col>
    {/* NEW: GA Applications */}
    <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gaLogo}
              isBlog={false}
              title="GA Applications"
              description="Transforming businesses with IoT & AI-powered automation tools — improving efficiency, innovation, and scalability."
              demoLink="https://gaapplications.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
