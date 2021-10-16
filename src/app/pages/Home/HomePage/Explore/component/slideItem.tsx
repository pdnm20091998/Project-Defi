import React from 'react';
import styled from 'styled-components/macro';
import rate_star from '../asset/rate_star.svg';

// additional shop and star
const SuperShop = styled.div`
  top: 12px;
  left: 12px;
  color: #ffffff;
  font-size: 14px;
  position: absolute;
  background: #ff4848;
  border-radius: 16px;
  padding: 5px 12px;
  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;

const Rate = styled.div`
  display: flex;
  top: 12px;
  right: 12px;
  color: #ffffff;
  font-size: 14px;
  position: absolute;
  background: #f8b017;
  border-radius: 16px;
  padding: 5px 8px;
  img {
    margin-right: 7px;
  }
  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;

const SlideItem = props => {
  return (
    <div className="slide__item" style={{ position: 'relative' }}>
      <div className="shop__rating">
        <SuperShop>Super shop</SuperShop>
        <Rate>
          <img src={rate_star} alt="No_picture" />
          1000
        </Rate>
      </div>
      <img src={props.picture} alt="No_picture" />
      <div className="slide__text">
        <h3 className="slide__title">{props.title}</h3>
        <p className="slide__param">{props.text}</p>
      </div>
    </div>
  );
};

export default SlideItem;
