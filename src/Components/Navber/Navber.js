import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navber = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
    const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/blogs">Blogs</Link></li>
    <li><Link to="/about">About</Link></li>        
    {user && (
              <>
                <li><Link to="/addProduct">Add Product</Link></li>
                <li><Link to="/manageProduct">Remove Product</Link></li>
                <li><Link to="/myItems">My Orders</Link></li>
              </>
            )}
    {user? <button className='btn btn-ghost font-bold' onClick={logout}>Logout</button> : <li><Link to="/login">Login</Link></li> }
    {user&&<li><Link to="/dashboard">Dashboard</Link></li> }
    </>
  return (
    <div class="navbar bg-primary px-5 sticky top-0 z-50 ">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to='/' class="btn btn-ghost normal-case text-xl font-bold">Handsaw Heaven</Link>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0 font-bold">
      {menuItems}
    </ul>
  </div>
</div>
  )
}

export default Navber;