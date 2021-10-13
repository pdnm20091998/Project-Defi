import styled from 'styled-components';
const Type = styled.div<{
  backgroundColor?: string;
  text?: string;
  border?: string;
  color?: string;
}>`
  width: 100px;
  height: 25px;
  border-radius: 13px;
  background-color: ${props => props.backgroundColor};
  border: ${props => props.border};
  font-size: 14px;
  text-align: center;
  color: ${props => props.color};
`;
export default Type;
