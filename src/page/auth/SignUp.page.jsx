import React, { useEffect } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../store/services/endpoints/auth.endpoint";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SignUpPage = () => {
  const [fun, data] = useSignUpMutation();
  const { toast } = useToast();
  const nav = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const handleSubmit = async (value, action) => {
    await fun(value);
  };

  useEffect(() => {
    if (data.error) {
      toast({
        title: "Error From Server",
        description: data.error.data.message,
      });
    }else if(data.data){
      nav("/")
    }
  }, [data]);
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
      .min(8, "Password needs 8 letters"),

    password_confirmation: yup
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
            <Link to="/">Already have an account? </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            validationSchema={validationSchema}
            initialValues={initialValues}
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
                    id="name"
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
                    value={values.password_confirmation}
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    placeholder="type your password again"
                  />

                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="password_confirmation"
                  />

                  <Button
                    disabled={isSubmitting}
                    className=" bg-blue-500 w-full mt-3"
                    type="Submit"
                  >
                    Sign Up
                    {isSubmitting && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
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
