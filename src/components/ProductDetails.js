import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';


export function ProductDetails({ productList }) {
  //Get parameter from url
  const { productid } = useParams();
  const product = productList[productid]
  console.log(product)


  const navigate = useNavigate()
  return (
    <div className="product-detail-container">

      <iframe width="100%" height="600" src={product.trailer} title="Introducing iPhone 15 Pro | Apple" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <div className='product-spec'>
        <h3 className='product-name'>{product.name}</h3>
        <p className='product-rating'>⭐{product.rating}</p>
      </div>
      <Button variant="contained" onClick={() => navigate(-1)}>BACK</Button>
    </div>
  );
}
