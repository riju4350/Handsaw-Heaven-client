import React from 'react'
import { useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useForm} from 'react-hook-form';
import { Link,useLocation,useNavigate  } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from "../../Components/Loading/Loading";


export default function Login() {
const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    const navigate = useNavigate();
    
    const from = location.state?.from?.pathname || "/";

    let signinError;   
  
    if(loading || gLoading){
      return <Loading></Loading>
    }
    
    if(error || gError){
       signinError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    if(user || gUser){
       navigate(from,{replace: true} )
    }

    const resetPassword=()=>{    
    // sendPasswordResetEmail(auth, user.email)
    // .then(() => {
   console.log("reset email send")
  // })
    }
    const onSubmit = (data) => {
      console.log(data);
      signInWithEmailAndPassword(data.email, data.password);
    }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-2xl font-bold text-center">Login</h2>
    {/* react hook form */}
    <form onSubmit={handleSubmit(onSubmit)}>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>
  </label>
  <input type="email" name='email' placeholder="Your Email" class="input input-bordered w-full max-w-xs"
    {...register("email",
     { required: {
      value: true,
      message: "Email is Required"
    },
    pattern: {
    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    message: 'Provide a valid email'
  }})} />
  <label class="label">
    {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
  </label>
  </div>

  <div class="form-control w-full max-w-xs">
        <label class="label">
        <span class="label-text">Password</span>
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
          message: 'at least 6 charecter' // JS only: <p>error message</p> TS only support string
        }
        })}/>
        <label class="label">
        {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
        </label>
        {signinError}
  </div>        
  <input type="submit" className='btn btn-primary w-full max-w-xs my-5 font-bold' value="Login"/>
    </form>
    <div><p className=''><small className='font-bold'>Forget Password? <button onClick={resetPassword} className='text-orange-500'>Reset Password</button></small></p></div>
    <div><p className=''><small className='font-bold'>New to Handsaw Heaven? <Link to="/signup" className='text-orange-500'> Create An Account</Link> </small></p></div>
    <div class="divider">OR</div>
    <button onClick={()=>{signInWithGoogle()}}class="btn btn-outline btn-primary">Continue with Google</button>
  </div>
</div>
    </div>
  )
}
