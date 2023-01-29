import { TextField } from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import IRhfControllerBasedMuiTextField from "../../types/i-rhf-controller-based-mui-text-field";

const RhfControllerBasedMuiTextField: FC<IRhfControllerBasedMuiTextField> = ({
  name,
  label,
  rules,
  htmlInputType
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
          type={htmlInputType}
          label={label}
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : ""}
        />
      )}
    />
  );
};

export default RhfControllerBasedMuiTextField;
