import { Route, Routes } from 'react-router-dom';
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePageEn from './pages/HomePageEn';
import Constitution from './pages/Constitution';

function App() {
  return (
    <>
    <I18nextProvider i18n={i18n}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePageEn />}></Route>
        <Route path="/about-constitution" element={<Constitution />}></Route>
      </Routes>
      <Footer />
    </I18nextProvider>
    </>
  );
}

export default App;
