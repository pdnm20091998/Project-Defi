/**
 *
 * Nft
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Container, Row, Col } from 'react-bootstrap';
import img from '../../../assets/Frame1.svg';
import DefiButton from '../../../../../../../components/DefiButton/DefiButton';
import { Link } from 'react-router-dom';
interface Props {}
const Div = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;
const P = styled.p`
  .link {
    color: #dba83d;
  }
`;
export function Nft(props: Props) {
  return (
    <Div>
      <Container className="d-flex flex-column ">
        <Row>
          <Col sm="12" className="d-flex justify-content-center my-5 pt-2 ">
            <img src={img} alt="" />
          </Col>
          <Col
            lg={{ span: 4, offset: 4 }}
            md={{ span: 12 }}
            xs={{ span: 12 }}
            className="d-flex justify-content-center mb-4"
          >
            <DefiButton width="100%" height="48px">
              Find NFT lenders
            </DefiButton>
          </Col>
          <Col sm="12" className="d-flex justify-content-center mt-2 mb-5">
            <P>
              Don’t have hard NFT?
              <Link className="link" to="/?">
                {' '}
                Create new
              </Link>
            </P>
          </Col>
        </Row>
      </Container>
    </Div>
  );
}
