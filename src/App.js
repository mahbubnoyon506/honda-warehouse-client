
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Notfound from './Components/Shared/Notfound/Notfound';
import Inventory from './Components/Pages/Inventory/Inventory';
import Blog from './Components/Pages/Blogs/Blog';
import About from './Components/Pages/About/About';
import Register from './Components/UserPages/Register/Register';
import Login from './Components/UserPages/Login/Login';
import RequiredAuth from './Components/Utilities/RequiredAuth/RequiredAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddItems from './Components/UserPages/AddItems/AddItems';
import ManageItems from './Components/UserPages/ManageItems/ManageItems';
import MyItems from './Components/UserPages/MyItems/MyItems';
import Products from './Components/Utilities/Products/Products';


function App() {

  return (
    <div className='Body-class'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={
          <RequiredAuth>
            <Inventory></Inventory>
          </RequiredAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/additems' element={
          <RequiredAuth>
            <AddItems></AddItems>
          </RequiredAuth>
        }></Route>
        <Route path='/manageitems' element={
          <RequiredAuth>
            <ManageItems></ManageItems>
          </RequiredAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequiredAuth>
            <MyItems></MyItems>
          </RequiredAuth>
        }></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
