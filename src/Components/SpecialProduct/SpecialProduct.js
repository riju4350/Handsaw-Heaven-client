import React, { useEffect, useState } from "react";
import SCard from "../SCard/SCard";

const SpecialProduct = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("https://vast-temple-08700.herokuapp.com/special")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="py-16 px-10">
      <div className="pb-16">
        <h3 className="text-2xl font-bold text-primary">Special</h3>
        <h1 className="text-4xl font-bold">Our Special Products</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card) => (
          <SCard key={card._id} card={card}></SCard>
        ))}
      </div>
    </div>
  );
};

export default SpecialProduct;
