import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export const Button = (props: ComponentPropsWithoutRef<"button">) => (
  <button
    className={clsx(
      "rounded-full border-4 border-emerald-600 px-5 py-3 text-xl font-bold text-emerald-700 transition-colors hover:bg-emerald-50"
    )}
    {...props}
  />
);
