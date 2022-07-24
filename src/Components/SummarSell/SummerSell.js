import React from 'react';
import bannerMan2 from '../../images/bannerMan-2.png';
import bg2 from '../../images/bg1.jpg';
// import appointment from '../../assets/images/appointment.png'
// import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';

const MakeAppointment = () => {
  return (
    <section style={{background:`url(${bg2})`}} className='flex justify-center items-center mt-[100px] px-16'>
        <div className='flex-1 hidden lg:block'>
            <img src={bannerMan2} className="mt-[-100px] ml-[100px]" style={{width:"300px"}} alt='doctorImage'/>
        </div>
        <div className='flex-1 p-5'>
            <h1 className='text-2xl text-primary font-bold'>Summer Sell</h1>
            <h3 className='text-3xl text-white my-4 font-bold'>Get 30% off in every product</h3>
            <p className='mb-8 text-white'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <button class="btn btn-primary text-white font-bold">Buy Now</button>
        </div>
    </section>
  )
}

export default MakeAppointment;