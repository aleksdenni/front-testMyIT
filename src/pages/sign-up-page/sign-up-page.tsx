import { SignUp } from "@/components/sign-up";
import { useSignUpMutation } from "@/services/auth/auth.api";

import s from "./sign-up-page.module.scss";
export const SignUpPage = () => {
  const [signUp] = useSignUpMutation();

  const handleSignUp = (data: { email: string; password: string }) => {
    signUp(data)
      .unwrap()
      .then()
      .catch((e) => e.status === "FETCH_ERROR");
  };

  return (
    <div className={s.container}>
      <SignUp onSubmit={handleSignUp} />
    </div>
  );
};
