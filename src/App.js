import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar.js';
import Footer from './components/footer/footer.js'
import Home from './components/home/home';
import Detalles from './components/Detalles/Detalles'
import Comprar from './components/Comprar/Comprar'
import Vender from './components/Vender/Vender';
function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Comprar" element={<Comprar />} />
      <Route path='/Detalles' element={<Detalles/>}/>
      <Route path='/Vender' element={<Vender/>}/>
    </Routes>
    <Footer />
    </div>
    </Router>
    
  );
}

export default App;
