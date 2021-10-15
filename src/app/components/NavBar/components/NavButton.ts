import styled from 'styled-components/macro';
const NavButton = styled.button<{
  width?: string;
}>`
  width: ${props => props.width};
  height: 36px;
  border: 1px solid #dba83d;
  border-radius: 25px;
  color: #dba83d;
  font-size: 14px;
  font-weight: 500;
  background: none;
  &:hover {
    opacity: 0.8;
  }
`;

export default NavButton;
