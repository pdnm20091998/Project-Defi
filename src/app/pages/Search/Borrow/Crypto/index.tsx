import styled from 'styled-components/macro';
import Navbar from '../../../Home/NavBar/index';
import Footer from '../../../../components/Footer/index';
import { Col, Container, Row } from 'react-bootstrap';
import SumPawnShop from './SumPawnShop/SumPawnShop';
import FilterZone from './FilterZone';
import InfoTitle from './InfoTitle';
import PawnList from './PawnList';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Div = styled.div`
  background-color: #171a23;
`;
const url =
  'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/crypto-asset';
export default function ResultBorrowCrypto() {
  const [dataasset, setDataAsset] = useState<Array<object>>([]);
  const dataAsset: Array<object> = [];
  const handleClose = () => {};
  useEffect(() => {
    const resultAsset = () => {
      const data = axios
        .get(url)
        .then(asset => asset.data)
        .catch(e => e);
      return data;
    };
    async function asyncCall() {
      const data = await resultAsset();
      if (data.data) {
        data.data.forEach(data => {
          dataAsset.push(data);
        });
      }
      return dataAsset;
    }
    asyncCall().then(e => {
      setDataAsset(e);
    });
  }, []);
  const imgAsset = [...dataasset];
  return (
    <>
      <Navbar />
      <Div>
        <Container>
          <Row>
            <Col md={9}>
              <SumPawnShop />
              <InfoTitle />
              <PawnList />
            </Col>
            <Col className="mt-3" md={3}>
              <FilterZone handleClose={handleClose} dataAsset={imgAsset} />
            </Col>
          </Row>
        </Container>
      </Div>
      <Footer />
    </>
  );
}
