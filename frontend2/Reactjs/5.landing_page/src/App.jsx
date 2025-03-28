import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Profile from './components/Profile';
import Projects from './components/Projects';
import TestimonialCarousel from './components/TestimonialCarousel';
import FAQ from './components/FAQ';
import InterestedInMe from './components/InterestedInMe';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Heading />
              <Profile />
              <Projects />
              <TestimonialCarousel />
              <FAQ />
              <InterestedInMe />
              <Footer />
            </>
          }/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
