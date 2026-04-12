import { Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { appRoutes } from './config/routes';
import i18n from './i18n/i18n';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <Helmet>
          <title>{'\u5317\u7231\u4e2d\u6587\u5b66\u6821 CLSNI'}</title>
          <meta
            name='description'
            content={
              '\u5317\u7231\u4e2d\u6587\u5b66\u6821\u5b98\u7f51 - Official Website of the Chinese Language School Northern Ireland.'
            }
          />
        </Helmet>
        <Header />
        <Routes>
          {appRoutes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={<Component />}
            />
          ))}
        </Routes>
        <Footer />
      </I18nextProvider>
    </HelmetProvider>
  );
}

export default App;
