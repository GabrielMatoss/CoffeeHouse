import { InputHTMLAttributes, forwardRef } from "react";
import { InputStyleContainer, InputWrapper } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer {...props} ref={ref} />
        {error && <p>{error}</p>}
      </InputWrapper>
    );
  }
);
