import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg
      flex flex-col gap-y-4 "
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>

        <FormInput
          label="Email"
          name="identifier"
          type="email"
          defaultValue="test@test.com"
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          defaultValue="secret"
        />
        <div className="mt-4"></div>
      </Form>
    </section>
  );
};

export default Login;
