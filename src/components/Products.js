/* eslint-disable jsx-a11y/anchor-is-valid */
import productsData from "../Products-data.json";
import Product from "./Product.js";
import { useState } from "react";
function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const productsList = productsData
    // eslint-disable-next-line
    .filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })
    .map((product) => {
      return <Product key={product.id} product={product} />;
    });
  return (
    <>
      <form className="text-center py-4">
        <input
          type="text"
          className="placeholder-gray-800 focus:outline-none bg-gray-200 text-gray-800 w-2/4 py-2 px-3 font-poppins rounded-md"
          placeholder="Filter"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </form>
      <div className=" products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-12 gap-20">
        {productsList}
      </div>
    </>
  );
}
export default Products;
