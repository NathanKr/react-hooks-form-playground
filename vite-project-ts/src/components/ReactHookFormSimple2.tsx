import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  firstName: string;
  lastName: string;
}

const ReactHookFormSimple2
 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { firstName: "John", lastName: "Dee" },
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
        <p style={{ color: "red" }}>{errors.firstName?.message}</p>
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
        <p style={{ color: "red" }}>{errors.lastName?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ReactHookFormSimple2
;
