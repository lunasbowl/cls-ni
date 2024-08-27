import { Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Constitution from './pages/Constitution/Constitution';
import History from './pages/History/History';
import Events from './pages/Events/Events';
import ManagementCommittee from './pages/ManagementCommittee/ManagementCommittee';
import ParentCommittee from './pages/ParentCommittee/ParentCommittee';
import Teachers from './pages/Teachers/Teachers';
import Policy from './pages/Policy/Policy';
import HiringPage from './pages/Events/HiringPage/HiringPage';
import SchoolStartPage from './pages/Events/SchoolStart2024/SchoolStart2024Page';

function App() {
  return (
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <Helmet>
          <title>北爱中文学校 CLSNI</title>
          <meta
            name='description'
            content='北爱中文学校官网 - Official Website of the Chinese Language School Northern Ireland.'
          />
        </Helmet>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<HomePage />}></Route>
          <Route
            path='/about-constitution'
            element={<Constitution />}></Route>
          <Route
            path='/about-history'
            element={<History />}></Route>
          <Route
            path='/events'
            element={<Events />}></Route>
          <Route
            path='/about-management-committee'
            element={<ManagementCommittee />}></Route>
          <Route
            path='/about-parent-committee'
            element={<ParentCommittee />}></Route>
          <Route
            path='/about-faculty-and-staff'
            element={<Teachers />}></Route>
          <Route
            path='/policy'
            element={<Policy />}></Route>
          <Route
            path='/hiring'
            element={<HiringPage />}></Route>
          <Route
            path='/school-start-2024'
            element={<SchoolStartPage />}></Route>
        </Routes>
        <Footer />
      </I18nextProvider>
    </HelmetProvider>
  );
}

export default App;
