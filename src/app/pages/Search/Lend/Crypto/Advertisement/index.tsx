/**
 *
 * Advertisement
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import ImgFrame from '../assets/Frame.svg';
interface Props {}
const Wrapper = styled.tr`
  background: #475674;
  border-radius: 10px;
  .content {
    h2 {
      margin: 9px 0px 8px 24px;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #f8b017;
    }

    p {
      margin: 9px 0px 8px 24px;
      font-size: 16px;
      line-height: 20px;
    }

    &--defi {
      color: #f8b017;
    }
  }
`;

export function Advertisement(props: Props) {
  return (
    <Wrapper>
      <td colSpan={5}>
        <div className="content">
          <h2>Become your own bank</h2>
          <p>
            Sign up for pawnshop to get great benefits from{' '}
            <span className="content--defi">DeFi For You.</span>
          </p>
        </div>
      </td>
      <td colSpan={1}>
        <div>
          <img src={ImgFrame} alt="Become your own bank" />
        </div>
      </td>
    </Wrapper>
  );
}
