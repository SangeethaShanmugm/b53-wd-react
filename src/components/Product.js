import { useState } from 'react';
import { Counter } from "../Counter";
import { useNavigate } from "react-router-dom"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';

export function Product({ product, id, onAddCart, deleteButton, editButton }) {


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

      <IconButton aria-label="toggleBtn" color="primary" onClick={() => setShow(!show)}>
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>


      <IconButton aria-label="infoBtn" color="primary" onClick={() => navigate(`/products/${id}`)}>
        <InfoIcon />
      </IconButton>


      {/* <button onClick={() => setShow(!show)}>Toggle Description</button> */}
      {/* <button onClick={() => navigate(`/products/${id}`)}>Info</button> */}
      {/* conditional Styling */}
      {/* <p style={summaryStyle} className='product-summary'>{product.summary}</p> */}
      {/* conditional rendering */}
      {show ? <p className='product-summary'>{product.summary}</p> : null}
      <div className='priceStyle'>
        <p className='product-price'>Price: {product.price}</p>


        {onAddCart}


        {/* <button onClick={() => onAddCart(product)}>Add to Cart</button> */}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Counter />
        {deleteButton}
        {editButton}
      </div>
    </div>
  );
}
