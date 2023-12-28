import { useState } from "react";
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from "../global";


export function AddProduct() {

  const [name, setName] = useState("")
  const [poster, setPoster] = useState("")
  const [price, setPrice] = useState("")
  const [summary, setSummary] = useState("")
  const [rating, setRating] = useState("")
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


      <Button variant="contained" onClick={() => {
        const newProduct = {
          name,
          poster,
          price,
          summary,
          rating
        }
        //1. method => POST
        //2. body => data => JSON
        //3. headers => data is in JSON format
        fetch(`${API}/products`, {
          method: "POST",
          body: JSON.stringify(newProduct),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then((res) => res.json())
          .then(() => navigate("/products"))
        // setProductList([...productList, newProduct])
        // console.log(newProduct)

      }}>Add Product</Button>



      {/* copy productList and add newProduct */}
      {/* <button onClick={() => {
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
      }}>Add Product</button> */}
    </div>
  );
}
