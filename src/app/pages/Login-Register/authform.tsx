import React from 'react';
import Frame from './assets/img/Frame.png';
import Navbar from './Navbar/Navbar';
import Title from './Title/Title';
import Login from './Login/Login';
import Signup from './Signup/Sigup';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import styled from 'styled-components/macro';

const Img = styled.img`
  width: 100%;
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
            md={{ span: 5, order: 1 }}
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
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2, offset: 1 }}
          >
            <Img src={Frame} alt="Frame" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
