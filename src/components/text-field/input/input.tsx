import {
  ComponentProps,
  ComponentPropsWithoutRef,
  forwardRef,
  useState,
} from "react";

import {
  CloseOutline,
  EyeOffOutline,
  EyeOutline,
  SearchOutline,
} from "@/assets/icons";
import { Typography } from "@/components/typography";

import s from "./input.module.scss";

export type InputProps = {
  className?: string;
  error?: string;
  errorMessage?: string;
  label?: string;
  onClearClick?: () => void;
  search?: boolean;
} & ComponentPropsWithoutRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    disabled,
    error,
    label,
    onClearClick,
    search = false,
    type,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isShowPasswordButton = type === "password" && !search;

  const isShowClearButton =
    onClearClick &&
    typeof rest?.value === "string" &&
    rest?.value?.length > 0 &&
    search;

  const finalType = getFinalType(search, type, showPassword);

  return (
    <div className={s.root}>
      <Typography
        as={"label"}
        className={`${s.label} ${disabled && s.disabled}`}
        variant={"body2"}
      >
        {label}
      </Typography>
      <div
        className={`${s.inputContainer} ${error ? s.error : ""} ${
          disabled && s.disabled
        }`}
      >
        {search && (
          <span className={s.icon}>
            <SearchOutline />
          </span>
        )}

        <input
          className={`${s.input} ${error ? s.error : ""}`}
          disabled={disabled}
          ref={ref}
          type={finalType}
          {...rest}
        />
        {isShowPasswordButton && (
          <button
            className={s.icon}
            disabled={disabled}
            onClick={() => setShowPassword((prev) => !prev)}
            type={"button"}
          >
            {showPassword ? <EyeOutline /> : <EyeOffOutline />}
          </button>
        )}
        {isShowClearButton && (
          <button
            className={s.icon}
            disabled={disabled}
            onClick={onClearClick}
            type={"button"}
          >
            <CloseOutline />
          </button>
        )}
      </div>
      <Typography as={"div"} className={s.error} variant={"caption"}>
        {error}
      </Typography>
    </div>
  );
});

function getFinalType(
  search: boolean | undefined,
  type: ComponentProps<"input">["type"],
  showPassword: boolean,
) {
  if (type === "password" && showPassword && !search) {
    return "text";
  }

  return type;
}
