import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '../NavBar';
import Banner from './Banner/Banner';
import Footer from '../../../components/Footer';
import Content from './Content/Content';
import Explore from './Explore/Explore';
import PawnShop from './PawnShop/PawnShop';
import { TermOfService } from './TermOfService';
export function HomePage() {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    let modal_status = localStorage.getItem('accept');
    if (!modal_status) {
      setModal(true);
    }
  }, []);
  function handleModal() {
    setModal(false);
    localStorage.setItem('accept', '1');
  }
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {modal === true && <TermOfService show={modal} onHide={handleModal} />}
      <NavBar />
      <Banner />
      <Content />
      <Explore />
      <PawnShop />
      <span>HomePage container</span>
      <Footer />
    </>
  );
}
