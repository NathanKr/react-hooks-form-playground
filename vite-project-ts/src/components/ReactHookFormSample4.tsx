import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  firstName: string;
  lastName: string;
}

const ReactHookFormSample4 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { firstName: "John", lastName: "Deer" },
  });

  const submitHnadler: SubmitHandler<Inputs> = (data) => console.log(data);

  // -- render after every input change or fine grain it
  console.log(watch()); 
  


  return (
    <div>
      <form onSubmit={handleSubmit(submitHnadler)}>
        <input
          {...register("firstName", { required: "This is required" })}
          placeholder="First Name"
        />
        <p>{errors.firstName?.message}</p>
        <br />
        <input
          {...register("lastName", {
            required: true,
            minLength: {
              value: 4,
              message: "Length must be at least 4",
            },
          })}
          placeholder="Last Name"
        />
        <p>{errors.lastName?.message}</p>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ReactHookFormSample4;
