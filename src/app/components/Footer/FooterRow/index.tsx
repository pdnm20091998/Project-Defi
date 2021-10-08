import { Col, Container, Row } from 'react-bootstrap';
import CopyRight from './CopyRight/CopyRight';
import Policy from './Policy/Policy';

export default function FooterRow() {
  return (
    <Container>
      <Row>
        <Col md={6} sm={12}>
          <CopyRight />
        </Col>
        <Col md={6} sm={12}>
          <Policy />
        </Col>
      </Row>
    </Container>
  );
}
