import styled from 'styled-components';
const Des = styled.p<{
  fontWeight?: string;
}>`
  color: #9fa6b2;
  font-size: 14px;
  font-weight: ${props => props.fontWeight};
`;
export default Des;
