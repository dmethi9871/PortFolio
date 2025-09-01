import React from 'react';
import NavBar from '../Navbar';
import Particle from '../Particle';
import { Container, Row, Col } from 'react-bootstrap';

import ExperinceCard from './ExperinceCard';
import walia from '../../Assets/Walia.png';
import _4Cplus from '../../Assets/4Cplus.jpg';

function Experinces() {
  return (
    <>
      <NavBar />
      <Particle />
      <Container fluid className="project-section">
        <Container>
          <h1
            style={{
              color: 'white',
              position: 'relative',
              marginBottom: '30px', // reduced from 50px
              fontSize: '40px', // slightly smaller
            }}
          >
            <span
              style={{
                borderBottom: '3px solid purple',
                fontWeight: 'bold',
                marginRight: '5px',
              }}
            >
              Work
            </span>
            <strong
              className="purple"
              style={{ borderBottom: '3px solid #ffff', fontWeight: 'bold' }}
            >
              History
            </strong>
          </h1>

          <Row style={{ justifyContent: 'center', marginBottom: '20px' }}>
            {/* GA Applications */}
            <Col md={5} className="project-heading" style={{ marginBottom: '15px' }}>
              <ExperinceCard
                description={`Designed and launched Spy Tower, a cutting-edge real-time surveillance solution handling 1,500+ concurrent streams with <150ms latency using Node.js, MongoDB, Docker, WebSockets, and WebRTC. 
Secured systems with RBAC and end-to-end encryption while integrating Raspberry Pi–enabled IoT devices for distributed ecosystems. 
Implemented scalable cloud archival solutions reducing incident response time by 40%.`}
                ImgPath={walia}
                isBlog={false}
                title={`GA Applications`}
                time={'Apr 2025 – Present'}
                role={'Cross-Platform Developer'}
                companyLocation={'Haryana'}
                workMode={'Full-time'}
                technologyUsed={'Node.js, MongoDB, Docker, WebRTC, WebSockets, Bash, Tailscale'}
                milestones={'Launched Spy Tower, Secured IoT Ecosystem, Reduced response time by 40%'}
              />
            </Col>

            {/* 4C Plus */}
            <Col md={5} className="project-heading" style={{ marginBottom: '15px' }}>
              <ExperinceCard
                description={`Developed high-performance cross-platform mobile apps for Android and iOS using Java and React Native, increasing user engagement by 55% and responsiveness by 30%. 
Architected backend microservices, CI/CD workflows with Docker & Firebase, and optimized scalability through cloud-native architectures. 
Led end-to-end delivery of an Ad Booking App, uplifting engagement by 40% via improved workflows.`}
                ImgPath={_4Cplus}
                isBlog={false}
                title={`4C Plus`}
                time={'Sep 2023 – Apr 2025'}
                role={'App Developer'}
                companyLocation={'Ghaziabad'}
                workMode={'Full-time'}
                technologyUsed={'Java, React Native, Firebase, Docker, GitHub Actions, Cloud'}
                milestones={'Increased engagement by 55%, CI/CD automation, Cross-platform optimization'}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Experinces;
