import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import NavBar from "../NavBars";

const DataValidationSchema = yup.object({
     title: yup.string().required().min(4),
     nobooks: yup.string().required().min(1),
     
 
});

const Addbooks = (props) => {
  console.log("legnth",props.data.booksdata.length)
  const navigate = useNavigate();
  const { handleBlur, handleChange, values, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
               title:"",
               nobooks:"",
               id:`${props.data.booksdata.length+1}`               
               
      },
      validationSchema: DataValidationSchema,
      onSubmit: (values) => {
        console.log("form values", values);
        addData(values);
      },
    });
  const addData = (values) => {
    fetch("https://library-backend-0af2.onrender.com/borrowers/borrowers", {
      method: "POST",
      body: JSON.stringify([values]),
      headers: { "Content-type": "application/json" },
    }).then(()=>props.data.getbookData())
    .then(() => navigate("/books"));
  };

  return (
    <div>
      <NavBar />
      <section className="container my-5">
        <Form onSubmit={handleSubmit} className="add-student">
        <TextField
          label="Book Name"
          variant="outlined"
          type="text"
          value={values.title}
          name="title"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.title && errors.title}
          helperText={touched.title && errors.title ? errors.title : null}
        />
        <TextField
          label="no of books"
          variant="outlined"
          type="number"
          value={values.nobooks}
          name="nobooks"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.nobooks && errors.nobooks}
          helperText={touched.nobooks && errors.nobooks ? errors.nobooks : null}
        />
       

          <Button variant="contained" type="submit">
            Add Books
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default Addbooks;
