import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-img.jpg";
import Particle from "../Particle";
import Type from "./Type";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t('Greetings')} <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                {t('I am ')}
                <strong className="main-name">Sakthi</strong>
                ,
              </h1>

              <div style={{ paddingTop: 0, paddingLeft:50 ,textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid home-logo" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;