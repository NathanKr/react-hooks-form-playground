import { Button, Stack, TextField } from "@mui/material";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import IRhfControllerBasedMuiTextField from "../types/i-rhf-controller-based-mui-text-field";
import InputType from "../types/input-type";
import RhfControllerBasedMuiTextField from "./gen-ui/rhf-controller-based-mui-text-field";

interface IFormInputs {
  author: string;
  email: string;
  description: string;
}

const FormWithControllerForMui2Dry = () => {
  const methods = useForm<IFormInputs>({
    /* --- defaultValues are required otherwise you get warning. 
       --- it is also written in the docs 
     --- https://react-hook-form.com/api/usecontroller/controller/ under defaultValues */
    defaultValues: { author: "", email: "", description: "" },
  });

  const submitHandler: SubmitHandler<IFormInputs> = (data) => console.log(data);
  const formInputs: IRhfControllerBasedMuiTextField[] = [
    {
      name: "author",
      label: "Author",
      rules: { required: "Author is required" },
      inputType: { htmlInputType: "text", type: InputType.Input },
    },
    {
      name: "email",
      label: "Email",
      rules: { required: "Email is required" },
      inputType: { htmlInputType: "email", type: InputType.Input },
    },
    {
      name: "description",
      label: "Description",
      rules: { required: "Description is required" },
      inputType: { type: InputType.Textarea , minRows : 4 },
    },
  ];

  const elemsInput = formInputs.map((it, i) => (
    <RhfControllerBasedMuiTextField {...it} key={i} />
  ));

  return (
    <div>
      {/* pass all methods into the context */}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitHandler)}>
          <Stack spacing={2}>
            {elemsInput}
            <Button variant="contained" type="submit">
              Add Comment
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormWithControllerForMui2Dry;
