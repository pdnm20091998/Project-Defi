import styled from 'styled-components/macro';
export const DivCarousel = styled.div`
  padding: 60px 15px 80px 15px;
  .slide__item {
    margin: 0 10px;
  }
  .slide__text {
    color: white;
    .slide__title {
      margin: 12px 0 8px 0;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-transform: capitalize;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .slide__param {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
  }
  img {
    max-width: 100%;
  }
  span {
    font-weight: 500;
    font-size: 16px;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 10px 12px 0;
    svg {
      margin-left: 6px;
    }
  }

  .slick-slider {
    .slick-arrow {
      top: 35% !important;
    }
    .slick-next {
      right: -58px;
    }
    .slick-prev {
      left: -109px;
    }
    .slick-next:before,
    .slick-prev:before {
      font-size: 74px !important;
      color: #dba83d;
    }

    @media screen and (max-width: 1024px) {
      .slick-next {
        right: -20px;
      }
      .slick-prev {
        left: -40px;
      }
      .slick-next:before,
      .slick-prev:before {
        font-size: 40px !important;
      }
    }

    @media screen and (max-width: 540px) {
      .slick-next {
        right: -15px !important;
      }
      .slick-prev {
        left: -26px !important;
      }
      .slick-next:before,
      .slick-prev:before {
        font-size: 30px !important;
      }
    }
  }
`;

export const TitleExplore = styled.h3`
  margin-bottom: 64px;
  color: #dba83d;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  @media screen and (max-width: 540px) {
    text-align: center;
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

export const SeeAll = styled.span`
  color: #ffffff;
  transition: 0.3s ease-in-out all;
  &:hover {
    color: #dba83d;
    transition: 0.3s ease-in-out all;
  }
  @media screen and (max-width: 540px) {
    display: none !important;
  }
`;
