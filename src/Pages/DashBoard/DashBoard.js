import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <h2 className="text-7xl font-bold text-slate-200 text-center ">
          Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        {!admin && (
          <ul class="menu p-4 overflow-y-auto w-80 bg-slate-100 text-base-content">
            <li>
              <Link to="myorders">My Orders</Link>
            </li>
            <li>
              <Link to="addreview">Add A Review</Link>
            </li>
            <li>
              <Link to="myprofile">My Profile</Link>
            </li>
          </ul>
        )}
        {admin && (
          <ul class="menu p-4 overflow-y-auto w-80 bg-slate-100 text-base-content">
            <li>
              <Link to="myprofile">My Profile</Link>
            </li>
            <li>
              <Link to="manageorder">Manage All Orders</Link>
            </li>
            <li>
              <Link to="addaproduct">Add A Product</Link>
            </li>
            <li>
              <Link to="manageaproduct">Manage A Product</Link>
            </li>
            <li>
              <Link to="makeAdmin">Make Admin</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
export default Dashboard;

{
  /* */
}
