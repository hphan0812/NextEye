import React from "react";
import LoginLayout from "layout/LoginLayout";
import {Label} from "components/Label";
import { Input } from "components/Input";
import { useForm } from "react-hook-form";
import FormGroup from "components/Common/FormGroup";
import { Button } from "components/Button";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// const schema = yup.object()({
//     email: yup
//         .string()
//         .email("Please enter a valid email")
//         .required("Email is required"),
//     password: yup
//         .string()
//         .min(8, "Password must be at least 8 characters")
//         .required("Password is required"),
// });

const LoginPage = () => {
  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const handleLogin = (values) => {
    console.log("handleLogin ~ values", values);
  };
return (
    <LoginLayout heading="Welcome to NextEye Portal!">
        <form onSubmit={handleSubmit(handleLogin)}>
            <FormGroup>
                <Label htmlFor="name">Username *</Label>
                <Input control={control} name="name" placeholder="Email"></Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password *</Label>
                <Input control={control} name="password" placeholder="Password"></Input>
            </FormGroup>
            <Button className='mx-auto mt-8 bg-primary' type="submit"> 
                Log in 
            </Button>
        </form>
    </LoginLayout>
);
};

export default LoginPage;