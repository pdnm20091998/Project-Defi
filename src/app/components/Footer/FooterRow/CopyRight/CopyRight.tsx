import styled from 'styled-components/macro';
export default function CopyRight() {
  return (
    <P className="text-center text-md-start">
      © 2021 DeFi For You. All rights reserved.
    </P>
  );
}
const P = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #74767b;
`;
