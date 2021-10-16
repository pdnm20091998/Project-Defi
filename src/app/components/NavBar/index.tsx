/**
 *
 * NavBar
 *
 */
import { useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo/index';
import { Collapse, Container, Form, Image, Nav, Navbar } from 'react-bootstrap';
import DefiButton from 'app/components/DefiButton/DefiButton';
import NavButton from './components/NavButton';
import SignupButton from './components/signupBtn';
import styles from './style/NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import avatar from './assests/Vector.svg';
import { Link, useLocation } from 'react-router-dom';
import Btn from './assests/button1.png';
import { getToken, getNameLocal } from 'app/components/common/common';
import InforUser from './components/InforUser';
import ChangeLang from 'app/components/changeLang/changeLang';

interface Props {}

const Div = styled.div`
  background: #232732;
  border-bottom: 1px solid rgba(125, 111, 125, 0.2);
  .center {
    margin-top: 8px;
    text-align: center;
    color: #d1d1d3;
  }
`;
const NavLink = styled(Nav.Link)`
  font-size: 16px;
  font-weight: 500;
  &:hover,
  visited {
    color: #dba83d !important;
  }
`;
const MiniNav = styled(Nav)`
  background: #171a23;
  position: absolute;
  display: block;
  width: 100%;
  z-index: 1;
`;
const MyDropDown = styled(Nav.Link)`
  padding: 0.5rem 0 0 1rem;
  cursor: pointer;
`;
const MyLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: inherit;
  }
`;
const MyForm = styled(Form)`
  display: flex;
  align-items: center;
