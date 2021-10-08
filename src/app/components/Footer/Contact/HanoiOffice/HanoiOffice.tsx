import { Stack } from 'react-bootstrap';
import styled from 'styled-components/macro';
import flagvn from '../assests/flagvn.svg';
import flaguk from '../assests/flaguk.svg';
import Title from '../components/Title';
import PhoneNumber from '../components/PhoneNumber';
import Des from '../components/Des';
export default function HanoiOffice() {
  return (
    <Stack className="mt-5 mt-md-0" gap={3}>
      <Title>DeFi For You - Hanoi Office</Title>
      <Stack gap={2}>
        <Div>
          <PhoneNumber>+84 9643 66605</PhoneNumber>
          <img className="ms-3" src={flagvn} alt="flagvn" />
        </Div>
        <Div>
          <PhoneNumber>+84 9644 41735</PhoneNumber>
          <img className="ms-3" src={flaguk} alt="flaguk" />
        </Div>
        <Des fontWeight="500">
          BT NQ 25-15 Vinhomes Riverside, Long Bien, Hanoi, Vietnam
        </Des>
      </Stack>
    </Stack>
  );
}
const Div = styled.div`
  display: flex;
  align-items: center;
`;
