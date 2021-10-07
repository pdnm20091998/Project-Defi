import { Stack } from 'react-bootstrap';
import styled from 'styled-components/macro';
import flagvn from '../assests/flagvn.svg';
import flaguk from '../assests/flaguk.svg';
export default function HanoiOffice() {
  return (
    <Stack gap={3}>
      <p>DeFi For You - Hanoi Office</p>
      <Stack gap={2}>
        <div>
          <p>+84 9643 66605</p>
          <img src={flagvn} alt="flagvn" />
        </div>
        <div>
          <p>+84 9644 41735</p>
          <img src={flaguk} alt="flaguk" />
        </div>
      </Stack>
    </Stack>
  );
}
