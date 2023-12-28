import { useEffect, useState } from 'react';
import { Cart } from '../Cart';
import { Product } from './Product';
import { INITIAL_PRODUCT_LIST } from '../App';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from '../global';


export function ProductList() {
  // const productList = INITIAL_PRODUCT_LIST;
  const [productList, setProductList] = useState([])

  const [cart, setCart] = useState([]);

  const getProduct = async () => {
    try {
      const response = await fetch(`${API}/products`, { method: "GET" })
      const result = await response.json()
      setProductList(result)
    } catch (error) {
      console.error("Error while fetching product list", error)
    }
  }


  useEffect(() => getProduct(), [])

  // fetch("https://658ae52eba789a9622381b47.mockapi.io/products")
  //   .then((res) => res.json())
  //   .then((data) => setProductList(data)
  //   )

  const handleCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <button>Cart {cart.length}</button>
      <Cart cartItem={cart} />
      <div className='product-list'>
        {productList.map((product, index) => (
          <Product key={product.id} product={product} id={product.id} onAddCart={handleCart}
            deleteButton={
              <IconButton aria-label="deleteBtn" color="secondary"
                onClick={() => {
                  fetch(`${API}/products/${product.id}`, { method: "DELETE" })
                    .then(() => getProduct())
                }}>
                <DeleteIcon />
              </IconButton>

            } />
        ))}
      </div>
    </div>
  );
}
