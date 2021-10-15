import styled from 'styled-components/macro';
import fast_time from './asset/fast-time.svg';
import arrow from './asset/Group-arrow.svg';
import money from './asset/money-management.svg';
import wallet from './asset/Group-wallet.svg';
import { Container, Row, Col } from 'react-bootstrap';
import './sass/content.scss';
import { useTranslation } from 'react-i18next';

const DivContent = styled.div`
  padding: 60px 0;
  width: 100%;
  background: rgb(26, 26, 35);
`;

const Title = styled.h3`
  font-size: 36px;
  color: #dba83d;
  font-weight: 600;
  line-height: 44px;
  text-align: center;
  margin: 0;
  margin-bottom: 100px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;
const Error_img = 'No picture';

const ContentItem = styled.div`
  text-align: center;
  color: #ffffff;
  img {
    margin-bottom: 34px;
  }
  .content__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-transform: capitalize;
  }

  .content__info {
    margin-top: 20px;
    font-size: 16px;
    line-height: 20px;
  }
`;

const Content = () => {
  const { t } = useTranslation();

  return (
    <DivContent className="content">
      <Container>
        <Row>
          <Title className="title">{t('home.content.title')}</Title>
        </Row>
        <Row>
          <Col sm={12} lg={3} className="content__col">
            <ContentItem className="content__item">
              <Image src={fast_time} alt={Error_img} />
              <div className="content__text">
                <h3 className="content__title">{t('home.content.quicker')}</h3>
                <p className="content__info">
                  {t('home.content.quicker_description')}
                </p>
              </div>
            </ContentItem>
          </Col>
          <Col sm={12} lg={3} className="content__col">
            <ContentItem className="content__item">
              <Image src={arrow} alt={Error_img} />
              <div className="content__text">
                <h3 className="content__title">{t('home.content.better')}</h3>
                <p className="content__info">
                  {t('home.content.better_description')}
                </p>
              </div>
            </ContentItem>
          </Col>
          <Col sm={12} lg={3} className="content__col">
            <ContentItem className="content__item">
              <Image src={money} alt={Error_img} />
              <div className="content__text">
                <h3 className="content__title">{t('home.content.finance')}</h3>
                <p className="content__info">
                  {t('home.content.finance_description')}
                </p>
              </div>
            </ContentItem>
          </Col>
          <Col sm={12} lg={3} className="content__col">
            <ContentItem className="content__item">
              <Image src={wallet} alt={Error_img} />
              <div className="content__text">
                <h3 className="content__title">{t('home.content.credit')}</h3>
                <p className="content__info">
                  {t('home.content.credit_description')}
                </p>
              </div>
            </ContentItem>
          </Col>
        </Row>
      </Container>
    </DivContent>
  );
};

export default Content;
