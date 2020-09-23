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
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address",
          },
        })}
      />
      {errors.email && errors.email.message}

      <input
        name="username"
        ref={register({
          validate: (value) => value !== "admin" || "Nice try!",
        })}
      />
      {errors.username && errors.username.message}

      <input type="submit" />
    </form>
  );
};

export default ReactHookFormSample1;
