import React from 'react';

const Bsummary = () => {
  return (
    <div>
      <div className='px-10  mt-20'>
        <p className='text-2xl font-bold text-primary'>Summary</p>
        <h1 className='text-4xl font-bold '>Business Summary</h1>
      </div>
      <div className='flex justify-center items-center my-20 '>
        <div class="stats stats-vertical lg:stats-horizontal shadow p-5">
  
  <div class="stat">
    <div class="stat-title  text-lg text-primary font-bold">Sells</div>
    <div class="stat-value text-4xl my-2">$131K</div>
    <div class="stat-desc text-lg text-primary font-bold">Jan 1st - Feb 1st</div>
  </div>
  
  <div class="stat">
    <div class="stat-title  text-lg text-primary font-bold">Happy Customer</div>
    <div class="stat-value text-4xl my-2">8,536</div>
    <div class="stat-desc text-lg text-primary font-bold">Happy by our service</div>
  </div>
  
  <div class="stat">
    <div class="stat-title text-lg text-primary font-bold">New Customers</div>
    <div class="stat-value text-4xl my-2">4,200</div>
    <div class="stat-desc text-lg text-primary font-bold">↗︎ 400 (22%)</div>
  </div>
  
  <div class="stat">
    <div class="stat-title text-lg text-primary font-bold">New Orders</div>
    <div class="stat-value text-4xl my-2">1,200</div>
    <div class="stat-desc text-lg text-primary font-bold">↗︎90 (14%)</div>
  </div>
  
</div>
    </div>
    </div>
  )
}

export default Bsummary;