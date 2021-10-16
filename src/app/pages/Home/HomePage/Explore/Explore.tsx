import styled from 'styled-components/macro';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import explore_one from '../Explore/asset/Rectangle_one.png';
import explore_two from '../Explore/asset/Rectangle_two.png';
import explore_three from '../Explore/asset/Rectangle_three.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import SlideItem from './component/slideItem';

const DivCarousel = styled.div`
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
      top: 40% !important;
    }
    .slick-next {
      right: -15px;
    }
    .slick-prev {
      left: -34px;
    }
    .slick-next:before,
    .slick-prev:before {
      font-size: 40px !important;
    }

    @media screen and (max-width: 540px) {
      .slick-arrow {
        top: 30% !important;
      }
      .slick-next {
        right: 10px !important;
      }
      .slick-prev {
        position: absolute;
        left: -10px !important;
        z-index: 1;
      }
    }
  }
`;

const TitleExplore = styled.h3`
  margin-bottom: 64px;
  color: #dba83d;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
`;

const SeeAll = styled.span`
  color: #ffffff;
  transition: 0.3s ease-in-out all;
  &:hover {
    color: #dba83d;
    transition: 0.3s ease-in-out all;
  }
`;

const Explore = () => {
  const { t } = useTranslation();
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <DivCarousel>
        <TitleExplore>{t('home.explore.title')}</TitleExplore>
        <SeeAll>
          See all
          <FontAwesomeIcon icon={faArrowRight} />
        </SeeAll>
        <Slider {...settings}>
          <SlideItem
            picture={explore_one}
            title="Pawnshop America"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <SlideItem
            picture={explore_two}
            title="Pawnshop America"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <SlideItem
            picture={explore_three}
            title="Pawnshop America"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <SlideItem
            picture={explore_two}
            title="Pawnshop America"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
        </Slider>
      </DivCarousel>
    </Container>
  );
};

export default Explore;
