import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import * as yup from "yup";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const initialValue = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const handleSubmit = (value) => {
    console.log(value);
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(2, "Name must be 2 or more")
      .required("Name is Required"),

    email: yup
      .string()
      .email("Invalid Email Format")
      .required("Email is Required"),

    password: yup
      .string()
      .required("Password is Required")
      .min(8,"Password needs 8 letters"),

    confirm_password: yup
      .string()
      .required("Confirmation is Required")
      .oneOf([yup.ref("password"), null], "Should be match with password"),
  });

  return (
    <div className="w-3/4 mx-auto flex justify-center items-center h-screen">
      <Card className=" basis-2/4">
        <CardHeader className="flex flex-row justify-between  mb-5">
          <CardTitle>Sign Up</CardTitle>
          <CardDescription className="text-blue-400">
            <Link to="/">
            Already have an account?  </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            validationSchema={validationSchema}
            initialValues={initialValue}
            onSubmit={handleSubmit}
          >
            {({ handleBlur, values, handleChange, isSubmitting }) => (
              <>
                <Form className="flex flex-col space-y-3 ">
                  <Label htmlFor="Name">Name</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    type="text"
                    name="name"
                    id="Name"
                    placeholder="Your Name"
                  />

                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="name"
                  />

                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />

                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="email"
                  />
                  <Label htmlFor="password">Password</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="password"
                  />

                  <Label htmlFor="Confirm Password">Confirm Password</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.confirm_password}
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="type your password again"
                  />

                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="confirm_password"
                  />

                  <Button
                    disabled = {isSubmitting}
                    className=" bg-blue-500 w-full mt-3"
                    type="Submit"
                  >
                    Sign Up
                  </Button>
                </Form>
              </>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
