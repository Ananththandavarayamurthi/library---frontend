import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Form from 'react-bootstrap/Form';





const Addregister = (props) => {
  const DataValidationSchema = yup.object({
 
    title:yup.string().required().min(4),
    user: yup.string().required().min(4),
    useridnumber:yup.string().required().min(4),
    userphonenumber: yup.string().required().min(4),
    dateofissued: yup.string().required().min(4),
    dateofrecieved: yup.string(),
    
    
 
});
  const navigate = useNavigate();
  
  const { handleBlur, handleChange, values, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
                title:"",
                user: "",
                useridnumber:"",
                userphonenumber:"",
                dateofissued:"",
                dateofrecieved:""
                
                
      },
      validationSchema: DataValidationSchema,
      
      onSubmit: (values) => {
     
        console.log("form values", values);
        addData(values);
      },
    });
    
    
  const addData = (values) => {
    
    fetch("https://6354ef52483f5d2df3a96755.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json" },
    }).then(()=>props.data.getData())
    .then(() => navigate("/borrowers"));
  };

  return (
    <div>
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
          label="user Name"
          variant="outlined"
          type="text"
          value={values.user}
          name="user"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.user && errors.user}
          helperText={touched.user && errors.user ? errors.user : null}
        />
        <TextField
          label="user id numner"
          variant="outlined"
          type="text"
          value={values.useridnumber}
          name="useridnumber"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.useridnumber && errors.useridnumber}
          helperText={touched.useridnumber && errors.useridnumber ? errors.useridnumber : null}
        />
        <TextField
          label="userphonenumber"
          variant="outlined"
          type="text"
          value={values.userphonenumber}
          name="userphonenumber"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.userphonenumber && errors.userphonenumber}
          helperText={touched.userphonenumber && errors.userphonenumber ? errors.userphonenumber : null}
        />
        <TextField
          label="dateofissued"
          variant="outlined"
          type="date"
          value={values.dateofissued}
          name="dateofissued"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.dateofissued && errors.dateofissued}
          helperText={touched.dateofissued && errors.dateofissued ? errors.dateofissued : null}
        />

       

          <Button variant="contained" type="submit">
            Add Registery
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default Addregister