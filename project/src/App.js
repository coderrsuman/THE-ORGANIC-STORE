import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Grocery from './pages/Grocery';
import OrganicClothes from './pages/OrganicClothes';
import Everything from './pages/Everything';
import Cart from './pages/Cart';
import About from './pages/About';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/grocery" element={<Grocery/>}></Route>
        <Route path="/essentials" element={<OrganicClothes/>}></Route>
        <Route path="/everything" element={<Everything/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
