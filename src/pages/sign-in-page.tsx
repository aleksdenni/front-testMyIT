import { Navigate, useNavigate } from "react-router-dom";

import { SignIn, signInFormValues } from "@/components/sign-in";
import { useLoginMutation, useMeQuery } from "@/services/auth/auth.api";

import s from "./sign-in-page.module.scss";

export const SignInPage = () => {
  const { data, isLoading } = useMeQuery();
  const [signIn, { isLoading: isSigningIn }] = useLoginMutation();
  const navigate = useNavigate();

  if (isLoading) {
    return <span className={s.loader}></span>;
  }
  if (data) {
    return <Navigate to={"/"} />;
  }

  const handleSignIn = (data: signInFormValues) => {
    signIn(data)
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        e.status === "FETCH_ERROR";
      });
  };

  return (
    <div className={s.container}>
      <SignIn isSubmitting={isSigningIn} onSubmit={handleSignIn} />
    </div>
  );
};
