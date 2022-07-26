import React from 'react'
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

export default function Login() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  if(user){
    console.log(user);
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-2xl font-bold text-center">Login</h2>
    {/* react hook form */}
    <form onSubmit={handleSubmit(onSubmit)}>
      <input  />
      
      
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required</p>}

      <input {...register("mail", { required: "Email Address is required" })} />
      <p>{errors.mail?.message}</p>
      
      <input type="submit" />
    </form>
    <div class="divider">OR</div>
    <button onClick={()=>{signInWithGoogle()}}class="btn btn-outline btn-primary">Continue with Google</button>
  </div>
</div>
    </div>
  )
}

{/* <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>
  </label>
  <input type="email" name='email' placeholder="email" class="input input-bordered w-full max-w-xs"
 {...register("email", { required: true })} />
  <label class="label">
    {/* <span class="label-text-alt">error message</span> 
    {errors.email?.type === 'required' && "Email is required"}
  </label>
</div> */}