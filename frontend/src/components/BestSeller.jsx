import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      // Filter all products where bestseller is true
      setBestSellerProducts(
        products.filter((product) => product.bestseller === true)
      );
    }
  }, [products]);

  console.log(bestSellerProducts);
  return (
    <div className="my-10">
      {/* best seller text */}
      <div className="flex flex-col justify-center items-center gap-4 ">
        <Title text1={"Best"} text2={"Seller"} />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
        </p>
      </div>
      {/* best seller produsts */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6 mt-10">
        {bestSellerProducts.map((item) => (
          <ProductItem
            id={item.id}
            price={item.price}
            name={item.name}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
