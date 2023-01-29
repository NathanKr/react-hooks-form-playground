import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Checkbox } from "@mui/material";

interface IFormInputs {
  TextField: string;
  MyCheckbox: boolean;
}

export function FormWithControllerForMui1() {
  const { handleSubmit, control } = useForm<IFormInputs>({
    defaultValues: {
      MyCheckbox: false,
    },
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="MyCheckbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      />
      <input type="submit" />
    </form>
  );
}
