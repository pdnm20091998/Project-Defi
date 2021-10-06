import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import GlobalStyle from '../../../components/Global/Global';
import NavBar from '../NavBar';
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <GlobalStyle />
      {/* <NavBar /> */}
      <span>HomePage container</span>
    </>
  );
}
