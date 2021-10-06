import styled from 'styled-components/macro';
import { BannerLeft } from './banner/index';
import { PawnTabs } from './Tabs/index';
interface Props {}

const Main = styled.div`
  @media (min-width: 1280px) {
    .xl {
      padding: 1.25rem;
    }
  }
  @media (min-width: 768px) {
    .md {
      padding: 1.25rem;
    }
  }
  .pawn-lend-borrow {
    &__content {
      display: flex;
      justify-content: center;
      @media screen and (max-width: 991px) {
        flex-direction: column;
      }
    }
  }
`;

const Div = styled.div`
  height: 25%;
  padding: 20px;
  background: #232732;
  color: #fff;
  /* @media (min-width: 1536px) {
    .xl-container {
      width: 100%;
    }
  }
  @media (min-width: 1536px) {
    @media (min-width: 320px) {
      .xl-container {
        max-width: 320px;
      }
    }
  }
  @media (min-width: 1536px) {
    @media (min-width: 768px) {
      .xl-container {
        max-width: 768px;
      }
    }
  }
  @media (min-width: 1536px) {
    @media (min-width: 1024px) {
      .xl-container {
        max-width: 1024px;
      }
    }
  }
  @media (min-width: 1536px) {
    @media (min-width: 1280px) {
      .xl-container {
        max-width: 1280px;
      }
    }
  }
  @media (min-width: 1536px) {
    @media (min-width: 1536px) {
      .xl-container {
        max-width: 1536px;
      }
    } */
  /* } */
`;
const Content = styled.div`
  .banner {
    width: 49%;
    padding-right: 100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media screen and (max-width: 991px) {
      width: 100% !important;
    }
    .caption-zone {
      margin-bottom: 50px;
      width: 90%;
      @media screen and (max-width: 991px) {
        width: 100% !important;
      }
      &__title {
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        line-height: 70px;
        margin-bottom: 15px;
      }
    }
    .image-zone {
      width: 100%;
      &__img {
        max-width: 100%;
        height: auto;
      }
    }
  }
`;

function Banner(props: Props) {
  const a: number = 32;
  return (
    <Main>
      <Div className="pawn-lend-borrow xl md">
        <Content className="pawn-lend-borrow__content 2xl:container mx-auto container-xs">
          <BannerLeft />
          <PawnTabs />
        </Content>
      </Div>
    </Main>
  );
}

export default Banner;
