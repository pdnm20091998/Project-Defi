import React from 'react';
import { Col, Row } from 'react-bootstrap';
import FooterLogo from './FooterLogo/FooterLogo';
import HanoiOffice from './HanoiOffice/HanoiOffice';
export default function Contact() {
  return (
    <div className="wrapper" style={{ height: '200px' }}>
      <Row>
        <Col md={4} xs={12}>
          <FooterLogo />
        </Col>
        <Col md={8} xs={12}>
          <Row>
            <Col md={6} xs={12}>
              <HanoiOffice />
              <div>office london</div>
            </Col>
            <Col md={6} xs={{ span: 12, order: 'last' }}>
              <div>find on</div>
              <div>navigation</div>
            </Col>
            <Col md={{ span: 12, order: 'last' }} xs={12}>
              about defi for u
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
