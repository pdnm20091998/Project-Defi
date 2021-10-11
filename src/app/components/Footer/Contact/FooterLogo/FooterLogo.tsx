import styled from 'styled-components/macro';
import Logo from '../../../Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Stack } from 'react-bootstrap';
import globe from '../assests/globe.svg';
import mail from '../assests/mail.svg';
import { Link } from 'react-router-dom';
export default function FooterLogo() {
  return (
    <Stack gap={3}>
      <Link to="/">
        <Logo width={'203px'} />
      </Link>
      <Div>
        <img src={globe} width="24px" alt="globe" />
        <P className="ms-2 me-1">English (United States)</P>
        <FontAwesomeIcon icon={faArrowRight} color="#9FA6B2" />
      </Div>
      <Div>
        <img src={mail} width="24px" alt="mail" />
        <A href="mailto:ask@defiforyou.uk" className="ms-2">
          ask@defiforyou.uk
        </A>
      </Div>
      <Div>
        <img src={mail} width="24px" alt="mail" />
        <A href="mailto:support@defiforyou.uk" className="ms-2">
          support@defiforyou.uk
        </A>
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
const A = styled.a`
  text-decoration: none;
  color: #9fa6b2;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    color: #9fa6b2;
  }
`;
