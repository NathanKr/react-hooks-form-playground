import { TextField } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import IHtmlInput from "../../types/i-html-input";
import IHtmlTextarea from "../../types/i-html-textarea";
import IRhfControllerBasedMuiTextField from "../../types/i-rhf-controller-based-mui-text-field";
import InputType from "../../types/input-type";

const RhfControllerBasedMuiTextField: FC<IRhfControllerBasedMuiTextField> = ({
  name,
  label,
  rules,
  inputType,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          type={
            inputType.type == InputType.Input
              ? (inputType as IHtmlInput).htmlInputType
              : ""
          }
          multiline={inputType.type == InputType.Textarea}
          minRows={
            inputType.type == InputType.Textarea
              ? (inputType as IHtmlTextarea).minRows
              : ""
          }
          label={label}
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : ""}
        />
      )}
    />
  );
};

export default RhfControllerBasedMuiTextField;
