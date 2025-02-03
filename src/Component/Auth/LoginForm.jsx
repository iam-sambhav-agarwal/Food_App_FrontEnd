import React from "react";
import { Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};
const LoginForm = () => {
    const navigate= useNavigate();
  const handleSubmit = () => {};
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            label="Password"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Button fullWidth type="submit" variant="contained" sx={{mt:2, padding:"1rem"}}>
            Login
          </Button>
        </Form>
      </Formik>

      <Typography variant="body2" align="center" sx={{mt:3}} >
        Don't have an account?
      <Button size="small" onClick={()=>navigate("/account/register")}>
        Register
      </Button>
      </Typography>
    </div>
  );
};

export default LoginForm;
