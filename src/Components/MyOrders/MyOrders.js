import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyOrders(data));
    }
  }, [user]);
  return (
    <div>
      <h1>My orders: {myOrders.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Order Quantity</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>{order.orderQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
