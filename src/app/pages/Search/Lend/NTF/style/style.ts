import styled from 'styled-components';
import ImgStart from '../assets/Star2.svg';
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
      }
    }
  }
`;

export const Result = styled.div`
  width: 100%;
  color: #ffffff;
  .pagi {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    margin-bottom: 4px;
  }
  .total {
    @media (max-width: 400px) {
      margin-top: 62px;
    }
  }
`;
export const SingleWrapper = styled.div`
  background: #282c37;
  border-radius: 20px;
  margin-top: 20px;
  position: relative;
  .nft-type--tag {
    position: absolute;
    top: 23px;
    left: -8px;
    z-index: 2;
    background: linear-gradient(
      270deg,
      #dba83d -1.04%,
      #ebb23a 28.12%,
      #e9ad30 47.56%,
      #edb53f 62.42%,
      #f9c65b 80.61%,
      #f4d289 105.71%
    );
    clip-path: polygon(
      0% 15%,
      0 0,
      15% 0%,
      75% 0,
      80% 5%,
      90% 17%,
      95% 35%,
      97% 50%,
      100% 0,
      97% 50%,
      95% 65%,
      90% 83%,
      80% 95%,
      75% 100%,
      15% 100%,
      0 100%,
      0% 85%
    );
    .hard {
      padding: 11px 12px 9px 8px;
    }
  }
  .small_tag {
    position: absolute;
    left: -8px;
    top: 20px;
    z-index: 1;
  }
  .hidden {
    display: none;
  }
  .img {
    margin: 20px 0px 20px 20px;
    padding: 0;
    max-width: 215px;
    @media (max-width: 767px) {
      margin: 20px auto;
    }
  }
  .detailResult {
    margin: 20px 0;
    @media (max-width: 767px) {
      margin: 0 0 4px 0;
    }
  }
  .detail {
    margin-left: 20px;
  }
  .loan {
    margin: 20px 0;
    @media (max-width: 768px) {
      margin-top: 0px;
    }
    .detail {
      @media (max-width: 1399px) {
        margin-left: 0;
      }
    }
  }
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    height: 30px;
    line-height: 30px;
    @media (max-width: 540px) {
      margin-bottom: 0;
    }
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
    @media (max-width: 540px) {
      margin-bottom: 19px;
    }
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
      line-height: 20px;
      &__price {
        .evaluated-icon {
          margin-right: 6px;
          margin-left: 8px;
          height: 19px;
        }
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
  @media (max-width: 1399px) {
    border-top: 1px solid #45484f;
    padding-top: 20px;
    align-items: flex-start;
  }
  @media (min-width: 1400px) {
    border-left: 1px solid #45484f;
  }
  .detail {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    @media (max-width: 1399px) {
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
    text-align: right;

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
    @media (max-width: 768px) {
      margin-top: 24px;
    }
  }
`;
