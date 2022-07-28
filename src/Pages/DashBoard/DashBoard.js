import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard= () => {
  return (
    <div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    <li><Link to="/addProduct">Add Product</Link></li>
    <li><Link to="/manageProduct">Remove Product</Link></li>
    <li><Link to="/myItems">My Orders</Link></li>
    </ul>
  </div>
</div>
  )
}
export default Dashboard;