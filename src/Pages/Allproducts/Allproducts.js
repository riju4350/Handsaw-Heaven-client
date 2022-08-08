import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="mx-10 mb-12">
      <div className="py-16 px-10">
        <h3 className="text-2xl font-bold text-primary">Products</h3>
        <h1 className="text-4xl font-bold">Our Products Are Here</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Card key={product._id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
