import { Stack } from 'react-bootstrap';
import styled from 'styled-components/macro';
import Title from '../components/Title';
import Des from '../components/Des';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <Stack className="mt-5 " gap={3}>
      <Title>About DeFi For You.</Title>

      <Des fontWeight="600">
        <B>DeFi For You</B>
        {t('footer.about')}
      </Des>
    </Stack>
  );
}

const B = styled.b`
  color: #dba83d;
  font-weight: 600;
`;
