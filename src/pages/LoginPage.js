import React from "react";
import LoginLayout from "layout/LoginLayout";
import {Label} from "components/Label";
import { Input } from "components/Input";
import { useForm } from "react-hook-form";
import FormGroup from "components/Common/FormGroup";
import { Button } from "components/Button";

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