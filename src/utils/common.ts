export const mergeClasses = (
  ...classes: (string | boolean | null | undefined)[]
) => {
  return classes.filter(Boolean).join(" ");
};

export const isComponentChild = (item: unknown) => {
  return (
    item instanceof HTMLElement ||
    ["string", "number", "boolean"].includes(typeof item)
  );
};
