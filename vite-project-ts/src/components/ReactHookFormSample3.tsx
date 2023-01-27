import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  example: string;
  exampleRequired: string;
}

export default function ReactHookFormSample3() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  console.log(errors);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      <br />
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      <br />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && (
        <p style={{ color: "red" }}>This field is required</p>
      )}
      <input type="submit" />
    </form>
  );
}
