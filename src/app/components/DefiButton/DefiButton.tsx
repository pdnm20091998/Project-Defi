import styled from 'styled-components/macro';
const DefiButton = styled.button<{
  padding?: string;
  margin?: string;
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
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  :hover {
    background: linear-gradient(
      221deg,
      rgba(189, 135, 39, 1) 22%,
      rgba(255, 213, 116, 1) 47%,
      rgba(254, 202, 80, 1) 57%,
      rgba(189, 135, 39, 1) 79%
    );
  }
`;
export default DefiButton;
