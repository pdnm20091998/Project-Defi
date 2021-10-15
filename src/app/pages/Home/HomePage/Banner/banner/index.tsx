/**
 *
 * Banner
 *
 */
import styled from 'styled-components/macro';
import img from '../assets/Frame.svg';
import { Container, Row, Col } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import { useTranslation } from 'react-i18next';

interface Props {}
const H1 = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 73px;
  text-transform: capitalize;
  color: ${props => props.color};
`;
const P = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
const Div = styled.div`
  position: relative;
  .image-zone__img {
    height: 416px;
    margin-top: 80px;
    width: 100%;
    @media (min-width: 1600px) {
      position: absolute;
      left: -172px;
      width: 668px;
    }
  }
  .description {
    margin-top: 28px;
  }
`;

export function BannerLeft(props: Props) {
  const { t } = useTranslation();
  return (
    <Div>
      <Container className="d-flex flex-column banner">
        <Row>
          <Col sm="12">
            <div>
              <H1 color="#fff">
                <ReactTypingEffect
                  text={[`${t('home.borrow')}`, `${t('home.lend')}`]}
                  cursor=" "
                  eraseDelay="2000"
                  typingDelay="0"
                />
              </H1>
              <H1 color="#fff"> {t('home.with')} </H1>
              <H1 color="rgb(219, 168, 61)">DeFi For You.</H1>
            </div>
            <P className="description">{t('home.title')}</P>
          </Col>
          <Col sm="12">
            <img className="image-zone__img" src={img} alt="" />
          </Col>
        </Row>
      </Container>
    </Div>
  );
}
