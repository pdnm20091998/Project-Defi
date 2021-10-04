import styled from 'styled-components/macro';
const DefiButton = styled.button<{
  padding?: string;
  width?: string;
  height?: string;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  background: linear-gradient(
    221.15deg,
    #bd8727 0%,
    #ffd574 49.02%,
    #feca50 62.02%,
    #bd8727 101.47%
  );
  border-radius: 1000px;
  border: none;
  cursor: pointer;
  padding: 0px ${props => props.padding};
`;
export default DefiButton;
