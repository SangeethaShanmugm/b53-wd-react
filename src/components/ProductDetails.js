import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";


export function ProductDetails() {
  const [product, setProduct] = useState({})

  //Get parameter from url
  const { productid } = useParams();
  // const product = productList[productid]
  // console.log(product)

  useEffect(() => {

    fetch(`https://658ae52eba789a9622381b47.mockapi.io/products/${productid}`)
      .then((res) => res.json())
      .then((data) => setProduct(data)
      )
  }, [])


  const navigate = useNavigate()
  return (
    <div className="product-detail-container">

      <iframe width="100%" height="600" src={product.trailer} title="Introducing iPhone 15 Pro | Apple" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <div className='product-spec'>
        <h3 className='product-name'>{product.name}</h3>
        <p className='product-rating'>⭐{product.rating}</p>
      </div>
      <p className='product-summary'>{product.summary}</p>
      <Button variant="contained" onClick={() => navigate(-1)}>BACK</Button>
    </div>
  );
}
