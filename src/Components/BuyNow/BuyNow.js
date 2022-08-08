import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaceOrder from "../PlaceOrder/PlaceOrder";

const BuyNow = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { name, img, price, discription, maximum, minimum } = product;
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  // console.log(product);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 max-w-7xl mx-auto px-10 lg:px-24 py-10 lg:py-24">
      <div className="productInfo">
        <div class="card max-w-lg bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="Shoes" className="px-10 pt-10 lg:h-[250px]" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-2xl font-bold">{name}</h2>
            <div className="font-bold text-gray-500  mb-5">
              <p>Discription: {discription}</p>
              <p>Price: ${price}</p>
              <p>Maximum: {maximum}</p>
              <p>Minimum: {minimum}</p>
            </div>
          </div>
        </div>
      </div>
      <PlaceOrder></PlaceOrder>
    </div>
  );
};

export default BuyNow;
