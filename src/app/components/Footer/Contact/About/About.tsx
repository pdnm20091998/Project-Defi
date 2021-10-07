import { Stack } from 'react-bootstrap';
import styled from 'styled-components/macro';
import Title from '../components/Title';
import Des from '../components/Des';
export default function About() {
  return (
    <Stack className="mt-5 " gap={3}>
      <Title>About DeFi For You.</Title>

      <Des fontWeight="600">
        <B>DeFi For You</B> is a trading style of Miles Mann Limited registered
        office at 5 Southgate Street, Gloucester, Gloucestershire, GL1 1TG1
        Licensed authorised and regulated by the Financial Conduct Authority to
        exercise lender's rights and duties under a regulated credit agreement
        (excluding high-cost short-term credit, bill of sale agreement, and home
        collected credit agreement), and has the right to exercise lender's
        rights and duties under a regulated credit agreement (excluding
        high-cost short-term credit, bill of sale agreement, and home collected
        credit agreement)
      </Des>
    </Stack>
  );
}

const B = styled.b`
  color: #dba83d;
  font-weight: 600;
`;
