/**
 *
 * Style
 *
 */
import styled from 'styled-components/macro';

interface Props {}

export const Address = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: #2596ff;
`;
export const Start = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
export const P = styled.p`
  padding-top: 30px;
  img {
    width: 24px;
    margin-right: 12px;
  }
`;
export function Style(props: Props) {
  return <Div></Div>;
}

export const Div = styled.div`
  background-color: #171a23;
  border-bottom: 1px solid rgba(125, 111, 125, 0.2);
  padding-top: 30px;

  .page-item {
    margin: 0px 6px;
    .page-link {
      color: #fff;
      background-color: transparent;
      border: 1px solid #d1d1d3;
      box-sizing: border-box;
      border-radius: 4px;
      &:focus {
        border: none;
        background-color: #dba83d !important;
        box-shadow: none !important;
      }
    }
  }
  .table {
    color: #fff;
    .items {
      background: #282c37;
      border-radius: 4px 4px 0px 0px;
      margin-bottom: 4px;
      padding-left: 24px;
      min-height: 80px;
      &:hover {
        background-color: #475674;
      }
      .borrow {
        margin-top: 8px;
        &__address {
          margin-bottom: 7px;
        }
        .start {
          padding-right: 10px;
        }
        .contracts {
          padding-top: 1px;
        }
      }
    }
    &__head {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      background: rgba(40, 44, 55, 0.5);
      min-height: 50px;
      border-radius: 10px 10px 0px 0px;
      padding: 16px 0px 17px 24px;

      @media only screen and (max-width: 1024px) {
        display: none !important;
      }
    }
    &__body {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      .send {
        @media (max-width: 576px) {
          margin: 1rem 0rem;
        }
      }
    }
  }
`;

export const Wrapper = styled.div`
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    position: relative;
    .icon-filter {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 0px;
      cursor: pointer;
      display: none;
      padding-right: 50px;
      @media (max-width: 767px) {
        right: 16px;
      }
    }
    @media (max-width: 767px) {
      width: 100%;
      margin: 0px auto;
    }
    @media (min-width: 768px) {
      width: 768px;
      margin: 0px auto;
    }
    @media (max-width: 992px) {
      flex-direction: column;
      .icon-filter {
        display: block;
        z-index: 1;
      }
    }
    @media (min-width: 1025px) {
      width: 1024px;
      margin: 0px auto;
    }
    @media (min-width: 1280px) {
      width: 1280px;
      margin: 0px auto;
    }

    @media (min-width: 1536px) {
      max-width: 1536px;
      margin: 0px auto;
    }
  }
`;
