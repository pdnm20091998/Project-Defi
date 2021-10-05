/**
 *
 * Banner
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import img from '../assets/Frame.svg';
interface Props {}
const Div = styled.div``;
const Title = styled.div``;
const H1 = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 73px;
  text-transform: capitalize;
  color: ${props => props.color};
`;
const P = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
`;

export function BannerLeft(props: Props) {
  return (
    <Div className="d-flex flex-column banner">
      <Title className="caption-zone">
        <div className="caption-zone__title">
          <H1>Lend/ Borrow </H1>
          <H1> with </H1>
          <H1 color="rgb(219, 168, 61)">DeFi For You.</H1>
        </div>
        <P>Get Crypto Loans Instantly, Regardless of Your Credit Rating</P>
      </Title>
      <div className="image-zone d-flex justify-content-center align-items-center">
        <img className="image-zone__img" src={img} alt="" />
      </div>
    </Div>
  );
}
