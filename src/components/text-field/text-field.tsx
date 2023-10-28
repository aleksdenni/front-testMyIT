import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

import { Input, InputProps } from "@/components/text-field/input/input";

type TextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, "name" | "onChange" | "value">;
export const TextField = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...textFieldProps
}: TextFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  });

  return <Input {...textFieldProps} {...field} error={error?.message} />;
};
