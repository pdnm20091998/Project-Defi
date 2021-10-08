import { Container } from 'react-bootstrap';
import Contact from './Contact';
import FooterRow from './FooterRow';
import styled from 'styled-components/macro';
import decorator from './assests/decorator.svg';
import styles from './style/Footer.module.css';
export default function Footer() {
  return (
    <Div className={`pt-md-5 ${styles.bg}`}>
      <Container className="mt-5 px-xxl-5 px-xl-3 pt-5">
        <Contact />
      </Container>
      <MyContainer fluid>
        <FooterRow />
      </MyContainer>
    </Div>
  );
}
const Div = styled.div`
  background: #171a23;
  // background-image: url(${decorator});
  // background-repeat: no-repeat;
  // background-position-y: 12%;
`;
const MyContainer = styled(Container)`
  background: #13171f;
  height: 60px;
  display: flex;
  align-items: center;
`;
