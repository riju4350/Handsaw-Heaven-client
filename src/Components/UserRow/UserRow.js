import React from "react";
// import { toast } from "react-toastify";

const UserRow = ({ user }) => {
  const { _id, email, role } = user;
  const makeAdmin = () => {
    fetch(`https://vast-temple-08700.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        // console.log(res);
        if (res.status === 403) {
          alert("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Successfully made an admin");
          // toast.success("Successfully made an admin");
        }
      });
  };
  const removeUser = (id) => {
    console.log(id);
    fetch(`https://vast-temple-08700.herokuapp.com/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          alert("Successfully removed user");
        }
      });
  };
  return (
    <tr>
      <td className="text-3xl ">*</td>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-success bg-green-500">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button
          class="btn btn-error bg-red-500"
          onClick={() => {
            removeUser(_id);
          }}
        >
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
