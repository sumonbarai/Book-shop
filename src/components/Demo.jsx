"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { buttonVariants } from "./theme";
const Button = forwardRef(
  (
    {
      children,
      className,
      size = "md",
      color = "primary",
      variant = "default",
      radius = "default",
      shape,
      position,
      ...props
    },
    ref
  ) => {
    return _jsx("button", {
      ...props,
      ref: ref,
      className: cn(
        buttonVariants({ size, color, variant, shape, position, radius }),
        className
      ),
      children: children,
    });
  }
);

Button.displayName = "Button";
export { Button };
