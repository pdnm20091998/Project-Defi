import { Stack } from 'react-bootstrap';
import styled from 'styled-components/macro';
import Title from '../components/Title';

import facebook from './assests/facebook.svg';
import github from './assests/github.svg';
import linkedin from './assests/linkedin.svg';
import telegram from './assests/telegram.svg';
import twitter from './assests/twitter.svg';
import youtube from './assests/youtube.svg';

export default function SocialMedia() {
  return (
    <Stack className="mt-5 mt-md-0" gap={3}>
      <Title>Find us on</Title>

      <Div>
        <img src={github} alt="github" />
        <img src={telegram} alt="telegram" />
        <img src={facebook} alt="facebook" />
        <img src={youtube} alt="youtube" />
        <img src={linkedin} alt="linkedin" />
        <img src={twitter} alt="twitter" />
      </Div>
    </Stack>
  );
}
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
