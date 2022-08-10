import React from "react";

const AddReviews = () => {
  const addReview = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const img = event.target.link.value;
    const description = event.target.desc.value;
    const country = event.target.country.value;
    const ratings = event.target.rating.value;

    const review = {
      name,
      img,
      description,
      country,
      ratings,
    };
    // console.log(review);
    fetch("https://vast-temple-08700.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="my-5">
      <div class="hero min-h-screen">
        <div class="hero-content">
          <div class="card w-full lg:w-96 shadow-2xl bg-base-100">
            <div class="card-body">
              <h1 className="text-2xl font-bold text-center">Add Review</h1>
              <form onSubmit={addReview}>
                <div class="form-control ">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control ">
                  <label class="label">
                    <span class="label-text">Image Link</span>
                  </label>
                  <input
                    type="text"
                    name="link"
                    placeholder="Image Link"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control ">
                  <label class="label">
                    <span class="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    name="desc"
                    placeholder="Description"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control ">
                  <label class="label">
                    <span class="label-text">Country</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control ">
                  <label class="label">
                    <span class="label-text">Ratings</span>
                  </label>
                  <input
                    type="number"
                    name="rating"
                    placeholder="Ratings"
                    class="input input-bordered"
                  />
                </div>
                <input
                  type="submit"
                  value="Add review"
                  className="btn btn-primary w-full max-w-xs mt-5"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;

{
  /* <div class="form-control">
  <label class="label">
    <span class="label-text">Email</span>
  </label>
  <input type="text" placeholder="email" class="input input-bordered" />
</div>; */
}
