import NextImage, { ImageProps } from "next/image";
import { forwardRef } from "react";

export const Image = forwardRef(
  (
    props: ImageProps,
    ref: React.RefAttributes<HTMLImageElement | null>["ref"]
  ) => <NextImage ref={ref} {...props} />
);

Image.displayName = "Image";
