import { useState } from 'react';
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom"
export function Product({ product, id, onAddCart }) {


  // true  = visible => block
  // false = hide  => none
  const [show, setShow] = useState(true);
  const summaryStyle = {
    display: show ? "block" : "none"
  };
  //terinary operator => 
  //single line if else statement => condition ? "if condition is true" : "if condition is false"
  const styles = {
    //rating > 4.5 > green  else < red
    color: product.rating > 4.5 ? "green" : "red"
  };
  const navigate = useNavigate()

  return (
    <div className='product-container'>
      <img className='product-poster' src={product.poster} alt={product.name} />
      <div className='product-spec'>
        <h3 className='product-name'>{product.name} - {id}</h3>
        <p style={styles} className='product-rating'>⭐{product.rating}</p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle Description</button>
      <button onClick={() => navigate(`/products/${id}`)}>Info</button>
      {/* conditional Styling */}
      {/* <p style={summaryStyle} className='product-summary'>{product.summary}</p> */}
      {/* conditional rendering */}
      {show ? <p className='product-summary'>{product.summary}</p> : null}
      <div className='priceStyle'>
        Price: <p className='product-price'>  {product.price}</p>
        <button onClick={() => onAddCart(product)}>Add to Cart</button>
      </div>
      <Counter />
    </div>
  );
}
