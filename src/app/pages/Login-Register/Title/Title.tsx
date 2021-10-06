import styled from 'styled-components/macro';

const Title = styled.h1`
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
  max-width: 715px;
  margin-bottom: 24px;
  strong {
    color: #dba83d;
  }
`;
export default function title() {
  return (
    <>
      <Title as="h1">
        Exclusive on <strong>DeFi For You</strong>!!!
      </Title>
      <Description>
        Register new DeFi For You account from <strong>01/08/2021</strong> to{' '}
        <strong>31/12/2021</strong> to have 100% chance of receiving DFY tokens
      </Description>
    </>
  );
}
