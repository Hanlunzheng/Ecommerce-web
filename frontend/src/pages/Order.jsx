import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Order = () => {
  const { products, currency, cartItems } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]); // data stored in the cartPage

  useEffect(() => {
    // console.log("carItems", cartItems);

    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    // console.log(tempData);
    setCartData(tempData);
    // console.log(cartData);
  }, [cartItems]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl ">
        <Title text1={"MY"} text2={"ORDER"} />
      </div>
      <div className="">
        <div className="">
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );
            return (
              <div
                className="py-4 border-t border-b text-gray grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5] items-center gap-4"
                key={index}
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={productData.image[0]}
                    alt=""
                  />
                  <div className="">
                    <p className="text-xs sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p className>${productData.price}</p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                        {item.size}
                      </p>
                      <p>{item.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* {cartData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image} alt="" />
            </div>
            <p className="sm:text-base font-medium">{item.name}</p>
            <div className="flex items-center gap-4 mt-2 text-base text-gray-700">
              <p>Quantity : 1</p>
              <p>Size: M</p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Order;
