import styled from 'styled-components/macro';
import Navbar from '../../../Home/NavBar/index';
import Footer from '../../../../components/Footer/index';
import { Col, Container, Row } from 'react-bootstrap';
import SumPawnShop from './SumPawnShop/SumPawnShop';
import FilterZone from './FilterZone';
import InfoTitle from './InfoTitle';
const H1 = styled.h1`
  color: #fff;
`;
export default function ResultBorrowCrypto() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col md={9}>
            <SumPawnShop />
            <InfoTitle />
          </Col>
          <Col md={3}>
            <FilterZone />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
