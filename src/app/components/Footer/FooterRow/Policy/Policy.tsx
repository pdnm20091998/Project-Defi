import styled from 'styled-components/macro';
import divider from './assests/divider.svg';
export default function Policy() {
  return (
    <div className="d-flex flex-row justify-content-md-end justify-content-center">
      <A href="https://defi-for-you.gitbook.io/faq/p2p-lending/terms-of-service">
        Terms of Service{' '}
      </A>
      <img src={divider} alt="divider" className="mx-3" />
      <A href="https://defi-for-you.gitbook.io/faq/p2p-lending/privacy-policy">
        Privacy Policy
      </A>
    </div>
  );
}
const A = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: #74767b;
  text-decoration: none;
  &:hover {
    color: #74767b;
  }
`;
