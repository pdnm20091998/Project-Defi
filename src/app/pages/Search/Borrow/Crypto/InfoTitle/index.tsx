import styled from 'styled-components/macro';
import menuMobile from '../FilterZone/asset/Menumobile.svg';

export default function InfoTitle() {
  //xử lí menu mobile
  const showFilterRight = () => {
    let getFilterRight = document.querySelector('.filtermobile');
    getFilterRight?.classList.add('ShowFilter__Mobile');
    getFilterRight?.classList.remove('HiddenFilter__Mobile');
  };

  return (
    <Div className="menuMobile">
      <img src={menuMobile} alt="No-icon" onClick={showFilterRight} />
    </Div>
  );
}

const Div = styled.div`
  float: right;
  display: none;
  padding: 20px 0;
`;
