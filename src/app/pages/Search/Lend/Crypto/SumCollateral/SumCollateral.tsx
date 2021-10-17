import styled from 'styled-components/macro';
interface Props {
  sum?: number;
}
const P = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #d1d1d3;
  @media (max-width: 576px) {
    margin: 32px 0 12px 0;
  }
`;
export function SumCollateral(props: Props) {
  return <P>{props.sum} collateral offers match your search</P>;
}
