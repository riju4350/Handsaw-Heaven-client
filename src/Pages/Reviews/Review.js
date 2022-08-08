import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{review.description}</p>
        <div className="flex  items-center mt-4">
          <img src={review.img} alt="" />
          <div className="ml-4 font-bold">
            <h2 className="font-bold text-xl">{review.name}</h2>
            <p>{review.country}</p>
            <p>ratings: {review.ratings}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
