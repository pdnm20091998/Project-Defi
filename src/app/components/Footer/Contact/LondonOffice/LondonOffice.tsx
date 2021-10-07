import { Stack } from 'react-bootstrap';
import styled from 'styled-components/macro';
import flaguk from '../assests/flaguk.svg';
import Title from '../components/Title';
import PhoneNumber from '../components/PhoneNumber';
import Des from '../components/Des';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function LondonOffice() {
  return (
    <Stack className="mt-5 mt-md-0 mt-lg-1 mt-xl-3 pt-lg-3 pt-md-3" gap={3}>
      <Title>DeFi For You - London Office</Title>
      <Stack gap={2}>
        <Div>
          <PhoneNumber>+84 9643 66605</PhoneNumber>
          <img className="ms-3 me-3" src={flaguk} alt="flagvn" />
          <PhoneNumber>Sean Mason - CFO</PhoneNumber>
        </Div>

        <Des fontWeight="500">
          Office 32 19-21 Crawford Street, London, United Kingdom, W1H 1PJ
        </Des>
        <Des fontWeight="500">Registration Number: 13126050</Des>
        <Div>
          <PhoneNumber>View on Companies House </PhoneNumber>
          <FontAwesomeIcon
            className="ms-2"
            icon={faArrowRight}
            color="#DBA83D"
          />
        </Div>
      </Stack>
    </Stack>
  );
}
const Div = styled.div`
  display: flex;
  align-items: center;
`;
