import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import s from "./typography.module.scss";

export type TypographyProps<T extends ElementType = "p"> = {
  as?: T;
  children?: ReactNode;
  className?: string;
  variant?:
    | "body1"
    | "body2"
    | "caption"
    | "error"
    | "h1"
    | "h2"
    | "h3"
    | "large"
    | "link1"
    | "link2"
    | "overline"
    | "subtitle1"
    | "subtitle2";
};

export const Typography = <T extends ElementType = "p">(
  props: TypographyProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>,
) => {
  const { as: Component = "p", className, variant = "body1", ...rest } = props;

  return <Component className={`${s[variant]} ${className}`} {...rest} />;
};
