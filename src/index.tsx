/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Use consistent styling
import 'sanitize.css/sanitize.css';

// Import root app
import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

import configureStore from 'store/configureStore';

import reportWebVitals from 'reportWebVitals';

//import context
import { LendNftContextProvider } from './app/components/common/context/lendNftContext';
import { BorrowCryptoContextProvider } from 'app/components/common/context/borrowCryptoContext';
// Initialize languages
import i18n from './translation/i18n';
import { I18nextProvider } from 'react-i18next';

import rootSaga from './app/saga/index';
import { LendCryptoContextProvider } from 'app/components/common/context/lendCryptoContext';

const store = configureStore();
store.runSaga(rootSaga);
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <React.StrictMode>
        <LendNftContextProvider>
          <LendCryptoContextProvider>
            <BorrowCryptoContextProvider>
              <I18nextProvider i18n={i18n}>
                <App />
              </I18nextProvider>
            </BorrowCryptoContextProvider>
          </LendCryptoContextProvider>
        </LendNftContextProvider>
      </React.StrictMode>
    </HelmetProvider>
  </Provider>,
  MOUNT_NODE,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
