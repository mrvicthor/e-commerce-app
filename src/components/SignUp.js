import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import Input from "./Input";
import "./login.css";

export default function SignUp() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data) => {
    console.log(data);
    setSuccess(true);
    reset();
  };

  return (
    <>
      {success ? (
        <section className="mt-90 form-wrapper">
          <h1>Success</h1>
          <p>
            <Link to="/login">Login</Link>
          </p>
        </section>
      ) : (
        <div className="mt-90 form-wrapper signUp">
          <h1>Sign Up</h1>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Your name..."
              aria-invalid={errors.fullName ? "true" : "false"}
              {...register("fullName", {
                required: true,
              })}
              autoComplete="off"
            />
            {errors.fullName && (
              <p className="error" role="alert">
                Full name is reqired
              </p>
            )}

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email address",
                },
              })}
              autoComplete="off"
            />
            {errors.email && (
              <p className="error" role="alert">
                {errors.email.message}
              </p>
            )}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "You must specify a password",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              autoComplete="off"
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
            <label htmlFor="email">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
              autoComplete="off"
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword.message}</p>
            )}
            <input type="submit" value="Sign Up" />
          </form>
          <Link to="/" className="backBtn">
            Back to home page
          </Link>
        </div>
      )}
    </>
  );
}
