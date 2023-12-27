import { useEffect, useState } from 'react';
import { Cart } from '../Cart';
import { Product } from './Product';
import { INITIAL_PRODUCT_LIST } from '../App';

export function ProductList() {
  // const productList = INITIAL_PRODUCT_LIST;
  const [productList, setProductList] = useState([])

  const [cart, setCart] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("https://658ae52eba789a9622381b47.mockapi.io/products")
        const result = await response.json()
        setProductList(result)
      } catch (error) {
        console.error("Error while fetching product list", error)
      }
    }

    fetchData()

    // fetch("https://658ae52eba789a9622381b47.mockapi.io/products")
    //   .then((res) => res.json())
    //   .then((data) => setProductList(data)
    //   )
  }, [])



  const handleCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <button>Cart {cart.length}</button>
      <Cart cartItem={cart} />
      <div className='product-list'>
        {productList.map((product, index) => (
          <Product key={product.id} product={product} id={product.id} onAddCart={handleCart} />
        ))}
      </div>
    </div>
  );
}
