import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import Button from "@/components/button/button";
import { Card } from "@/components/card";
import { TextField } from "@/components/text-field";
import { Typography } from "@/components/typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import s from "./sign-up.module.scss";

export const signUpSchema = z
  .object({
    confirmPassword: z
      .string()
      .min(3, "Password must contain at least 3 character(s)"),
    email: z.string().nonempty("Enter email").email("Invalid email address"),
    password: z
      .string()
      .min(3, "Password must contain at least 3 character(s)"),
  })
  .refine(({ confirmPassword, password }) => password === confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type FormValues = z.infer<typeof signUpSchema>;

type Props = {
  onSubmit: (data: Omit<FormValues, "confirmPassword">) => any;
};

export const SignUp = (props: Props) => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: "",
      email: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(signUpSchema),
  });

  const handleFormSubmit = handleSubmit(({ email, password }) => {
    props
      .onSubmit({ email, password })
      .unwrap()
      .then(() => navigate("/sign-in"));
  });

  return (
    <Card className={s.card}>
      <Typography as={"h1"} className={s.title} variant={"large"}>
        Sign Up
      </Typography>
      <form className={s.form} onSubmit={handleFormSubmit}>
        <div className={s.fields}>
          <TextField
            control={control}
            label={"Email"}
            name={"email"}
            type={"email"}
          />
          <TextField
            control={control}
            label={"Password"}
            name={"password"}
            type={"password"}
          />
          <TextField
            control={control}
            label={"Confirm password"}
            name={"confirmPassword"}
            type={"password"}
          />
        </div>
        <Button type={"submit"}>
          <Typography variant={"subtitle2"}>Sign Up</Typography>
        </Button>
      </form>
      <Typography as={"div"} className={s.caption} variant={"body2"}>
        Already have an account?
      </Typography>
      <Typography
        as={Link}
        className={s.signInLink}
        to={"/sign-in"}
        variant={"body2"}
      >
        Sign In
      </Typography>
    </Card>
  );
};
