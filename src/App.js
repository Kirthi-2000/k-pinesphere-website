import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import ScrollNavbar from './components/scroll';
import './components/scroll.css';
import ArtistList from './ArtistList';
import NewsLayout from './NewsLayout';
import ContactForm from './ContactForm';
import Portfolio from './Portfolio';
import Job from './JobFilter';
import JobFilter from './JobFilter';
import CultureSection from './CultureSection';
import CardStacking from './CardStacking';
// import OfficeGallery from './OfficeGallery';

const App = () => {
  useSmoothScroll();

  return (
    <div>
      {/* Render Navbar outside the Routes */}


      {/* Scrollable content within the Routes */}
      <div id="scroll-container">
        <Routes>

          <Route path="/scroll" element={<ScrollNavbar />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/team" element={<ArtistList/>} />
          <Route path="/news" element={<NewsLayout/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/Job" element={<JobFilter/>} />
          <Route path="/gal" element={<CultureSection/>} />
          <Route path="/card" element={<CardStacking/>} />
          {/* <Route path="/photo" element={<OfficeGallery/>} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
