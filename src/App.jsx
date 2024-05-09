import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './/components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Category from './components/Categories/Category';
import Products from './components/Products/Products';
import Rightf from './components/Rightf/Rightf';
import Review from './components/Reviews/Review';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Model from './components/Model/Model';
import Cart from './components/Cart/Cart';
import Navbar2 from './components/Navbar/Navbar2';
function App() {
  return (
    <>
      
      {/* <Navbar/> */}
      <Navbar2/>
      <Model />
      <Cart />
      <Hero/>
      <center>
      <Category/>
      <Products/>
      <Rightf/>
      <Review/>
      <Contact/>
      <Footer/>
      </center>

    </>
  )
}

export default App
