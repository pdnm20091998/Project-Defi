import React from 'react';
import { Col, Row } from 'react-bootstrap';
import FooterLogo from './FooterLogo/FooterLogo';
import HanoiOffice from './HanoiOffice/HanoiOffice';
import LondonOffice from './LondonOffice/LondonOffice';
import About from './About/About';
import SocialMedia from './SocialMedia/SosialMedia';
import Navigation from './Navigation/Navigation';
export default function Contact() {
  return (
    <div className="mb-4">
      <Row>
        <Col md={4} xs={12}>
          <FooterLogo />
        </Col>
        <Col md={8} xs={12}>
          <Row>
            <Col md={7} xs={12}>
              <HanoiOffice />
              <LondonOffice />
            </Col>
            <Col
              md={5}
              xs={{ span: 8, order: 'last' }}
              sm={{ span: 6, order: 'last' }}
            >
              <SocialMedia />

              <Navigation />
            </Col>
            <Col md={{ span: 12, order: 'last' }} xs={12}>
              <About />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
