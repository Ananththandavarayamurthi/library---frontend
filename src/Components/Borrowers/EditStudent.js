import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const DataValidationSchema = yup.object({
  id: yup.number().required(),
  class: yup.number().required(),
  name: yup.string().required().min(4),
  avatar: yup.string().required().min(4),
  gender: yup.string().required().min(4),
});
export const EditStudent = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://6354ef52483f5d2df3a96755.mockapi.io/students/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);

  return <div>
    {data ? <EditStudentForm data={data} /> : "Loading"}</div>;
};

const EditStudentForm = ({ data }) => {
  const navigate = useNavigate();
  const { handleBlur, handleChange, values, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        id: data.id,
        name: data.name,
        class:data.class,
        avatar: data.avatar,
        gender: data.gender,
       
        
      },
      validationSchema: DataValidationSchema,
      onSubmit: (updateValues) => {
        EditData(updateValues);
      },
    });
  const EditData = (updateValues) => {
    fetch(`https://6354ef52483f5d2df3a96755.mockapi.io/students/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(updateValues),
      headers: { "Content-type": "application/json" },
    }).then(() => navigate("/student"));
  };

  return (
    <section className="container my-5">
      <h2 className="text-center mt-3">Edit Student Details</h2>
      <Form onSubmit={handleSubmit} className="add-student">
        <TextField
          label="Roll.No"
          variant="outlined"
          type="number"
          value={values.id}
          name="id"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.id && errors.id}
          helperText={touched.id && errors.id ? errors.id : null}
        />
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          value={values.name}
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name}
          helperText={touched.name && errors.name ? errors.name : null}
        />
        <TextField
          label="class"
          variant="outlined"
          type="number"
          value={values.class}
          name="class"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.class && errors.class}
          helperText={touched.class && errors.class ? errors.class : null}
        />
        <TextField
          label="gender"
          variant="outlined"
          type="text"
          value={values.gender}
          name="html"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.gender && errors.gender}
          helperText={touched.gender && errors.gender ? errors.gender : null}
        />
        <TextField
          label="avatar"
          variant="outlined"
          type="text"
          value={values.avatar}
          name="css"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.avatar && errors.avatar}
          helperText={touched.avatar && errors.avatar ? errors.avatar : null}
        />
       
        <Button variant="contained" type="submit">
          Update Student Details
        </Button>
      </Form>
      <button className="btn btn-dark mt-3" onClick={() => navigate(-1)}>
        Back
      </button>
    </section>
  );
};
