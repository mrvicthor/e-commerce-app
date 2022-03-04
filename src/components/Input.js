import React from "react";
import "./login.css";

export default function Input({
  type,
  name,
  placeholder,
  required,
  autoComplete,
  label,
  register,
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        {...register(name, { required })}
        id={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </>
  );
}
