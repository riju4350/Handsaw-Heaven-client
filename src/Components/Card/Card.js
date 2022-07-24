import React from 'react';
import drill from '../../images/drill.png';

const Card = ({children}) => {
  return (
    <div class="card max-w-lg bg-base-100 shadow-xl">
  {/* <figure><img src="https://i.ibb.co/q5MvccV/drill.png" alt="Shoes" /></figure> */}
  <figure><img src={drill} alt="Shoes" className='px-10 pt-10' /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary text-white font-bold">{children}</button>
    </div>
  </div>
</div>
  )
}

export default Card;