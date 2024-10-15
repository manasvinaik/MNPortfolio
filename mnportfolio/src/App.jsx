import './App.css';
import About from './components/About';
import CustomCursor from './components/CustomCursor';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { VelocityText } from './components/VelocityText';
import { Works } from './components/Works';

function App() {
  return (
    <div>
      <CustomCursor></CustomCursor>
      <Navbar />
      <Home />
      <About/>
      <VelocityText/>
      <Works />
    </div>
  );
}

export default App;
