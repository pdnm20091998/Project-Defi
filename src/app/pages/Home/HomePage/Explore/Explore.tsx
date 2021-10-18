import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import explore_one from '../Explore/asset/Rectangle_one.png';
import explore_two from '../Explore/asset/Rectangle_two.png';
import explore_three from '../Explore/asset/Rectangle_three.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import SlideItem from './component/slideItem';
import { DivCarousel, TitleExplore, SeeAll } from './styled/styled';

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
