import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully made an admin");
      });
  };
  return (
    <tr>
      <td className="text-3xl ">*</td>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn bg-green-500">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn bg-red-500">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
