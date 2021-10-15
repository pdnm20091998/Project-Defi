import styled from 'styled-components/macro';
import Navbar from '../../../Home/NavBar/index';
import Footer from '../../../../components/Footer/index';
import { Col, Container, Row } from 'react-bootstrap';
import SumPawnShop from './SumPawnShop/SumPawnShop';
import FilterZone from './FilterZone';
import PawnList from './PawnList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useBorrowContext } from 'app/components/common/context/borrowCryptoContext';
import { useDispatch } from 'react-redux';
import {
  resultBorrowAction,
  resultPersonalBorrowAction,
} from 'app/actions/borrow/borrowAction';

const Div = styled.div`
  background-color: #171a23;
`;
const url =
  'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/crypto-asset';
export default function ResultBorrowCrypto() {
  const [dataasset, setDataAsset] = useState<Array<object>>([]);
  const dataAsset: Array<object> = [];
  const handleClose = () => {};
  const dispatch = useDispatch();

  // get Asset
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    page,
    cusSort,
    interestRanges,
    loanToValueRanges,
    loanTypes,
    collateralSymbols,
    loanSymbols,
    durationTypes,
    collateralAmount,
    durationQty,
    loanAmount,
    name,
  } = useBorrowContext();
  const data = {
    page,
    cusSort,
    interestRanges,
    loanToValueRanges,
    loanTypes,
    collateralSymbols,
    loanSymbols,
    durationTypes,
    collateralAmount,
    durationQty,
    loanAmount,
    name,
  };

  useEffect(() => {
    dispatch(resultBorrowAction(data));
    dispatch(resultPersonalBorrowAction(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const imgAsset = [...dataasset];
  return (
    <>
      <Navbar />
      <Div>
        <Container>
          <Row>
            <Col md={9}>
              <SumPawnShop />
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
