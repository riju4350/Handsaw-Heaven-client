import React, { useEffect, useState } from 'react';
import quote from '../../images/quote3.svg';
import Review from './Review';

const Testimonials = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[]);
  return (
    <div className='mt-12 mx-10'>
    <div className='flex justify-between'>
    <div>
    <h1 className='text-2xl font-bold text-primary'>Testimonial</h1>
    <p className='text-4xl font-bold'>What Our Customer Says</p>
    </div>
    <div>
        <img src={quote} className='w-24 lg:w-48' alt=''/>
    </div>
    </div>      
    <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {reviews.map(review=><Review key={review._id} review={review}></Review> )}
    </div>
    
    </div>
  )
}

export default Testimonials;