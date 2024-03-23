import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Header from'./components/Header'
import Footer from './components/Footer'
import Help from './pages/Help';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product/:productId' element={<ProductDetails/>} />
        <Route path='/*' element={<NotFound/>} />
        {/* <Route path='/contact' element={<Contact/>} />*/}
        <Route path='/help' element={<Help/>} /> 
        <Route path='/cart' element={<Cart/>} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
