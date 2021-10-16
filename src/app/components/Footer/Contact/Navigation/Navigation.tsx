import { Stack } from 'react-bootstrap';
import styled from 'styled-components/macro';
import Title from '../components/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
  return (
    <Stack className="mt-5  pt-md-5" gap={3}>
      <Title className="mt-md-0 mt-lg-1 pt-lg-1 mt-xl-0 pt-xl-0">
        Quick navigation
      </Title>
      <Stack gap={2}>
        <A href="#">
          <P className="me-1">Whitepaper </P>
          <FontAwesomeIcon icon={faArrowRight} size="xs" color="#9FA6B2" />
        </A>
        <A href="#">
          <P className="me-1">Get the mobile app </P>
          <FontAwesomeIcon icon={faArrowRight} size="xs" color="#9FA6B2" />
        </A>
        <A href="#">
          <P className="me-1 me-md-0 me-lg-1">
            Buy <b>DFY</b> on Exchanges{' '}
          </P>
          <FontAwesomeIcon icon={faArrowRight} size="xs" color="#9FA6B2" />
        </A>
      </Stack>
    </Stack>
  );
}

const A = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
const P = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #9fa6b2;
`;
