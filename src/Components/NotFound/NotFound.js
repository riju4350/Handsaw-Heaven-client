import React from 'react'
import notFound from "../../images/dribbble_1.gif";
export default function NotFound() {
  return (
   <div className='h-screen'>
     <div className='flex justify-center'>
      <img src={notFound} alt="not found img"/>
    </div>
    <div className='flex justify-center z-50 mt-[-15%]'><h1 className='text-4xl lg:text-7xl font-bold text-orange-500'>Page Not Found</h1></div>
   </div>
  )
}
