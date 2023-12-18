import { useParams } from "react-router-dom";

export function ProductDetails() {
  //Get parameter from url
  const { productid } = useParams();

  return (
    <div>ProductDetails Page - {productid}</div>
  );
}
