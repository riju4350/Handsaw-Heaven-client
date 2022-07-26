import React, { useEffect, useState } from "react";
import UserRow from "../UserRow/UserRow";
// import { useQuery } from "react-query/build/cjs/packages/react-query/src";

const Users = () => {
  const [users, setUsers] = useState([]);
  // const {
  //   data: users,
  //   isLoading,
  //   refetch,
  // } = useQuery("users", () =>
  //   fetch("https://vast-temple-08700.herokuapp.com/user", {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   }).then((res) => res.json())
  // );
  // if (isLoading) {
  //   return <Loading></Loading>;
  // }

  useEffect(() => {
    fetch("https://vast-temple-08700.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold">All users{users.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user._id} user={user}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
