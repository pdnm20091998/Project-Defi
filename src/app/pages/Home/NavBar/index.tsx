/**
 *
 * NavBar
 *
 */
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
// import { messages } from './messages';
import Logo from '../../../components/Logo';
import { Collapse, Container, Form, Image, Nav, Navbar } from 'react-bootstrap';
import DefiButton from 'app/components/DefiButton/DefiButton';
import NavButton from './components/NavButton';
import styles from './style/NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import avatar from './assests/Vector.svg';

interface Props {}

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
  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <Navbar expand="xl">
        <Container fluid>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-5">
              <NavLink className={`pe-3 ${styles.active}`}>Pawn</NavLink>
              <NavLink className="pe-3">Borrow</NavLink>
              <NavLink className="pe-3">Lend</NavLink>
              <NavLink className="pe-3">NFT</NavLink>
              <NavLink className="pe-3">My account</NavLink>
              <NavLink>FAQ</NavLink>
            </Nav>
          </Navbar.Collapse>
          <Form>
            <DefiButton className={styles.remove} width="190px" height="36px">
              Become a Pawnshop
            </DefiButton>
            <NavButton width="100px" className={`ms-3 ${styles.remove}`}>
              Buy DFY
            </NavButton>
            <NavButton width="100px" className="ms-3">
              Connect
            </NavButton>
            <NavButton width="80px" className={`ms-3 ${styles.remove}`}>
              Login
            </NavButton>
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
          </Form>
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
          <NavButton width="80px" className="mt-2 mx-auto d-block">
            Login
          </NavButton>
          <NavLink>Pawn</NavLink>
          <NavLink>Staking</NavLink>
          <NavLink>NFT</NavLink>
          <MyDropDown
            as="div"
            style={{ background: bgColor }}
            onClick={handleOpenAcc}
          >
            My account
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
                  Borrower Profile
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
                      <NavLink>Collateral</NavLink>
                      <NavLink>Contracts</NavLink>
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
                      <NavLink>Offers sent</NavLink>
                      <NavLink>Contracts</NavLink>
                      <NavLink>Pawnshop Loan Package</NavLink>
                      <NavLink>Loan Requests</NavLink>
                    </>
                  )}
                </MyDropDown>
                <NavLink>Staking</NavLink>
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
                      <NavLink>NFT List</NavLink>
                      <NavLink>NFT Auction</NavLink>
                    </>
                  )}
                </MyDropDown>
              </>
            )}
          </MyDropDown>
          <NavLink>FAQ</NavLink>
          {/* <NavLink>Change password</NavLink>
          <NavLink>Log out</NavLink> */}
        </MiniNav>
      </Collapse>
    </Div>
  );
}

const Div = styled.div`
  height: 100px;
  background: #232732;
`;
const NavLink = styled(Nav.Link)`
  color: #d1d1d3 !important;
  font-size: 16px;
  font-weight: 500;
  &:hover,
  visited {
    color: #dba83d !important;
  }
`;
const MiniNav = styled(Nav)`
  background: #171a23;
  position: relative;
  display: block;
`;
const MyDropDown = styled(NavLink)`
  padding: 0.5rem 0 0.5rem 1rem;
  cursor: pointer;
`;
