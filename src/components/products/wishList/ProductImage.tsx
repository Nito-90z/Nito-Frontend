"use client";

import Image from "next/image";
import { useState } from "react";
import NullProductImage from "./NullProductImage";
import { twMerge } from "tailwind-merge";

type Props = {
  src: string | null;
  alt: string;
  size?: "sm" | "lg";
  className?: string;
};

export default function ProductImage({
  src,
  alt,
  size = "sm",
  className,
}: Props) {
  const [isImageError, setIsImageError] = useState(false);

  return isImageError ? (
    <NullProductImage className={className} />
  ) : (
    <Image
      src={src || ""}
      alt={alt}
      width={size === "sm" ? 80 : 430}
      height={size === "sm" ? 80 : 430}
      className={className}
      onError={() => setIsImageError(true)}
    />
  );
}
