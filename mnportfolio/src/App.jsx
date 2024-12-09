import './App.css';
import About from './components/About';
import CustomCursor from './components/CustomCursor';
import Home from './components/Home';
import LogoCarousel from './components/LogoCarousel';
import Navbar from './components/Navbar';
import { Works } from './components/Works';

function App() {
  return (
    <div>
      <CustomCursor></CustomCursor>
      <Navbar />
      <Home />
      <About/>
      <LogoCarousel></LogoCarousel>
      <Works />
    </div>
  );
}

export default App;
