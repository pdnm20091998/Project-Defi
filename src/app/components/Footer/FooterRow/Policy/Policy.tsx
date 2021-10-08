import styled from 'styled-components/macro';
import divider from './assests/divider.svg';
export default function Policy() {
  return (
    <div className="d-flex flex-row justify-content-md-end justify-content-center">
      <P>Terms of Service </P>
      <img src={divider} alt="divider" className="mx-3" />
      <P>Privacy Policy</P>
    </div>
  );
}
const P = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #74767b;
`;
