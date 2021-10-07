import { Container } from 'react-bootstrap';
import Contact from './Contact';
import FooterRow from './FooterRow';
import styled from 'styled-components/macro';

export default function Footer() {
  return (
    <Div>
      <Container>
        <Contact />
        <FooterRow />
      </Container>
    </Div>
  );
}
const Div = styled.div`
  background: #171a23;
`;
