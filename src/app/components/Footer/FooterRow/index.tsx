import { Col, Container, Row } from 'react-bootstrap';
import CopyRight from './CopyRight/CopyRight';
import Policy from './Policy/Policy';
import styled from 'styled-components/macro';
export default function FooterRow() {
  return (
    <MyContainer>
      <Row>
        <Col md={6} sm={12}>
          <CopyRight />
        </Col>
        <Col md={6} sm={12}>
          <Policy />
        </Col>
      </Row>
    </MyContainer>
  );
}
const MyContainer = styled(Container)`
  @media (max-width: 330px) {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
`;
