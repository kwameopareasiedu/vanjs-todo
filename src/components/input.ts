import van from "vanjs-core";
import { mergeClasses } from "@/utils/common.ts";

const { input, div, p } = van.tags;

export interface InputProps extends Omit<Partial<HTMLInputElement>, "checked" | "value"> {
  error: () => string;
}

export const Input = (props: InputProps) => {
  const { error, className, ...rest } = props as InputProps;

  return div(
    { className: mergeClasses("flex flex-col gap-1", className) },
    input({ className: "form-field", ...(rest as HTMLElement[]) }),
    () => (error ? p({ className: "text-sm text-rose-600 italic" }, error) : null)
  );
};
