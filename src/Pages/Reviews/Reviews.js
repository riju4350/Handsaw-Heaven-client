import React from 'react';
import Person1 from '../../images/people1.png';
import Person2 from '../../images/people2.png';
import Person3 from '../../images/people3.png';
import quote from '../../images/quote.svg';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "James Stark",
            img: Person1,
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            country: "USA"

        },
        {
            _id: 2,
            name: "Ema Wattson",
            img: Person2,
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            country: "USA"

        },
        {
            _id: 3,
            name: "Ema Stone",
            img: Person3,
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            country: "USA"

        }
]
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
        {reviews.map(review=> <Review key={review._id} review={review}></Review> )}
    </div>
    
    </div>
  )
}

export default Testimonials;