import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg1 from 'assets/img/generic/bg-1.jpg';
import dashboardDark from 'assets/img/generic/dashboard-alt-dark.png';
import dashboard from 'assets/img/generic/dashboard-alt.png';
import Section from 'components/common/Section';
import AppContext from 'context/Context';
import React, { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const {
    config: { isDark, isRTL }
  } = useContext(AppContext);

  return (
    <Section
      className="py-0 overflow-hidden light"
      image={bg1}
      position="center bottom"
      overlay
    >
      <Row className="justify-content-center align-items-center pt-8 pt-lg-10 pb-lg-9 pb-xl-0">
        <Col
          md={11}
          lg={8}
          xl={4}
          className="pb-7 pb-xl-9 text-center text-xl-start"
        >
          {/* <Button
            as={Link}
            variant="outline-danger"
            className="mb-4 fs--1 border-2 rounded-pill"
            to="#!"
          >
            <span className="me-2" role="img" aria-label="Gift">
              🎁
            </span>
            Become a Member
          </Button> */}
          <h1 className="text-white fw-light">
            Bring{' '} <br />
            <span className="fw-bold">
              <Typewriter
                words={["Knowledge","Vision","Professionalism","perfection"]}
                loop={false}
                cursor={!isRTL ? true : false}
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <br />
            Join us now
          </h1>
          <p className="lead text-white opacity-75">
          Join us now to avail free and discounted education & 
              development. Get Career development guarantee for all the learners of any age group
          </p>
          <Button
            as={Link}
            variant="outline-light"
            size="lg"
            className="border-2 rounded-pill mt-4 fs-0 py-2"
            to="#!"
          >
            <Link to={"/authentication/simple/register"} className="btn-register-now">Register Now</Link>
            <FontAwesomeIcon icon="play" transform="shrink-6 down-1 right-5" />
          </Button>


          
        </Col>
        <Col
          xl={{ span: 7, offset: 1 }}
          className="align-self-end mt-4 mt-xl-0"
        >
        </Col>
      </Row>
    </Section>
  );
};

export default Hero;
