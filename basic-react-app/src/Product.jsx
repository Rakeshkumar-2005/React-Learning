import "./Product.css";

function Product({title,price}){
  return(
    <div className="Product.title">
      <h1>{title}</h1>
      <h4>Price : {price}</h4>
      { price>30000? <p>"Discount of 5%"</p> :null}
    </div>
  );
}

export default Product;