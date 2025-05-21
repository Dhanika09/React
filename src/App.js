import "./App.css"
import Header from './components/Header/Header';
import Hamburger from './components/NavBar/Hamburger';
import NavItems from './components/NavBar/NavItems';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Links/Home';

import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <>
      <div className='Header'><Header/></div>
      <div className="navbar"><Hamburger/><NavItems name = "nav"/></div>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </div>
      
     </>
    </CartProvider>
    
  );
}

export default App;

