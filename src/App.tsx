import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { PreFooter } from './components/PreFooter';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { CateringPage } from './pages/CateringPage';
import { ContactPage } from './pages/ContactPage';
import { CorporateEventsPage } from './pages/catering/CorporateEventsPage';
import { PrivatePartiesPage } from './pages/catering/PrivatePartiesPage';
import { WeddingsPage } from './pages/catering/WeddingsPage';
import MusicPage from './pages/MusicPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

// MainLayout wraps all pages except music page
const MainLayout: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div className="bg-black min-h-screen">
    <Navigation />
    {children}
    <PreFooter />
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Music page route */}
        <Route path="/music" element={<MusicPage />} />
        
        {/* All other routes with standard layout */}
        <Route path="/" element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } />
        <Route path="/menu" element={
          <MainLayout>
            <MenuPage />
          </MainLayout>
        } />
        <Route path="/about" element={
          <MainLayout>
            <AboutPage />
          </MainLayout>
        } />
        <Route path="/catering" element={
          <MainLayout>
            <CateringPage />
          </MainLayout>
        } />
        <Route path="/catering/corporate" element={
          <MainLayout>
            <CorporateEventsPage />
          </MainLayout>
        } />
        <Route path="/catering/private" element={
          <MainLayout>
            <PrivatePartiesPage />
          </MainLayout>
        } />
        <Route path="/catering/weddings" element={
          <MainLayout>
            <WeddingsPage />
          </MainLayout>
        } />
        <Route path="/contact" element={
          <MainLayout>
            <ContactPage />
          </MainLayout>
        } />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
};

export default App;