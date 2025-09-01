import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Deepanshu Methi</span> from{" "}
            <span className="purple">Ghaziabad, India.</span>
            <br />
            I have completed my Bachelor of Technology in{" "}
            <span className="purple">Computer Science & Engineering</span> from
            NIET, Greater Noida (2020 – 2024).
            <br />
            <br />
            Currently, I am working as a{" "}
            <span className="purple">Cross-Platform Developer at GA Applications</span>, 
            where I design and develop scalable real-time and IoT-powered solutions 
            using <span className="purple">Node.js, React, Docker, and Cloud technologies</span>.
            <br />
            <br />
            Apart from coding and building products, I also enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Trading & Exploring Markets
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Exploring New Places
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons & Problem Solving
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building scalable solutions is not just about code, it’s about 
            creating impact."
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
