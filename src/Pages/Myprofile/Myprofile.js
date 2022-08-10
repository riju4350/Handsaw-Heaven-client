import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../../Components/Loading/Loading";

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  const onSubmit = (data) => {
    const { name, email, education, location, linkdin, phone } = data;
    const profile = {
      name,
      email,
      education,
      phone,
      location,
      linkdin,
    };
    console.log(profile);

    fetch(`https://vast-temple-08700.herokuapp.com/myprofile/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.results.acknowledged === true) {
          alert("Successfully Updated Profile");
        }
      });
  };
  return (
    <div className="flex justify-center items-center my-10 ">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl font-bold text-center">Profile</h2>
          {/* react hook form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={user?.displayName}
                class="input input-bordered w-full max-w-xs bg-slate-300"
                {...register("name", {
                  required: {
                    value: true,
                  },
                })}
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={user?.email}
                placeholder="Your Email"
                class="input input-bordered w-full max-w-xs bg-slate-300"
                {...register("email", {
                  required: {
                    value: true,
                  },
                })}
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Education</span>
              </label>
              <input
                type="text"
                name="education"
                placeholder="Education"
                class="input input-bordered w-full max-w-xs"
                {...register("education", {
                  required: {
                    value: true,
                    message: "This field must be filled",
                  },
                })}
              />
              <label class="label">
                {errors.education?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.education.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="location"
                class="input input-bordered w-full max-w-xs"
                {...register("location", {
                  required: {
                    value: true,
                    message: "This field must be filled",
                  },
                })}
              />
              <label class="label">
                {errors.location?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.location.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Linkdin Profile</span>
              </label>
              <input
                type="text"
                name="linkdin"
                placeholder="Linkdin Profile Link"
                class="input input-bordered w-full max-w-xs"
                {...register("linkdin", {
                  required: {
                    value: true,
                    message: "This field must be filled",
                  },
                })}
              />
              <label class="label">
                {errors.linkdin?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.linkdin.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Phone</span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="phone number"
                class="input input-bordered w-full max-w-xs"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "This field must be filled",
                  },
                })}
              />
              <label class="label">
                {errors.phone?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>
            <input
              type="submit"
              className="btn btn-primary w-full max-w-xs my-5 font-bold"
              value="Add Profile"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
