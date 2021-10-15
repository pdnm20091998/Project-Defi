import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
const TitleSt = styled.h1`
  font-size: 54px;
  font-weight: bold;
  color: #ffffff;
  line-height: 66px;
  max-width: 786px;

  strong {
    color: #dba83d;
  }
`;
const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: #ffffff;
  max-width: 650px;
  margin-bottom: 24px;
  strong {
    color: #dba83d;
  }
`;
export default function Title() {
  const { t } = useTranslation();
  return (
    <>
      <TitleSt as="h1">
        {t('login.title')} <strong>DeFi For You</strong>!!!
      </TitleSt>
      <Description>
        {t('login.description_start')} <strong>01/08/2021</strong>{' '}
        {t('login.description_to')} <strong>31/12/2021</strong>{' '}
        {t('login.description_end')}
      </Description>
    </>
  );
}
