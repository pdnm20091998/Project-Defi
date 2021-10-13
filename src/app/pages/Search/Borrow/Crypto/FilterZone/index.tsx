import { PropsOf } from '@emotion/react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components/macro';
import Filter from './components/Filter';
interface Props {
  dataAsset?: Array<object>;
  handleClose: Function;
}
const imgObject = {
  XRP: '/XRP.7ff389b.png',
  ETH: '/ETH.d810d23.png',
  LTC: '/LTC.4b4595e.png',
  BTC: '/BTC.fba89d5.png',
  DOT: '/DOT.69cb9b6.png',
  ADA: '/ADA.4647c52.png',
  WBNB: '/WBNB.978ee2b.png',
  USDT: '/USDT.b7a5381.png',
  DFY: '/DFY.a0b985b.png',
  BUSD: '/BUSD.3aa6751.png',
  USDC: '/USDC.10ea0ad.png',
  DAI: '/DAI.71410d0.png',
  BNB: '/BNB.978ee2b.png',
};
export default function FilterZone(props: Props) {
  const collateralAccepted: Array<object> = [];
  const loanToken: Array<object> = [];
  const interestRange = [
    { name: '0-10%', title: '0-10%' },
    { name: '10-25%', title: '10-25%' },
    { name: '25-50%', title: '25-50%' },
    { name: '>50%', title: '>50%' },
  ];
  const loanToValue = [
    { name: '0-25%', title: '0-25%' },
    { name: '25-50%', title: '25-50%' },
    { name: '50-75%', title: '50-75%' },
    { name: '>75%', title: '>75%' },
  ];
  const loanType = [
    { name: 'auto', title: 'auto' },
    { name: 'semi-auto', title: 'semi-auto' },
    { name: 'negotiation', title: 'negotiation' },
  ];
  const duration = [
    { name: 'week', title: 'week' },
    { name: 'month', title: 'month' },
  ];
  props.dataAsset &&
    props.dataAsset.map((data: any) => {
      if (data.isWhitelistCollateral) {
        collateralAccepted.push({
          name: data.symbol,
          title: data.symbol,
          img: `https://staging.app.defiforyou.uk/_nuxt/img${
            imgObject[data.symbol]
          }`,
        });
      }
      if (data.isWhitelistSupply) {
        loanToken.push({
          name: data.symbol,
          title: data.symbol,
          img: `https://staging.app.defiforyou.uk/_nuxt/img${
            imgObject[data.symbol]
          }`,
        });
      }
      return 0;
    });
  const { handleClose } = props;
  return (
    <Div>
      <FilterHolder>
        <Span>Reset filter</Span>
      </FilterHolder>
      <Border></Border>
      <FilterHolder>
        <Filter title="Interest range" listCheckBox={interestRange} />
      </FilterHolder>
      <Border />
      <FilterHolder>
        <Filter title="loan to value" listCheckBox={loanToValue} />
      </FilterHolder>
      <Border />
      <FilterHolder>
        <Filter title="Collateral accepted" listCheckBox={collateralAccepted} />
      </FilterHolder>
      <Border />
      <FilterHolder>
        <Filter title="Loan token" listCheckBox={loanToken} />
      </FilterHolder>
      <Border />
      <FilterHolder>
        <Filter title="Loan type" listCheckBox={loanType} />
      </FilterHolder>
      <Border />
      <FilterHolder>
        <Filter title="Duration" listCheckBox={duration} />
      </FilterHolder>
      <Border />
    </Div>
  );
}
const Div = styled.div`
  background-color: #282c37;
  border-radius: 20px;
  padding-bottom: 1rem;
`;

const FilterHolder = styled.div`
  padding: 0.5rem;
  color: white;
`;
const Border = styled.div`
  width: 100%;
  border: 1px solid;
`;
const Span = styled.span`
  color: white;
  font-size: 14px;
  text-decoration: underline;
`;
