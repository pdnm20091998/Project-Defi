/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import PublicRoute from '../app/components/common/publicRoute';
import { GlobalStyle } from 'styles/global-styles';
import AuthForm from './pages/Login-Register/authform';
import { HomePage } from './pages/Home/HomePage/Loadable';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="Defi for you"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={undefined}>
          <Redirect to="/pawn" />
        </Route>
        <Route path="/pawn" component={HomePage} />
        <PublicRoute path="/login" component={AuthForm} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
