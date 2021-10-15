import React from 'react';
import i18n from '../../../translation/i18n';

const changeLang = () => {
  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div className="App-header">
      <select onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
    </div>
  );
};

export default changeLang;
