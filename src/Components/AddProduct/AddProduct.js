import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../../Components/Loading/Loading";

export default function AddProduct() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //   const [user, loading] = useAuthState(auth);

  //   if (loading) {
  //     return <Loading></Loading>;
  //   }

  const onSubmit = (data) => {
    const { name, img, discription, price, maximum, minimum } = data;
    const product = {
      name,
      img,
      discription,
      price,
      maximum,
      minimum,
    };
    console.log(product);

    fetch(`https://vast-temple-08700.herokuapp.com/addProduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          alert("Successfully Product Added");
        }
      });
  };
  return (
    <div className="flex justify-center items-center my-10 ">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl font-bold text-center">Add Product</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="product name"
                class="input input-bordered w-full max-w-xs "
                {...register("name", {
                  required: {
                    value: true,
                  },
                })}
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Product Image Link</span>
              </label>
              <input
                type="text"
                name="img"
                placeholder="product image link"
                class="input input-bordered w-full max-w-xs"
                {...register("img", {
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
                <span class="label-text">Discription</span>
              </label>
              <input
                type="text"
                name="discription"
                placeholder="discription"
                class="input input-bordered w-full max-w-xs"
                {...register("discription", {
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
                <span class="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="product price"
                class="input input-bordered w-full max-w-xs"
                {...register("price", {
                  required: {
                    value: true,
                    message: "This field must be filled",
                  },
                })}
              />
              <label class="label">
                {errors.price?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Maximum Quantity</span>
              </label>
              <input
                type="number"
                name="maximum"
                placeholder="maximum quantity"
                class="input input-bordered w-full max-w-xs"
                {...register("maximum", {
                  required: {
                    value: true,
                    message: "This field must be filled",
                  },
                })}
              />
              <label class="label">
                {errors.maximum?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.maximum.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Minimum Quantity</span>
              </label>
              <input
                type="number"
                name="minimum"
                placeholder="minimum quantity"
                class="input input-bordered w-full max-w-xs"
                {...register("minimum", {
                  required: {
                    value: true,
                    message: "This field must be filled",
                  },
                })}
              />
              <label class="label">
                {errors.minimum?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.minimum.message}
                  </span>
                )}
              </label>
            </div>
            <input
              type="submit"
              className="btn btn-primary w-full max-w-xs my-5 font-bold"
              value="Add Product"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
