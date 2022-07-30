import React from 'react';
import Banner from '../../Components/Banner/Banner';
import SpecialProduct from '../../Components/SpecialProduct/SpecialProduct';
import Products from '../../Components/Products/Products';
import SummerSell from '../../Components/SummarSell/SummerSell';
import Bsummary from '../../Components/Summary/Bsummary';
import Reviews from '../../Pages/Reviews/Reviews'
import PlaceOrder from '../../Components/PlaceOrder/PlaceOrder';

const Home = () => {
   return (
    <div>
     <Banner></Banner>
     <SpecialProduct></SpecialProduct>
     <SummerSell></SummerSell>
     <Products></Products>
     <Reviews></Reviews>
     <Bsummary></Bsummary>
     <PlaceOrder></PlaceOrder>
    </div>
  )
}

export default Home;