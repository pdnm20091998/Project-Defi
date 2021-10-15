import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import i18n from '../../../translation/i18n';
import Vi from './asset/vietnam.png';
import Us from './asset/us.png';

const ChangeLang = () => {
  const [change, setChange] = useState(true);

  function changeLanguage(e) {
    setChange(!change);
  }
  useEffect(() => {
    if (change) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('vi');
    }
  }, [change]);
  return (
    <div className="App-header">
      <Img
        src={change ? Us : Vi}
        alt="Change Language"
        onClick={changeLanguage}
      />
    </div>
  );
};

export default ChangeLang;

const Img = styled.img`
  width: 25px;
  margin-left: 8px;
  cursor: pointer;
`;
