import React from 'react';
// import drill from '../../images/drill.png';

const Card = ({product}) => {
  const {name,img,price,discription,maximum,minimum} = product;
  return (
    <div class="card max-w-lg bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" className='px-10 pt-10 lg:h-[250px]' /></figure>
  <div class="card-body">
    <h2 class="card-title text-2xl font-bold">{name}</h2>
    <div className='font-bold text-gray-500  mb-5'>
    <p>Discription: {discription}</p>
    <p>Price: ${price}</p>
    <p>Maximum: {maximum}</p>
    <p>Minimum: {minimum}</p>
    </div>
    <div class="card-actions justify-center">
      <button class="btn btn-primary text-white font-bold">Buy now</button>
    </div>
  </div>
</div>
  )
}

export default Card;