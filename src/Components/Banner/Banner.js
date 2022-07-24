import React from "react";
import bannerbg from '../../images/bg1.jpg';

function Banner() {
  return (
    <div class="hero min-h-screen " style={{background:`url(${bannerbg})`}}>
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src='https://i.ibb.co/VJrNjH2/banner-Man-1.png' class="max-w-sm lg:ml-[100px] lg:block hidden" alt="banner1" style={{width:"300px"}}/>
    <div className="text-white">
      <h1 class="text-5xl font-bold">Handsaw Heaven</h1>
      <p class="py-6">The best place to find your tools. Basically it's a heaven for tools</p>
      <button class="btn btn-primary text-white font-bold">Explore more</button>
    </div>
  </div>
</div>
  );
}

export default Banner;

// git add .
// git commit -m "first commit"
// git push

// https://i.ibb.co/Rz2GFJn/banner-Man-2.png