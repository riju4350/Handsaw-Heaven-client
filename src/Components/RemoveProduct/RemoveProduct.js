import React, { useEffect, useState } from "react";
const RemoveProduct = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("https://vast-temple-08700.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const removeProductHandler = (id) => {
    console.log(id);
    fetch(`https://vast-temple-08700.herokuapp.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = products.filter((product) => product._id !== id);
        setProducts(remaining);
        if (data.acknowledged === true) {
          alert("Successfully removed product");
        }
      });
  };

  return (
    <div className="mx-10 mb-12">
      <div className="py-16 px-10">
        <h3 className="text-2xl font-bold text-primary">Products</h3>
        <h1 className="text-4xl font-bold">Remove Products</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <div key={product._id} class="card max-w-lg bg-base-100 shadow-xl">
            <figure>
              <img
                src={product.img}
                alt="Shoes"
                className="px-10 pt-10 lg:h-[250px]"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-2xl font-bold">{product.name}</h2>
              <div className="font-bold text-gray-500  mb-5">
                <p>Discription: {product.discription}</p>
                <p>Price: ${product.price}</p>
                <p>Maximum: {product.maximum}</p>
                <p>Minimum: {product.minimum}</p>
              </div>
              <div class="card-actions justify-center">
                <button
                  class="btn btn-error bg-red-600 text-white font-bold"
                  onClick={() => {
                    removeProductHandler(product._id);
                  }}
                >
                  Remove Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemoveProduct;
