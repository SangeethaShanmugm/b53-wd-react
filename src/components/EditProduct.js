import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from "../global";


export function EditProduct() {
  const { productid } = useParams();

  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`${API}/products/${productid}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setProduct(data)
      )
  }, [])


  return product ? <EditProductForm product={product} /> : "Loading.."

}


function EditProductForm({ product }) {
  const [name, setName] = useState(product.name)
  const [poster, setPoster] = useState(product.poster)
  const [price, setPrice] = useState(product.price)
  const [summary, setSummary] = useState(product.summary)
  const [rating, setRating] = useState(product.rating)
  const navigate = useNavigate()

  return (
    <div className="add-product-form">

      <TextField id="outlined-basic" label="Name" variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)} />

      <TextField id="outlined-basic" label="Poster" variant="outlined"
        value={poster}
        onChange={(event) => setPoster(event.target.value)} />

      <TextField id="outlined-basic" label="Price" variant="outlined"
        value={price}
        onChange={(event) => setPrice(event.target.value)} />

      <TextField id="outlined-basic" label="Summary" variant="outlined"
        value={summary}
        onChange={(event) => setSummary(event.target.value)} />

      <TextField id="outlined-basic" label="Rating" variant="outlined"
        value={rating}
        onChange={(event) => setRating(event.target.value)} />


      <Button variant="contained" color="success" onClick={() => {
        const updateProduct = {
          name,
          poster,
          price,
          summary,
          rating
        }
        //1. method => PUT
        //2. body => data => JSON
        //3. headers => data is in JSON format
        fetch(`${API}/products/${product.id}`, {
          method: "PUT",
          body: JSON.stringify(updateProduct),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then((res) => res.json())
          .then(() => navigate("/products"))
        // setProductList([...productList, newProduct])
        // console.log(newProduct)

      }}>SAVE</Button>


    </div>
  )
}