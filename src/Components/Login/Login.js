import React from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

   return (
    <div className='h-screen flex justify-center items-center my-10'>          
  <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
  <h1 className='text-3xl font-bold text-center py-5'>Login</h1>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div class="form-control w-full max-w-xs">
    <label class="label">
    <span class="label-text font-bold">Email</span>   
    </label>
    <input type="email"  placeholder="email" class="input input-bordered w-full max-w-xs" 
    {...register("email",{ 
      required: {value: true, message: "Email is Required"},
      pattern: {value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Provide a valid email'}})}/>
    <label class="label">
    {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}  
    </label>
    </div>    
    <div class="form-control w-full max-w-xs">
        <label class="label">
        <span class="label-text font-bold">Password</span>
        </label>
        <input type="password" placeholder="password" class="input input-bordered w-full max-w-xs" 
        {...register("password", 
        {
          required: {
            value: true,
            message: "Password is Required"
          },
          minLength: {
          value: 6,
          message: 'at least 6 charecter'
        }
        })}/>
        <label class="label">
        {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
        </label>
        {/* {signinError} */}
        </div>    
        <div class="card-actions justify-center mb-5">
        <input type="submit" value="Login" class="btn btn-primary font-bold mt-5 w-full" />
        </div>    
  </form>
  <div><p className=''><small className='font-bold'>Forget Password? <button onClick={""} className='text-primary'>Reset Password</button></small></p></div>
  <div><p className=''><small className='font-bold'>New in Doctors Portal? <Link to="/signup" className='text-primary'>Create An Account</Link></small></p></div>
  <div class="divider">OR</div>
  <button onClick={()=>{}}class="btn btn-outline btn-ghost btn-primary font-bold">Continue with Google</button>
  </div>
</div>

   
</div>
  )
}

export default Login;

// import React from 'react';
// import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import {sendPasswordResetEmail } from "firebase/auth";
// import auth from '../../firebase.init';
// import { useForm } from "react-hook-form";
// import Loading from '../../Components/Loading/Loading';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const { register, formState: { errors }, handleSubmit } = useForm();
//     const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
//     const [
//       signInWithEmailAndPassword,
//       user,
//       loading,
//       error,
//     ] = useSignInWithEmailAndPassword(auth);

//     const location = useLocation();
//     const navigate = useNavigate();
    
//     const from = location.state?.from?.pathname || "/";

//     let signinError;   
  
//     if(loading || gLoading){
//       // return <button className='btn loading'>loading</button>
//       return <Loading></Loading>
//     }
    
//     if(error || gError){
//        signinError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
//     }

//     if(user || gUser){
//        navigate(from,{replace: true} )
//     }

//     const resetPassword=()=>{    
//     // sendPasswordResetEmail(auth, user.email)
//     // .then(() => {
//    console.log("reset email send")
//   // })
//     }

//     const onSubmit = (data) => {
//       console.log(data);
//       signInWithEmailAndPassword(data.email, data.password);
//     }
//   return (
//     <div className='flex justify-center items-center h-screen'>
//         <div class="card w-96 bg-base-100 shadow-xl">
//         <div class="card-body">
//           <h2 class="text-center text-2xl font-bold">Login</h2>
//          <form onSubmit={handleSubmit(onSubmit)}>
//          <div class="form-control w-full max-w-xs">
//         <label class="label">
//         <span class="label-text">Email</span>
//         </label>
//         <input type="email" placeholder="Type here" class="input input-bordered w-full max-w-xs" 
//         {...register("email", 
//         {
//           required: {
//             value: true,
//             message: "Email is Required"
//           },
//           pattern: {
//           value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
//           message: 'provide a valide email' // JS only: <p>error message</p> TS only support string
//         }
//         })}/>
//         <label class="label">
//         {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
//         {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
//         </label>
//         </div>
//          <div class="form-control w-full max-w-xs">
//         <label class="label">
//         <span class="label-text">Password</span>
//         </label>
//         <input type="password" placeholder="password" class="input input-bordered w-full max-w-xs" 
//         {...register("password", 
//         {
//           required: {
//             value: true,
//             message: "Password is Required"
//           },
//           minLength: {
//           value: 6,
//           message: 'at least 6 charecter' // JS only: <p>error message</p> TS only support string
//         }
//         })}/>
//         <label class="label">
//         {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
//         {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
//         </label>
//         {signinError}
//         </div>     
//           <input type="submit" className='btn w-full max-w-xs my-5 font-bold' value="Login"/>
//          </form>
//          <div><p className=''><small className='font-bold'>Forget Password? <button onClick={resetPassword} className='text-secondary'>Reset Password</button></small></p></div>
//          <div><p className=''><small className='font-bold'>New in Doctors Portal? <Link to="/signup" className='text-secondary'> Create An Account</Link> </small></p></div>
//           <div class="divider">OR</div>
//           <button onClick={()=>{signInWithGoogle()}}class="btn btn-outline btn-ghost">Continue with Google</button>
         
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Login;