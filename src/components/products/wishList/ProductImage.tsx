"use client";

import Image from "next/image";
import { useState } from "react";
import NullProductImage from "./NullProductImage";

type Props = {
  src: string | null;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function ProductImage({
  src,
  alt,
  size = "sm",
  className,
}: Props) {
  const [isImageError, setIsImageError] = useState(false);
  const sizes = size === "sm" ? 80 : size === "md" ? 120 : 430;

  return isImageError ? (
    <NullProductImage className={className} />
  ) : (
    <Image
      src={src || ""}
      alt={alt}
      width={sizes}
      height={sizes}
      className={className}
      onError={() => setIsImageError(true)}
    />
  );
}
