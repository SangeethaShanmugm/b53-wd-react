import React from 'react'
import { useFormik } from "formik"
import * as yup from "yup"

const formValidationSchema = yup.object({
    email: yup.string()
        .min(5, "Need a longer email😀")
        .required("Why not fill the email?")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern not matched"),
    password: yup.string()
        .min(8, "Need a longer password😀")
        .max(12, "Too much password")
        .required("Why not fill the password?")
        .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@_#/&*]).{8,}$/i, "Password pattern doesn't match")
})

function BasicForm() {
    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log("onSubmit values", values)
        }
    })
    return (
        <div>
            <h1>BasicForm with Formik</h1>
            <form onSubmit={formik.handleSubmit}>
                <input id="email" name="email" type="email" value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                <br />
                {formik.touched.email && formik.errors.email ? formik.errors.email : ""}

                <br />
                <input id="password" name="password" type="password" value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <br />
                {formik.touched.password && formik.errors.password ? formik.errors.password : ""}

                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default BasicForm