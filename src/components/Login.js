import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setSuccess(true);
    reset();
  };
  return (
    <>
      {success ? (
        <section className="mt-90 form-wrapper">
          <h1>You are logged in!</h1>
          <br />
          <p>
            <Link to="/">Go to home</Link>
          </p>
        </section>
      ) : (
        <div className="mt-90 form-wrapper">
          <h1>Login with your email</h1>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", { required: true })}
              id="email"
              placeholder="Your email..."
              autoComplete="off"
            />
            {errors.email && (
              <p className="error" role="alert">
                Please enter your email
              </p>
            )}

            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              id="password"
              autoComplete="off"
            />
            <Link to="/forgotpassword" className="forgot__password">
              Forgot your password?
            </Link>
            <input type="submit" value="Submit" />
          </form>
          <h2>Not a member?</h2>
          <Link to="/signUp" className="register">
            Sign Up
          </Link>
        </div>
      )}
    </>
  );
}
