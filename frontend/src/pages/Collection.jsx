import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);

  const [sortedOption, setSortedOption] = useState("relavent");

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  //  this will apply category and subcate to filter
  const applyFilter = () => {
    // productCopy will be assigned the copied array,
    // and you cannot reassign productCopy to a different array or value later.However,
    //you can still modify the contents of the productCopy array(e.g., push, pop, modify elements), since const prevents reassignment but does not make the object itself immutable
    let productCopy = products.slice();

    // this function implement search function
    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productCopy);
  };

  // useEffect(() => {
  //   console.log(products);
  // }, []);

  // useEffect(() => {
  //   setFilterProducts(products);
  // }, []);
  useEffect(() => {
    applyFilter();
  }, [subCategory, category, search, showSearch]);

  const handleSortedChange = (event) => {
    setSortedOption(event.target.value);
  };

  // const sortedProducts = [...filterProducts].sort((a, b) => {
  //   if (sortedOption === "low-to-high") {
  //     return a.price - b.price;
  //   } else if (sortedOption === "high-to-low") {
  //     return b.price - a.price;
  //   } else {
  //     return 0;
  //   }
  // });
  // useEffect(() => {
  //   sortedProducts();
  // }, [sortedOption]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter option */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
        </p>
        {/* category filter */}
        <div
          className={`border border-gray-400 pl-5 p-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-800">
            <p className="flex items-center gap-2">
              <input
                onChange={toggleCategory}
                className="w-3"
                type="checkbox"
                value={"Men"}
              />
              MEN
            </p>
            <p className="flex  items-center gap-2">
              <input
                onChange={toggleCategory}
                className="w-3"
                type="checkbox"
                value={"Women"}
              />
              WOMEN
            </p>
            <p className="flex  items-center gap-2">
              <input
                onChange={toggleCategory}
                className="w-3"
                type="checkbox"
                value={"Kids"}
              />
              KID
            </p>
          </div>
        </div>
        {/* TYPE category */}
        <div
          className={`border border-gray-400 pl-5 p-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-800">
            <p className="flex  items-center gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Topwear"}
              />
              TOPWEAR
            </p>
            <p className="flex  items-center gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
              />
              BOTTOMWEAR
            </p>
            <p className="flex  items-center gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
              />
              WINTERWEAR
            </p>
          </div>
        </div>
      </div>
      {/* product list. right size */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* product sort function */}
          <select
            onChange={handleSortedChange}
            value={sortedOption}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relavent">Sort by: Relavant</option>
            <option value="low-to-high">Sort by: Low to High</option>
            <option value="high-to-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* map product */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
