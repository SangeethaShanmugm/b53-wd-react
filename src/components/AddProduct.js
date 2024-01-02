import { useState } from "react";
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from "../global";
import { useFormik } from "formik"
import * as yup from "yup"


const productValidationSchema = yup.object({
  name: yup.string()
    .required("Why not fill the name?"),
  poster: yup.string()
    .min(20, "Need a longer poster")
    .required("Why not fill the poster?"),
  price: yup.number()
    .required("Why not fill the price?"),
  summary: yup.string()
    .min(20, "Need a longer summary")
    .required("Why not fill the summary?"),
  rating: yup.number()
    .min(1, "Need rating above 1")
    .max(5, "Need rating below 5")
    .required("Why not fill the rating?")
})

export function AddProduct() {

  const formik = useFormik({
    initialValues: { name: "", poster: "", price: "", summary: "", rating: "" },
    validationSchema: productValidationSchema,
    onSubmit: (newProduct) => {
      console.log("onSubmit values", newProduct)
      createProduct(newProduct)
    }
  })




  const createProduct = (newProduct) => {
    console.log("createProduct", newProduct)
    fetch(`${API}/products`, {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then(() => navigate("/products"))

  }

  const navigate = useNavigate()

  return (
    <form className="add-product-form" onSubmit={formik.handleSubmit}>

      <TextField id="name" name="name" label="Name" variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? formik.errors.name : ""}


      <TextField id="poster" name="poster" label="Poster" variant="outlined"
        value={formik.values.poster}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.poster && formik.errors.poster ? formik.errors.poster : ""}

      <TextField id="price" name="price" label="Price" variant="outlined"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.price && formik.errors.price ? formik.errors.price : ""}

      <TextField id="summary" name="summary" label="Summary" variant="outlined"
        value={formik.values.summary}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.summary && formik.errors.summary ? formik.errors.summary : ""}

      <TextField id="rating" name="rating" label="Rating" variant="outlined"
        value={formik.values.rating}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}

      />
      {formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""}

      <Button variant="contained" type="submit"
        onClick={createProduct}
      >Add Product</Button>



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
    </form>
  );
}
