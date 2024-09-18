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

function App() {
  return (
    <>
    <Navbar/>
    <Heading/>
    <Profile/>
    <Projects/>
    <TestimonialCarousel/>
    <FAQ/>
    <InterestedInMe/>
    <Footer/>
    </>
  )
}

export default App
