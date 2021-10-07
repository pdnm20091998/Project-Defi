import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '../NavBar';
import Banner from './Banner/Banner';
import Footer from '../../../components/Footer';
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <NavBar />
      <Banner />
      <span>HomePage container</span>
      <Footer />
    </>
  );
}
