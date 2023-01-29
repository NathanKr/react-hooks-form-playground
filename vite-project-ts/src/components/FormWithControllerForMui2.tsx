import { Button, Stack, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  author: string;
  email: string;
  description: string;
}

const FormWithControllerForMui2 = () => {
    
  const { handleSubmit, control } = useForm<IFormInputs>({
    /* --- defaultValues are required otherwise you get warning. 
       --- it is also written in the docs 
     --- https://react-hook-form.com/api/usecontroller/controller/ under defaultValues */
    defaultValues: { author: "", email: "", description: "" },
  });

  const submitHandler: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Stack spacing={2}>
          <Controller
            name="author"
            control={control}
            rules={{ required: "Author is required" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Author"
                error={!!fieldState.error}
                helperText={fieldState.error ? fieldState.error.message : ""}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="email"
                label="Email"
                error={!!fieldState.error}
                helperText={fieldState.error ? fieldState.error.message : ""}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{ required: "Description is required" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Description"
                error={!!fieldState.error}
                helperText={fieldState.error ? fieldState.error.message : ""}
              />
            )}
          />
          <Button variant="contained" type="submit">
            Add Comment
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default FormWithControllerForMui2;
