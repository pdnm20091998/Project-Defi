/**
 *
 * Cypto
 *
 */
import * as React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components/macro';
import 'react-responsive-combo-box/dist/index.css';
import img from '../../../assets/Vector.svg';
import imgSearch from '../../../assets/search.svg';
import DefiButton from '../../../../../../../components/DefiButton/DefiButton';
import { Container, Row, Col } from 'react-bootstrap';
import { Form } from '../../../Form/index';
interface Props {}

const P = styled.p`
  margin-bottom: 5px;
  color: #fff;
  img {
    width: 10px;
    height: 10px;
  }
`;
const Main = styled.div`
  .btn-primary {
    background: #171a23;
    border: 1px solid #dba83d;
    box-sizing: border-box;
    border-radius: 25px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-transform: capitalize;
    color: #dba83d;
  }
  .mt {
    margin-top: 6px;
  }
  .search {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
`;
export function Crypto(props: Props) {
  return (
    <Main>
      <div>
        <Row>
          <Col>
            <Form
              name="Collateral"
              placeholder="Enter amount"
              filter="Currency"
              arr="data"
            ></Form>
            <Container fluid="lg">
              <P>Or</P>
              <Button>Choose Existing collateral</Button>
            </Container>
            <Form
              name="Duration"
              placeholder="Duration"
              filter="Duration"
              arr="week"
            ></Form>
            <Form
              name="Loan amount"
              placeholder="Enter amount"
              arr="data2"
              filter="Loan"
            ></Form>
            <Container fluid="lg">
              <P className="mt">
                Recommended amount <img src={img} alt="" />
              </P>
              <DefiButton
                className="search"
                width="100%"
                height="54px"
                margin="60px 0px 0px"
              >
                <img src={imgSearch} alt="" /> Search
              </DefiButton>
            </Container>
          </Col>
        </Row>
      </div>
    </Main>
  );
}
