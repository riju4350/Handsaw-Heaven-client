import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Products = () => {
  const [products,setProducts] = useState([]);
  
  useEffect(()=>{
      fetch('http://localhost:5000/products')
      .then(res=>res.json())
      .then(data=>setProducts(data))
  },[]);
  return (
   <div className='m-10'>
    <div className='py-16 px-10'>
    <h3 className='text-2xl font-bold text-primary'>Products</h3>
    <h1 className='text-4xl font-bold'>Our Products Are Here</h1>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    {products.map(product=><Card key={product._id} product={product}></Card>)}
   </div>
   <div className='flex justify-center items-center mt-10'>
    <button class="btn btn-primary px-10 text-white font-bold">Explore More</button>
   </div>
   </div>
  )
}

export default Products;