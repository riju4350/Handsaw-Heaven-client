import React from 'react';
// import drill from '../../images/drill.png';

const Card = ({card}) => {
  const {name,img,price} = card;
  return (
    <div class="card max-w-lg bg-base-100 shadow-xl">
  {/* <figure><img src="https://i.ibb.co/q5MvccV/drill.png" alt="Shoes" /></figure> */}
  <figure><img src={img} alt="Shoes" className='px-10 pt-10 lg:h-[250px]' /></figure>
  <div class="card-body">
    <h2 class="card-title text-2xl font-bold">{name}</h2>
    <p className='text-gray-500 font-bold'>Price: ${price}</p>
    <div class="card-actions justify-center">
      <button class="btn btn-primary text-white font-bold">Buy now</button>
    </div>
  </div>
</div>
  )
}

export default Card;