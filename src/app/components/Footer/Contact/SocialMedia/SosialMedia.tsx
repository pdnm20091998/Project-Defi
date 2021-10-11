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
        <a href="https://github.com/defi-vn/">
          <img src={github} alt="github" />
        </a>
        <a href="https://t.me/DeFiForYou_English">
          <img src={telegram} alt="telegram" />
        </a>
        <a href="https://www.facebook.com/DeFiForYouDFY">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.youtube.com/channel/UCGaSCU17Zo_2CzJNaBeUHaA/featured">
          <img src={youtube} alt="youtube" />
        </a>
        <a href="https://www.linkedin.com/company/defiforyou">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://twitter.com/Defiforyou">
          <img src={twitter} alt="twitter" />
        </a>
      </Div>
    </Stack>
  );
}
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
