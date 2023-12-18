import { useState } from "react";
import { useNavigate } from "react-router-dom"
export function AddProduct({ productList, setProductList }) {

  const [name, setName] = useState("")
  const [poster, setPoster] = useState("")
  const [price, setPrice] = useState("")
  const [summary, setSummary] = useState("")
  const [rating, setRating] = useState("")
  const navigate = useNavigate()
  return (
    <div className="add-product-form">

      <input type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter Name" />

      <input type="text"
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Enter poster" />

      <input type="text"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        placeholder="Enter price" />

      <input type="text"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        placeholder="Enter summary" />

      <input type="text"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        placeholder="Enter rating" />
      {/* copy productList and add newProduct */}
      <button onClick={() => {
        const newProduct = {
          name,
          poster,
          price,
          summary,
          rating
        }
        setProductList([...productList, newProduct])
        console.log(newProduct)
        navigate("/products")
      }}>Add Product</button>
    </div>
  );
}
