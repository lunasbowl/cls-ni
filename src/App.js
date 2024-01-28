import { Route, Routes } from 'react-router-dom';
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePageEn from './pages/HomePageEn';
import Constitution from './pages/Constitution';
import History from './pages/History';
import Events from './pages/Events';
import ManagementCommittee from './pages/ManagementCommittee';
import ParentCommittee from './pages/ParentCommittee';
import Teachers from './pages/Teachers';
import Contacts from './pages/Contacts';

function App() {
  return (
    <>
    <I18nextProvider i18n={i18n}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePageEn />}></Route>
        <Route path="/about-constitution" element={<Constitution />}></Route>
        <Route path="/about-history" element={<History />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/about-management-committee" element={<ManagementCommittee />}></Route>
        <Route path="/about-parent-committee" element={<ParentCommittee />}></Route>
        <Route path="/about-faculty-and-staff" element={<Teachers />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </I18nextProvider>
    </>
  );
}

export default App;
