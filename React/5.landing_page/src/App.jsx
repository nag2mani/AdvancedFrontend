import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Profile from './components/Profile';
import TestimonialCarousel from './components/TestimonialCarousel';
import FAQ from './components/FAQ';

function App() {
  return (
    <>
    <Navbar/>
    <Heading/>
    <Profile/>
    <TestimonialCarousel/>
    <FAQ/>
    </>
  )
}

export default App
