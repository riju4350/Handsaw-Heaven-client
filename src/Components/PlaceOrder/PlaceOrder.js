import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import {useLocation,useNavigate} from "react-router-dom";
import auth from '../../firebase.init';

const PlaceOrder = () => {
    const { register,formState: { errors },  handleSubmit } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const onSubmit = data => console.log(user,data);
    const location = useLocation();
    const navigate = useNavigate();
    
    const from = location.state?.from?.pathname || "/";

    let signinError;   
  return (   
   <div className='flex justify-center items-center h-screen'>
      <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-2xl font-bold text-center">Login</h2>
    {/* react hook form */}
    <form onSubmit={handleSubmit(onSubmit)}>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Name</span>
  </label>
  <input type="text" name='name' value={user?.displayName} disabled class="input input-bordered w-full max-w-xs" 
   {...register("name",
     { required: {
      value: true,
    }})}/>
  </div>
  <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>
  </label>
  <input type="email" name='email' placeholder="Your Email" value={user?.email}  disabled class="input input-bordered w-full max-w-xs"
    {...register("email",
     { required: {
      value: true,
    }})} />
  <label class="label">
    {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
  </label>
  </div>
  <div class="form-control w-full max-w-xs">
        <label class="label">
        <span class="label-text">Address</span>
        </label>
        <input type="text" placeholder="Address" name='address' class="input input-bordered w-full max-w-xs" 
        {...register("address", 
        {
          required: {
            value: true,
            message: "Address is Required"
          }
        })}/>
        <label class="label">
        {errors.address?.type === 'required' && <span class="label-text-alt text-red-500">{errors.address.message}</span>}
        </label>
        {signinError}
  </div>        
  <div class="form-control w-full max-w-xs">
        <label class="label">
        <span class="label-text">Phone</span>
        </label>
        <input type="number" placeholder="phone" name='phone' class="input input-bordered w-full max-w-xs" 
        {...register("phone", 
        {
          required: {
            value: true,
            message: "Phone Number is Required"
          },
          minLength: {
            value: 11,
            message: 'should be 11 numbers ' // JS only: <p>error message</p> TS only support string
          },
          maxLength: {
            value: 11,
            message: 'should be 11 numbers' // JS only: <p>error message</p> TS only support string
          }
        })}/>
        <label class="label">
        {errors.phone?.type === 'required' && <span class="label-text-alt text-red-500">{errors.phone.message}</span>}
        {errors.phone?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.phone.message}</span>}
        {errors.phone?.type === 'maxLength' && <span class="label-text-alt text-red-500">{errors.phone.message}</span>}
        </label>
        {signinError}
  </div>
  <div class="form-control w-full max-w-xs">
        <label class="label">
        <span class="label-text">Order Quantity</span>
        </label>
        <input type="number" placeholder="order quantity" name='order' class="input input-bordered w-full max-w-xs" 
        {...register("order", 
        {
          required: {
            value: true,
            message: "order Number is Required"
          },
          min: {
            value: 1000,
            message: 'at least 1000 products' // JS only: <p>error message</p> TS only support string
          },
          max: {
            value: 100000,
            message: 'you can not buy above 100000' // JS only: <p>error message</p> TS only support string
          }
        })}/>
        <label class="label">
        {errors.order?.type === 'required' && <span class="label-text-alt text-red-500">{errors.order.message}</span>}
        {errors.order?.type === 'min' && <span class="label-text-alt text-red-500">{errors.order.message}</span>}
        {errors.order?.type === 'max' && <span class="label-text-alt text-red-500">{errors.order.message}</span>}
        </label>
        {signinError}
  </div>        
  <input type="submit" className='btn btn-primary w-full max-w-xs my-5 font-bold' value="Login"/>
    </form>
  </div>
</div>
    </div>
  )
}
export default PlaceOrder;


{/* <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} />
      {errors.name?.type === 'required' && "User Name Not Found"}      
      <input {...register("email", { required: "Email Address is required" })} />
      <p>{errors.email?.message}</p>
      <input {...register("address", { required: true })} />
      {errors.address?.type === "required" && <span>{errors.address.message}</span>}
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required</p>}
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required</p>}      
      <input type="submit" />
    </form> */}