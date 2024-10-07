import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();

  const { products, currency, cartItems, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [pending, setPending] = useState(true);
  const [firstImage, setFirstImage] = useState();
  const [selectSize, setSelectSize] = useState("");

  const fetchProductData = async () => {
    const foundData = products.find((item) => item._id === productId);
    if (foundData && foundData.image) {
      setProductData(foundData);
      setFirstImage(foundData.image[0]);
    }
    setPending(false);
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  useEffect(() => {
    if (productData) {
      console.log(productData);
    }
  }, [productData]);

  const handleImageChange = (image) => {
    setFirstImage(image);
  };
  const handleSelectSize = (size) => {
    setSelectSize(size);
  };
  if (pending) {
    return <div>Loading...</div>;
  }
  // console.log(productData?.category);

  // console.log(productId);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-100 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between">
            {productData?.image.map((item, index) => (
              <img
                onClick={() => handleImageChange(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink"
                src={item}
                alt={index}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              className="w-full h-auto"
              src={firstImage}
              alt="main product"
            />
          </div>
        </div>

        {/* product info */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl  mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <p className="pl-2">(13)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">${productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => handleSelectSize(item)}
                  className={`border py-2 px-4 bg-gray-200 ${
                    selectSize === item ? "bg-orange-400" : "bg-gray-200"
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData?._id, selectSize)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            Add to Cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original product</p>
            <p>cash on delivery is abailable on this product </p>
            <p>Free return</p>
          </div>
        </div>
      </div>
      {/* desrciption */}
      <div className="mt-20 flex flex-col gap-2">
        <div className="flex gap-2">
          <b className="border px-5 py-3 text-sm">description</b>
          <p className="border px-5 py-3 text-sm">review(13)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>{productData.description}</p>
          <p className="">
            e-commerce webiste display products or services along with detailed
            description
          </p>
        </div>
      </div>
      {/* related section */}
      <RelatedProduct
        category={productData?.category}
        subCategory={productData?.subCategory}
      />
    </div>
  ) : (
    <h1>something went wrong</h1>
  );
};

export default Product;
