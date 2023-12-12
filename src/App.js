import './App.css';
import { AddColor } from './AddColor';
import { useState } from 'react';

const INITIAL_PRODUCT_LIST = [
  {
    name: "Motivational Poster Frame",
    poster: "https://m.media-amazon.com/images/I/71kb+LvPEsL._SX425_.jpg",
    price: "874",
    summary: "For Home & Office Decor: An Aesthetic Wall Decorations Paintings For Living Room, Bedroom, Kitchen, Office, Hotel, Restaurant, Dining Area, Kids Room, Bathroom, Bar, Gym, etc. A Great Gift For Art Lovers, Decorators, Interior Designers, Family, Friends And More",
    rating: 8,
  },
  {
    name: "Apple iPhone 15 Pro Max (256 GB)",
    poster: "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    price: "1,56,990",
    summary: "FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
    rating: 9,
  },
  {
    name: "Apple 2022 MacBook Pro Laptop with M2 chip",
    poster: "https://m.media-amazon.com/images/I/71WtFY52CeL._SX679_.jpg",
    price: "1,40,990",
    summary: "SUPERCHARGED BY M2 – The 13-inch MacBook Pro laptop is a portable powerhouse. Get more done faster with a next-generation 8-core CPU, 10-core GPU and up to 24GB of unified memory.",
    rating: 7,
  }
]


function App() {
  const productList = INITIAL_PRODUCT_LIST
  const [cart, setCart] = useState([])


  const handleCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className="App">
      <button>Cart {cart.length}</button>
      <div className='product-list'>
        {productList.map((product) => (
          <Product product={product} onAddCart={handleCart} />
        ))}
      </div>
      <Cart cartItem={cart} />


    </div>
  );
}


function Product({ product, onAddCart }) {

  // const product = {
  //   name: "Motivational Poster Frame",
  //   poster: "https://m.media-amazon.com/images/I/71kb+LvPEsL._SX425_.jpg",
  //   price: 874,
  //   summary: "For Home & Office Decor: An Aesthetic Wall Decorations Paintings For Living Room, Bedroom, Kitchen, Office, Hotel, Restaurant, Dining Area, Kids Room, Bathroom, Bar, Gym, etc. A Great Gift For Art Lovers, Decorators, Interior Designers, Family, Friends And More",
  //   rating: 8,
  // }
  return (
    <div className='product-container'>
      <img className='product-poster' src={product.poster} />
      <div className='product-spec'>
        <h3 className='product-name'>{product.name}</h3>
        <p className='product-rating'>⭐{product.rating}</p>
      </div>
      <p className='product-summary'>{product.summary}</p>
      <div className='priceStyle'>
        Price: <p className='product-price'>  ₹ {product.price}</p>
        <button onClick={() => onAddCart(product)}>Add to Cart</button>
      </div>
    </div>
  )
}


function Cart({ cartItem }) {
  return (
    <div>
      {cartItem.map((item) => (
        <li>{item.name}</li>
      ))}
    </div>
  )
}


export default App;
