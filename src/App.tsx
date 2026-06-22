import './App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router';
import Home from './Pages/Home';
import Products from './Pages/Products';
import AddProduct from './Pages/AddProduct';
import ProductDetails from './Pages/ProductDetails';

function App() {

  return (
    <>
      <Navbar/>
      <div className='row'>
        <div className= 'col-2 sidebar'>
          <Sidebar/>
        </div>
        <div className= 'col-10'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/add' element={<AddProduct/>}/>
            <Route path='/products/:productId' element={<ProductDetails/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
