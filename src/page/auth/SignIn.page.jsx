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

const SignInPage = () => {
  const initialValue = {
    email: "",
    password: "",
  };
  const handleSubmit = (value) => {
    console.log(value);
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid Email Format")
      .required("Email is Required"),

    password: yup
      .string()
      .required("Password is Required")
      .min("Password needs 8 letters"),
  });

  return (
    <div className="w-3/4 mx-auto flex justify-center items-center h-screen">
      <Card className=" basis-2/4">
        <CardHeader className="flex flex-row justify-between  mb-5">
          <CardTitle>Sign In</CardTitle>
          <CardDescription className="text-blue-400">
            <Link to="signUpPage">
            I don't have an account?
            </Link>
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
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    type="email"
                    name="email"
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

                  <Button disable={isSubmitting} className=" bg-blue-500 w-full mt-3" type="Submit">
                    Sign In
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

export default SignInPage;
