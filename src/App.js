import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Navber from './Components/Navber/Navber';
import SpecialProduct from './Components/SpecialProduct/SpecialProduct';
import Products from './Components/SummarSell/Products';
import SummerSell from './Components/SummarSell/SummerSell';
import Bsummary from './Components/Summary/Bsummary';
import Reviews from './Pages/Reviews/Reviews'

function App() {
  return (
    <div className="">
     <Navber></Navber>
     <Banner></Banner>
     <SpecialProduct></SpecialProduct>
     <SummerSell></SummerSell>
     <Products></Products>
     <Reviews></Reviews>
     <Bsummary></Bsummary>
     <Footer></Footer>
  
    </div>
  );
}

export default App;

// git add .
// git commit -m "first commit"
// git push