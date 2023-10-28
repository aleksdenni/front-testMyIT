import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Button from "@/components/button/button";
import { Card } from "@/components/card";
import { TextField } from "@/components/text-field";
import { Typography } from "@/components/typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import s from "./sign-in.module.scss";

const signInSchema = z.object({
  email: z.string().nonempty("Enter email").email("Invalid email address"),
  password: z.string().min(3),
});

export type signInFormValues = z.infer<typeof signInSchema>;

type Props = {
  isSubmitting?: boolean;
  onSubmit: (data: signInFormValues) => void;
};

export const SignIn = (props: Props) => {
  const { control, handleSubmit } = useForm<signInFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(signInSchema),
  });

  return (
    <Card className={s.card}>
      <Typography as={"h1"} className={s.title} variant={"large"}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(props.onSubmit)}>
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
        </div>

        <Button disabled={props.isSubmitting} fullWidth type={"submit"}>
          <Typography variant={"subtitle2"}>Sign In</Typography>
        </Button>
      </form>
      <Typography as={"div"} className={s.caption} variant={"body2"}>
        {`Don't have an account?`}
      </Typography>
      <Typography
        as={Link}
        className={s.signUpLink}
        to={"/sign-up"}
        variant={"body2"}
      >
        Sign Up
      </Typography>
    </Card>
  );
};
