import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

export default function PlaceOrder() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    const { name, email, address, phone, orderQuantity } = data;
    const orders = {
      name,
      email,
      address,
      phone,
      orderQuantity,
    };
    console.log(orders);

    fetch("https://vast-temple-08700.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          alert("Successfully placed an order");
        }
      });
  };
  return (
    // hook form e vul ache purata korte hobe
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl font-bold text-center">Place Order</h2>

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
                placeholder="Your Email"
                value={user?.email}
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
                <span class="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                name="address"
                class="input input-bordered w-full max-w-xs"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is Required",
                  },
                })}
              />
              <label class="label">
                {errors.address?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.address.message}
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
                placeholder="phone"
                name="phone"
                class="input input-bordered w-full max-w-xs"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone Number is Required",
                  },
                  minLength: {
                    value: 11,
                    message: "should be 11 numbers ", // JS only: <p>error message</p> TS only support string
                  },
                  maxLength: {
                    value: 11,
                    message: "should be 11 numbers", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label class="label">
                {errors.phone?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
                {errors.phone?.type === "minLength" && (
                  <span class="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
                {errors.phone?.type === "maxLength" && (
                  <span class="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Order Quantity</span>
              </label>
              <input
                type="number"
                placeholder="order quantity"
                name="order"
                class="input input-bordered w-full max-w-xs"
                {...register("orderQuantity", {
                  required: {
                    value: true,
                    message: "order quantity is Required",
                  },
                  min: {
                    value: 1000,
                    message: "at least 1000 products", // JS only: <p>error message</p> TS only support string
                  },
                  max: {
                    value: 100000,
                    message: "you can not buy above 100000", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label class="label">
                {errors.order?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.order.message}
                  </span>
                )}
                {errors.order?.type === "min" && (
                  <span class="label-text-alt text-red-500">
                    {errors.order.message}
                  </span>
                )}
                {errors.order?.type === "max" && (
                  <span class="label-text-alt text-red-500">
                    {errors.order.message}
                  </span>
                )}
              </label>
            </div>
            <input
              type="submit"
              className="btn btn-primary w-full max-w-xs my-5 font-bold"
              value="Order"
            />
          </form>
        </div>
      </div>
    </div>

    ////////upside code login//////////
    ////////downside code place order///////////

    // <div className="flex justify-center items-center h-screen">
    //   <div class="card w-96 bg-base-100 shadow-xl">
    //     <div class="card-body">
    //       <h2 class="text-2xl font-bold text-center">Place Order</h2>

    //       <form onSubmit={handleSubmit(onSubmit)}>
    //         <div class="form-control w-full max-w-xs">
    //           <label class="label">
    //             <span class="label-text">Name</span>
    //           </label>
    //           <input
    //             type="text"
    //             name="name"
    //             value={user?.displayName}
    //             disabled
    //             class="input input-bordered w-full max-w-xs"
    //             {...register("name", {
    //               required: {
    //                 value: true,
    //               },
    //             })}
    //           />
    //         </div>
    //         <div class="form-control w-full max-w-xs">
    //           <label class="label">
    //             <span class="label-text">Email</span>
    //           </label>
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="Your Email"
    //             value={user?.email}
    //             disabled
    //             class="input input-bordered w-full max-w-xs"
    //             {...register("email", {
    //               required: {
    //                 value: true,
    //               },
    //             })}
    //           />
    //         </div>
    //         <div class="form-control w-full max-w-xs">
    //           <label class="label">
    //             <span class="label-text">Address</span>
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="Address"
    //             name="address"
    //             class="input input-bordered w-full max-w-xs"
    //             {...register("address", {
    //               required: {
    //                 value: true,
    //                 message: "Address is Required",
    //               },
    //             })}
    //           />
    //           <label class="label">
    //             {errors.address?.type === "required" && (
    //               <span class="label-text-alt text-red-500">
    //                 {errors.address.message}
    //               </span>
    //             )}
    //           </label>
    //         </div>
    //         <div class="form-control w-full max-w-xs">
    //           <label class="label">
    //             <span class="label-text">Phone</span>
    //           </label>
    //           <input
    //             type="number"
    //             placeholder="phone"
    //             name="phone"
    //             class="input input-bordered w-full max-w-xs"
    //             {...register("phone", {
    //               required: {
    //                 value: true,
    //                 message: "Phone Number is Required",
    //               },
    //               minLength: {
    //                 value: 11,
    //                 message: "should be 11 numbers ", // JS only: <p>error message</p> TS only support string
    //               },
    //               maxLength: {
    //                 value: 11,
    //                 message: "should be 11 numbers", // JS only: <p>error message</p> TS only support string
    //               },
    //             })}
    //           />
    //           <label class="label">
    //             {errors.phone?.type === "required" && (
    //               <span class="label-text-alt text-red-500">
    //                 {errors.phone.message}
    //               </span>
    //             )}
    //             {errors.phone?.type === "minLength" && (
    //               <span class="label-text-alt text-red-500">
    //                 {errors.phone.message}
    //               </span>
    //             )}
    //             {errors.phone?.type === "maxLength" && (
    //               <span class="label-text-alt text-red-500">
    //                 {errors.phone.message}
    //               </span>
    //             )}
    //           </label>
    //         </div>
    //         <div class="form-control w-full max-w-xs">
    //           <label class="label">
    //             <span class="label-text">Order Quantity</span>
    //           </label>
    //           <input
    //             type="number"
    //             placeholder="order quantity"
    //             name="order"
    //             class="input input-bordered w-full max-w-xs"
    //             {...register("order", {
    //               required: {
    //                 value: true,
    //                 message: "order Number is Required",
    //               },
    //               min: {
    //                 value: 1000,
    //                 message: "at least 1000 products", // JS only: <p>error message</p> TS only support string
    //               },
    //               max: {
    //                 value: 100000,
    //                 message: "you can not buy above 100000", // JS only: <p>error message</p> TS only support string
    //               },
    //             })}
    //           />
    //           <label class="label">
    //             {errors.order?.type === "required" && (
    //               <span class="label-text-alt text-red-500">
    //                 {errors.order.message}
    //               </span>
    //             )}
    //             {errors.order?.type === "min" && (
    //               <span class="label-text-alt text-red-500">
    //                 {errors.order.message}
    //               </span>
    //             )}
    //             {errors.order?.type === "max" && (
    //               <span class="label-text-alt text-red-500">
    //                 {errors.order.message}
    //               </span>
    //             )}
    //           </label>
    //         </div>
    //         <input
    //           type="submit"
    //           className="btn btn-primary w-full max-w-xs my-5 font-bold"
    //           value="Order"
    //         />
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}

// <div className="flex justify-center items-center h-screen">
//       <div class="card w-96 bg-base-100 shadow-xl">
//         <div class="card-body">
//           <h2 class="text-2xl font-bold text-center">Place Order</h2>

//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div class="form-control w-full max-w-xs">
//               <label class="label">
//                 <span class="label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 // value={user?.displayName}
//                 disabled
//                 class="input input-bordered w-full max-w-xs"
//                 {...register("name", {
//                   required: {
//                     value: true,
//                   },
//                 })}
//               />
//             </div>
//             <div class="form-control w-full max-w-xs">
//               <label class="label">
//                 <span class="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 // value={user?.email}
//                 disabled
//                 class="input input-bordered w-full max-w-xs"
//                 {...register("email", {
//                   required: {
//                     value: true,
//                   },
//                 })}
//               />
//             </div>
//             <div class="form-control w-full max-w-xs">
//               <label class="label">
//                 <span class="label-text">Address</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Address"
//                 name="address"
//                 class="input input-bordered w-full max-w-xs"
//                 {...register("address", {
//                   required: {
//                     value: true,
//                     message: "Address is Required",
//                   },
//                 })}
//               />
//               <label class="label">
//                 {errors.address?.type === "required" && (
//                   <span class="label-text-alt text-red-500">
//                     {errors.address.message}
//                   </span>
//                 )}
//               </label>
//             </div>
//             <div class="form-control w-full max-w-xs">
//               <label class="label">
//                 <span class="label-text">Phone</span>
//               </label>
//               <input
//                 type="number"
//                 placeholder="phone"
//                 name="phone"
//                 class="input input-bordered w-full max-w-xs"
//                 {...register("phone", {
//                   required: {
//                     value: true,
//                     message: "Phone Number is Required",
//                   },
//                   minLength: {
//                     value: 11,
//                     message: "should be 11 numbers ", // JS only: <p>error message</p> TS only support string
//                   },
//                   maxLength: {
//                     value: 11,
//                     message: "should be 11 numbers", // JS only: <p>error message</p> TS only support string
//                   },
//                 })}
//               />
//               <label class="label">
//                 {errors.phone?.type === "required" && (
//                   <span class="label-text-alt text-red-500">
//                     {errors.phone.message}
//                   </span>
//                 )}
//                 {errors.phone?.type === "minLength" && (
//                   <span class="label-text-alt text-red-500">
//                     {errors.phone.message}
//                   </span>
//                 )}
//                 {errors.phone?.type === "maxLength" && (
//                   <span class="label-text-alt text-red-500">
//                     {errors.phone.message}
//                   </span>
//                 )}
//               </label>

//             </div>
//             <div class="form-control w-full max-w-xs">
//               <label class="label">
//                 <span class="label-text">Order Quantity</span>
//               </label>
//               <input
//                 type="number"
//                 placeholder="order quantity"
//                 name="order"
//                 class="input input-bordered w-full max-w-xs"
//                 {...register("order", {
//                   required: {
//                     value: true,
//                     message: "order Number is Required",
//                   },
//                   min: {
//                     value: 1000,
//                     message: "at least 1000 products", // JS only: <p>error message</p> TS only support string
//                   },
//                   max: {
//                     value: 100000,
//                     message: "you can not buy above 100000", // JS only: <p>error message</p> TS only support string
//                   },
//                 })}
//               />
//               <label class="label">
//                 {errors.order?.type === "required" && (
//                   <span class="label-text-alt text-red-500">
//                     {errors.order.message}
//                   </span>
//                 )}
//                 {errors.order?.type === "min" && (
//                   <span class="label-text-alt text-red-500">
//                     {errors.order.message}
//                   </span>
//                 )}
//                 {errors.order?.type === "max" && (
//                   <span class="label-text-alt text-red-500">
//                     {errors.order.message}
//                   </span>
//                 )}
//               </label>
//             </div>
//             <input
//               type="submit"
//               className="btn btn-primary w-full max-w-xs my-5 font-bold"
//               value="Order"
//             />
//           </form>
//         </div>
//       </div>
//     </div>
