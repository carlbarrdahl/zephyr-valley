import { ComponentPropsWithoutRef } from "react";

import clsx from "clsx";

export const Section = ({
  className = "",
  heading,
  children,
  ...props
}: { heading?: string } & ComponentPropsWithoutRef<"section">) => (
  <section
    className={clsx("container mx-auto my-16 max-w-screen-lg px-4", className)}
    {...props}
  >
    {heading ? (
      <h3
        className="mb-8 text-xl font-bold uppercase tracking-widest text-stone-600"
        {...props}
      >
        {heading}
      </h3>
    ) : null}

    {children}
  </section>
);
