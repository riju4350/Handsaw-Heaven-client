import React from 'react';

const Bsummary = () => {
  return (
    <div className='flex justify-center items-center my-10 '>
        <div class="stats stats-vertical lg:stats-horizontal shadow p-5">
  
  <div class="stat">
    <div class="stat-title  text-xl text-primary font-bold">Sells</div>
    <div class="stat-value text-4xl">$131K</div>
    <div class="stat-desc text-xl text-primary font-bold">Jan 1st - Feb 1st</div>
  </div>
  
  <div class="stat">
    <div class="stat-title  text-xl text-primary font-bold">Happy Customer</div>
    <div class="stat-value text-4xl">8,536</div>
    <div class="stat-desc text-xl text-primary font-bold">Happy by our service</div>
  </div>
  
  <div class="stat">
    <div class="stat-title text-xl text-primary font-bold">New Customers</div>
    <div class="stat-value text-4xl">4,200</div>
    <div class="stat-desc text-xl text-primary font-bold">↗︎ 400 (22%)</div>
  </div>
  
  <div class="stat">
    <div class="stat-title text-xl text-primary font-bold">New Orders</div>
    <div class="stat-value text-4xl">1,200</div>
    <div class="stat-desc text-xl text-primary font-bold">↗︎90 (14%)</div>
  </div>
  
</div>
    </div>
  )
}

export default Bsummary;