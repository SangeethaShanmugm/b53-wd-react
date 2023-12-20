import { useParams } from "react-router-dom";

export function ProductDetails({ productList }) {
  //Get parameter from url
  const { productid } = useParams();
  const product = productList[productid]
  console.log(product)

  return (
    <div>ProductDetails Page - {product.name}</div>
  );
}
