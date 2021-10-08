import styled from 'styled-components/macro';
import { BannerLeft } from './banner/index';
import { PawnTabs } from './Tabs/index';
import { Container, Col, Row } from 'react-bootstrap';
interface Props {}

const Main = styled.div`
  padding: 83px 0px 66px 0px;
`;

function Banner(props: Props) {
  return (
    <Main>
      <Container fluid="xxl">
        <Row>
          <Col lg="5">
            <BannerLeft />
          </Col>
          <Col lg={{ span: 6, offset: 1 }}>
            <PawnTabs />
          </Col>
        </Row>
      </Container>
    </Main>
  );
}

export default Banner;
