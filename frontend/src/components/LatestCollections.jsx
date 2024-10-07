import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const LatestCollections = () => {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      // Take the first 10 products
      setLatestProducts(products.slice(0, 15));
    }
  }, [products]);

  // console.log(products);
  // console.log(latestProducts);
  return (
    <div className="my-10">
      {/* collection title */}
      <div className="flex flex-col justify-center items-center gap-4">
        <Title text1={"Latest"} text2={"Collection"} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at quia
        </p>
      </div>
      {/* product list */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6 mt-10">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollections;
