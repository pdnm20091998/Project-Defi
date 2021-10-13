import styled from 'styled-components';
import ImgStart from '../assets/Star2.svg';
import ImgPrice from '../assets/price.svg';
import ImgDiamond from '../assets/diamond1.svg';
import ImgArtwork from '../assets/art-palette1.svg';

export const Wrapper = styled.div`
  background-color: #171a23;
  padding-top: 30px;
  padding-bottom: 60px;
  .wrapper {
    width: 100%;

    position: relative;

    .icon-filter {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 0px;
      cursor: pointer;
      display: none;
      @media (max-width: 767px) {
        right: 16px;
      }
    }
    @media (max-width: 992px) {
      .icon-filter {
        display: block;
        z-index: 1;
      }
    }
  }
`;

export const Result = styled.div`
  width: 100%;
  color: #ffffff;
`;
export const SingleWrapper = styled.div`
  background: #282c37;
  border-radius: 20px;
  margin-top: 20px;
  .img {
    margin: 20px;
    padding: 0;
    max-width: 215px;
  }
  .detailResult {
    margin: 20px 0;
  }
  .loan {
    margin: 20px 0;
  }
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;

    height: 30px;
    line-height: 30px;
  }

  .amount-star {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    line-height: 20px;

    padding-left: 22px;
    margin: 8px 0px 14px;

    background-image: url(${ImgStart});
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: 0px 0px;
  }

  .detail-result {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    p {
      margin: 0px;
      margin-bottom: 12px;
      line-height: 20px;
    }

    .detail-name {
      display: inline-block;
      width: 135px;
      color: #a2a3a7;
    }

    .detail-content {
      &__price {
        padding-left: 22px;

        background-image: url(${ImgPrice});
        background-repeat: no-repeat;
        background-size: 16px;
        background-position: 0px 0px;
      }

      &__borrower {
        text-decoration-line: underline;
        color: #2596ff;
      }
    }
  }
`;
export const LoanWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 1199px) {
    border-top: 1px solid #45484f;
    padding-top: 20px;
    align-items: flex-start;
  }
  @media (min-width: 1200px) {
    border-left: 1px solid #45484f;
  }
  .detail {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    @media (max-width: 1199px) {
      align-items: flex-start;
    }
  }
  p {
    margin: 0;

    font-weight: 500;
    font-size: 16px;

    line-height: 20px;

    /* Color/ Neutral/ Grey 3 */
    color: #a2a3a7;
  }

  .price {
    padding: 6px 0px 16px;

    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    text-align: center;

    /* Color/ Semantic/ Green */
    color: #3fd762;
  }

  .armorial {
    padding: 4px 8px 4px 28px;

    /* Gold */
    border: 1px solid #dba83d;
    border-radius: 17px;

    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    /* Gold */

    color: #dba83d;
  }

  .armorial__diamond {
    background-image: url(${ImgDiamond});
    background-repeat: no-repeat;
    background-size: 12px;
    background-position: 9px 5px;
  }

  .armorial__artwork {
    background-image: url(${ImgArtwork});
    background-repeat: no-repeat;
    background-size: 12px;
    background-position: 9px 5px;
  }
  .sendBtn {
    margin-top: 70px;
  }
`;
