import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Appoinment from './Pages/Appoinment/Appoinment';
import Services from './Pages/Services/Services';
import Blogs from './Pages/Blogs/Blogs';
import Shop from './Pages/Shop/Shop';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetails from './Pages/Services/ServiceDetails';
import Loading from './Pages/Loading/Loading';
import RequiredPath from './Pages/Shared/ReqiredPath/RequiredPath';
import BlogDetails from './Pages/Blogs/BlogDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/appoinment' element={<Appoinment />}></Route>
        <Route path='/services' element={<RequiredPath>
          <Services></Services>
        </RequiredPath>}></Route>
        <Route path='/services/:_id' element={<ServiceDetails />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/blogs/:_id' element={<BlogDetails />}></Route>
        <Route path='/shop' element={<RequiredPath><Shop /></RequiredPath>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/about' element={<AboutUs />}></Route >
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/loading' element={<Loading />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
