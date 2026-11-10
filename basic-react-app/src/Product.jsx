import "./Product.css";

function Product({title,price}){
  let isDiscount = price > 30000;
  let styles = {backgroundColor:isDiscount ?"pink":null};
  return(
    <div className="Product" style={styles}>
      <h1>{title}</h1>
      <h4>Price : {price}</h4>
      {isDiscount ? <p>"Discount of 5%"</p> :null}
    </div>
  );
}

export default Product;