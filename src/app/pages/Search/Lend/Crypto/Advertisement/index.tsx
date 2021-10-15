/**
 *
 * Advertisement
 *
 */
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components/macro';
import ImgFrame from '../assets/Frame.svg';
interface Props {}

const Wrapper = styled.div`
  background: #475674 !important;
  border-radius: 10px;
  min-width: 100%;
  margin: 20px 0px;
  .content {
    h2 {
      margin: 9px 0px 8px 24px;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #f8b017;
    }

    p {
      margin: 9px 0px 8px 24px;
      font-size: 16px;
      line-height: 20px;
    }

    &--defi {
      color: #f8b017;
    }
  }
`;

export function Advertisement(props: Props) {
  return (
    <Wrapper>
      <Container>
        <Row className="d-flex justify-content-between">
          <Col xl={6} sm={6} md={6} xs={12} className="content">
            <h2>Become your own bank</h2>
            <p>
              Sign up for pawnshop to get great benefits from{' '}
              <span className="content--defi">DeFi For You.</span>
            </p>
          </Col>
          <Col
            xl={{ span: 3, offset: 3 }}
            md={{ span: 4, offset: 2 }}
            sm={{ span: 5, offset: 1 }}
            xs={12}
          >
            <img src={ImgFrame} alt="Become your own bank" />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
