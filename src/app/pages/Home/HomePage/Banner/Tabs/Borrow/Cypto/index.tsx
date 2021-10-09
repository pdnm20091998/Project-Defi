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
import { Link } from 'react-router-dom';
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
    &[title]:after {
      position: absolute;
      content: attr(title);
      background-color: #c9cacd83;
      border: none;
      padding: 5px;
      color: #ffffff;
      display: block;
      border-radius: 5px;
      padding: 5px 20px 5px 15px;
      transform: scale(0);
      -webkit-transition: all 1s;
      transition: all 1s;
    }
    &[title]:hover:after {
      transform: scale(1);
      -webkit-transition: all 1s;
      transition: all 1s;
    }
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
              button={true}
            ></Form>
            <Container fluid="lg">
              <P>Or</P>
              <Button className="mb-3">Choose Existing collateral</Button>
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
              <P
                className="mt"
                title="To get a loan quickly, you should set the desired loan amount between 50-70% of the collateral value"
              >
                Recommended amount <img src={img} alt="" />
              </P>
              <div>
                <Link to="/resultBorrowCrypto">
                  <DefiButton
                    className="search my-sm-5 mb-xs-5"
                    width="100%"
                    height="54px"
                  >
                    <img src={imgSearch} alt="" /> Search
                  </DefiButton>
                </Link>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </Main>
  );
}
