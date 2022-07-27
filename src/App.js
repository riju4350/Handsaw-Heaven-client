import './App.css';
import Footer from './Components/Footer/Footer';
import Navber from './Components/Navber/Navber';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Signup from './Components/Signup/Signup';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Dashboard from './Pages/DashBoard/DashBoard';

function App() {
  return (
    <div className="">
     <Navber></Navber>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <PlaceOrder></PlaceOrder>
     <Footer></Footer>
  
    </div>
  );
}

export default App;

// git add .
// git commit -m "first commit"
// git push