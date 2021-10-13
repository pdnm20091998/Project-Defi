import styled from 'styled-components/macro';
const HeaderCrypto = props => {
  console.log(props);

  return (
    <div className="header__crypto">
      <div className="header__image">
        <img
          className="header__imgCrypto"
          src={props.picture}
          alt="NotPicture"
        />
      </div>
      <div className="header__content">
        <div className="header__title">{props.title}</div>
        <div className="header__text">{props.text}</div>
      </div>
    </div>
  );
};

export default HeaderCrypto;
