import logo from './logo.svg';
import './App.css';
import {Home} from './component/Home';
import {About} from './component/About';
import {Contact} from './component/Contact';

function App() {
  return (
    <div className="Container">
      <div class="Navbar">
        <Home />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
