import React from 'react';
import Frame from './assets/img/Frame.png';
import Title from './Title/Title';
import Login from './Login/Login';
import Signup from './Signup/Sigup';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import styled from 'styled-components/macro';
import Navbar from './Navbar/Navbar';

const Img = styled.img`
  max-width: 100%;
  height: auto;
  @media (min-width: 992px) {
    margin-left: 52px;
  }
`;

export default function AuthForm() {
  return (
    <>
      <Navbar />
      <Container className="px-0">
        <Title />
        <Row>
          <Col
            className="form"
            xs={{ span: 12, order: 2 }}
            lg={{ span: 6, order: 1 }}
          >
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3 mt-5"
            >
              <Tab eventKey="home" title="Home">
                <Signup />
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <Login />
              </Tab>
            </Tabs>
          </Col>
          <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
            <Img src={Frame} alt="Frame" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
