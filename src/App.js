import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePageEn from './pages/HomePageEn';
import AboutEn from './pages/AboutEn';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePageEn />}></Route>
        <Route path="/about-en" element={<AboutEn />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
