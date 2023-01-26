import React from "react";
import { useForm } from "react-hook-form";

const ReactHookFormSample1 = () => {
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      email: "natankrasney@gmail.com",
      username: "Nathan Krasney",
    },
  });
  const onSubmit = (values) => console.log(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="email"
        ref={register({
          required: { value: true, message: "email is required" },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address",
          },
        })}
      />
      <span className="validationError">
        {errors.email && errors.email.message}
      </span>

      <input
        name="username"
        ref={register({
          required: { value: true, message: "user name is required" },
          validate: (value) => value !== "admin" || "Nice try!",
        })}
      />
      <span className="validationError">
        {errors.username && errors.username.message}
      </span>

      <input type="submit" />
    </form>
  );
};

export default ReactHookFormSample1;