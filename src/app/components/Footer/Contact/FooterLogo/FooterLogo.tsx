import styled from 'styled-components/macro';
import Logo from '../../../Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Stack } from 'react-bootstrap';
import globe from '../assests/globe.svg';
import mail from '../assests/mail.svg';
export default function FooterLogo() {
  return (
    <Stack gap={3}>
      <Logo width={'203px'} />
      <Div>
        <img src={globe} width="24px" alt="globe" />
        <P className="ms-2 me-1">English (United States)</P>
        <FontAwesomeIcon icon={faArrowRight} color="#9FA6B2" />
      </Div>
      <Div>
        <img src={mail} width="24px" alt="mail" />
        <P className="ms-2">ask@defiforyou.uk</P>
      </Div>
      <Div>
        <img src={mail} width="24px" alt="mail" />
        <P className="ms-2">support@defiforyou.uk</P>
      </Div>
    </Stack>
  );
}
const P = styled.p`
  color: #9fa6b2;
  font-size: 14px;
  font-weight: 500;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
`;
