import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>

      <Row className="intro-section">
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
  <Col md={8} className="home-about-description">
    <div className="intro-content">
      <h1 className="intro-heading">
        LET ME <span className="purple"> INTRODUCE </span> MYSELF
      </h1>
      <div className="intro-body">
        <p>
          <span className="highlight">I fell for coding,</span> and it's been a magical journey since. 🌟
        </p>
        <p>
          Fluent in <span className="purple">Java</span> and <span className="purple">JavaScript</span>,<br /> I craft code symphonies that dance across screens. 💻
        </p>
        <p>
          Passionate about <span className="purple">Web Technologies</span> and <span className="purple">Full Stack</span> exploration. 🔗
        </p>
        <p>
          With <span className="purple">Node.js</span> and <span className="purple">Modern JS Libraries</span> like <span className="purple">React.js</span> and <span className="purple">Spring Boot</span>,<br /> I bring ideas to life. 🚀
        </p>
      </div>
    </div>
  </Col>
</Row>



        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dmethi9871"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/infinity_deepu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/deepanshu011/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/1.1_infinity/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
