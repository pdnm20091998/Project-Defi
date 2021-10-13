import styled from 'styled-components/macro';
import HeaderCrypto from '../InfoTitle/Header/Header';
import '../InfoTitle/Sass/mainCrypto.scss';
import dolar from '../InfoTitle/asset/dolar.svg';
import dolarHidden from '../InfoTitle/asset/dolarHidden.svg';
import PawnShopItem from '../PawnshopItem/pawnshopItem';

export default function SumPawnShop() {
  return (
    <div className="headerCrypto">
      <p className="crypto__title">10 pawnshop package match your search</p>
      <HeaderCrypto
        picture={dolar}
        title="You are not in a hurry and can wait?"
        text="Request a loan from a trusted P2P lender to get a better interest rate
        and LTV"
      />
      <PawnShopItem />
      <HeaderCrypto
        picture={dolarHidden}
        title="Want an instant loan?"
        text="Submit your collateral to get a loan in seconds"
      />
    </div>
  );
}
