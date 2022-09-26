function Product(props) {
  return (
    <div className="item justify-self-center">
      <img src={props.product.image} className="bg-cover img" alt="" />
      <div className="text-center py-3 font-poppins">
        <h1 className="text-lg title">{props.product.title}</h1>
        <a href="f" className="block">
          <span className="text-sm text-red-400">{props.product.category}</span>
        </a>
        <span className="block py-3">
          $<span className="text-md">{props.product.price}</span>
        </span>
        <button className="border-2 px-8 py-1 bg-yellow-400 border rounded-md">
          Buy Now
        </button>
      </div>
    </div>
  );
}
export default Product;
