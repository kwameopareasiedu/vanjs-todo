import van, { ChildDom } from "vanjs-core";
import { isComponentChild, mergeClasses } from "@/utils/common.ts";

const { p } = van.tags;

interface TextProps extends Partial<HTMLParagraphElement> {
  size?: "sm" | "md" | "lg" | "xl";
  align?: "left" | "center" | "right";
  weight?: "light" | "normal" | "bold";
  italic?: boolean;
}

export const Text = (propsOrChild: TextProps | ChildDom, ...children: ChildDom[]) => {
  if (isComponentChild(propsOrChild)) {
    return p(propsOrChild as ChildDom, ...children);
  }

  const {
    size = "md",
    align = "center",
    weight = "normal",
    italic = false,
    className,
    ...rest
  } = propsOrChild as TextProps;

  const _className = mergeClasses(
    size === "sm" && "text-[13px]",
    size === "md" && "text-[16px]",
    size === "lg" && "text-[20px]",
    size === "xl" && "text-[25px]",
    align === "left" && "text-left",
    align === "center" && "text-center",
    align === "right" && "text-right",
    weight === "light" && "font-light",
    weight === "normal" && "font-normal",
    weight === "bold" && "font-bold",
    italic && "italic",
    className
  );

  return p({ className: _className, ...(rest as HTMLElement[]) }, ...children);
};
