
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

function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/inventory' element={<Inventory></Inventory>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blogs' element={<Blog></Blog>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
