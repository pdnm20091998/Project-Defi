import { Stack } from 'react-bootstrap';
import styled from 'styled-components/macro';
import Title from '../components/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
  return (
    <Stack className="mt-5  pt-md-5" gap={3}>
      <Title className="mt-md-1">Quick navigation</Title>
      <Stack gap={2}>
        <Div>
          <P className="me-1">Whitepaper </P>
          <FontAwesomeIcon icon={faArrowRight} size="xs" color="#9FA6B2" />
        </Div>
        <Div>
          <P className="me-1">Get the mobile app </P>
          <FontAwesomeIcon icon={faArrowRight} size="xs" color="#9FA6B2" />
        </Div>
        <Div>
          <P className="me-1">
            Buy <b>DFY</b> on Exchanges{' '}
          </P>
          <FontAwesomeIcon icon={faArrowRight} size="xs" color="#9FA6B2" />
        </Div>
      </Stack>
    </Stack>
  );
}
const Div = styled.div`
  display: flex;
  align-items: center;
`;
const P = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #9fa6b2;
`;