`;

export default function NavBar(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [clicked, setClicked] = useState(true);
  const [open, setOpen] = useState(false);
  const [accOpen, setAccOpen] = useState(false);
  const [borrow, setBorrow] = useState(false);
  const [lend, setLend] = useState(false);
  const [NFT, setNFT] = useState(false);
  const [bg, setBg] = useState(false);
  let bgColor = bg ? '#282C37' : 'inherit';
  let location = useLocation();

  function handleOpenAcc(e) {
    e.preventDefault();
    setAccOpen(!accOpen);
    setBg(!bg);
  }
  function handleOpenBor(e) {
    e.stopPropagation();

    setBorrow(!borrow);
  }
  function handleOpenLend(e) {
    e.stopPropagation();

    setLend(!lend);
  }
  function handleOpenNFT(e) {
    e.stopPropagation();

    setNFT(!NFT);
  }
  function handleSetClicked() {
    setClicked(!clicked);
    setOpen(!open);
  }
  // Logout
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  //ve home
  const toHome = () => {
    window.location.href = '/';
  };
  return (
    <Div className={styles.container}>
      <Navbar expand="xl">
        <Container fluid>
          <Navbar.Brand
            as="div"
            className="me-auto cursor-pointer"
            onClick={toHome}
          >
            <Logo className={styles.logo} />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto ms-xl-2 ${styles.pawn}`}>
              <NavLink
                href="/"
                className={`pe-3 ps-0 ${styles.linkColor} ${
                  location.pathname === '/login/tab=2' ||
                  location.pathname === '/login' ||
                  location.pathname === '/login/tab=1'
                    ? styles.login_active
                    : styles.active
                }`}
              >
                {t('home.pawn')}
              </NavLink>
              <NavLink href="#" className={`pe-3 ps-0 ${styles.linkColor}`}>
                {t('home.borrow')}
              </NavLink>
              <NavLink href="#" className={`pe-3 ps-0 ${styles.linkColor}`}>
                {t('home.lend')}
              </NavLink>
              <NavLink href="#" className={`pe-3 ps-0 ${styles.linkColor}`}>
                NFT
              </NavLink>
              <NavLink href="#" className={`pe-3 ps-0 ${styles.linkColor}`}>
                {t('home.myacc')}
              </NavLink>
              <NavLink href="#" className={styles.linkColor}>
                FAQ
              </NavLink>
              {location.pathname === '/login/tab=2' ||
              location.pathname === '/login' ? (
                <SignupButton>
                  <Link to="/login/tab=1">
                    <img src={Btn} alt="" />
                  </Link>
                </SignupButton>
              ) : (
                ''
              )}
            </Nav>
          </Navbar.Collapse>
          <MyForm>
            {location.pathname === '/login/tab=2' ||
            location.pathname === '/login' ||
            location.pathname === '/login/tab=1' ? (
              ''
            ) : (
              <DefiButton className={styles.remove}>
                <MyLink to="#">{t('home.become.bc')}</MyLink>
              </DefiButton>
            )}
            <NavButton className={`ms-3 ${styles.connect}`}>
              <MyLink to="#">{t('home.connect')}</MyLink>
            </NavButton>
            {getToken() ? (
              <div className={`ms-3 ${styles.remove}`}>
                <InforUser />
              </div>
            ) : (
              <MyLink to="/login">
                <NavButton
                  style={{ padding: '10px 20px' }}
                  className={`ms-3 ${styles.remove}`}
                >
                  {t('login.login_tab')}
                </NavButton>
              </MyLink>
            )}
            <ChangeLang />
            {clicked === true ? (
              <FontAwesomeIcon
                className={`ms-2 ${styles.displayBtn}`}
                icon={faBars}
                size="lg"
                color="white"
                onClick={handleSetClicked}
                aria-controls="nav"
                aria-expanded={open}
              ></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                className={`ms-2 ${styles.displayBtn}`}
                icon={faTimes}
                size="lg"
                color="white"
                onClick={handleSetClicked}
                aria-controls="nav"
                aria-expanded={open}
              ></FontAwesomeIcon>
            )}
          </MyForm>
        </Container>
      </Navbar>
      <Collapse in={open}>
        <MiniNav id="nav" className={styles.miniNav}>
          <Image
            src={avatar}
            width="60px"
            height="60px"
            alt="avatar"
            className="d-block mx-auto pt-2"
            rounded
          />
          {getNameLocal() ? (
            <div className="center">
              {JSON.parse(localStorage.getItem('name') || '')}
            </div>
          ) : (
            <MyLink to="/login">
              <NavButton width="80px" className="mt-2 mx-auto d-block">
                {t('login.login_tab')}
              </NavButton>
            </MyLink>
          )}
          <Nav.Link className={styles.linkColor}> {t('home.pawn')}</Nav.Link>
          <Nav.Link className={styles.linkColor}>Staking</Nav.Link>
          <Nav.Link className={styles.linkColor}>NFT</Nav.Link>
          <MyDropDown
            as="div"
            style={{ background: bgColor }}
            onClick={handleOpenAcc}
            className={styles.linkColor}
          >
            {t('home.myacc')}
            {accOpen === true ? (
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="float-end fa-rotate-270 me-2"
              />
            ) : (
              <FontAwesomeIcon icon={faAngleLeft} className="float-end me-2" />
            )}
            {accOpen === true && (
              <>
                <MyDropDown as="div" onClick={handleOpenBor}>
                  {t('home.profile')}
                  {borrow === true ? (
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="float-end fa-rotate-270 me-2"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="float-end me-2"
                    />
                  )}
                  {borrow === true && (
                    <>
                      <Nav.Link className={styles.linkColor}>
                        Collateral
                      </Nav.Link>
                      <Nav.Link className={styles.linkColor}>
                        Contracts
                      </Nav.Link>
                    </>
                  )}
                </MyDropDown>
                <MyDropDown as="div" onClick={handleOpenLend}>
                  Lender Profile
                  {lend === true ? (
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="float-end fa-rotate-270 me-2"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="float-end me-2"
                    />
                  )}
                  {lend === true && (
                    <>
                      <Nav.Link className={styles.linkColor}>
                        Offers sent
                      </Nav.Link>
                      <Nav.Link className={styles.linkColor}>
                        Contracts
                      </Nav.Link>
                      <Nav.Link className={styles.linkColor}>
                        Pawnshop Loan Package
                      </Nav.Link>
                      <Nav.Link className={styles.linkColor}>
                        Loan Requests
                      </Nav.Link>
                    </>
                  )}
                </MyDropDown>
                <Nav.Link className={styles.linkColor}>Staking</Nav.Link>
                <MyDropDown as="div" onClick={handleOpenNFT}>
                  NFT
                  {NFT === true ? (
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="float-end fa-rotate-270 me-2"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="float-end me-2"
                    />
                  )}
                  {NFT === true && (
                    <>
                      <Nav.Link className={styles.linkColor}>NFT List</Nav.Link>
                      <Nav.Link className={styles.linkColor}>
                        NFT Auction
                      </Nav.Link>
                    </>
                  )}
                </MyDropDown>
              </>
            )}
          </MyDropDown>
          <Nav.Link className={styles.linkColor}>FAQ</Nav.Link>
          {getNameLocal() ? (
            <>
              <NavLink>Change password</NavLink>
              <NavLink onClick={handleLogout}>Log out</NavLink>
            </>
          ) : (
            ''
          )}
        </MiniNav>
      </Collapse>
    </Div>
  );
}
