"use client";

import Image from "next/image";
import { useState } from "react";
import NullProductImage from "./NullProductImage";

type Props = {
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function ProductImage({
  src,
  alt,
  width,
  height,
  className,
}: Props) {
  const [isImageError, setIsImageError] = useState(false);

  return isImageError ? (
    <NullProductImage className={className} />
  ) : (
    <Image
      src={src || ""}
      alt={alt}
      width={width || 80}
      height={height || 80}
      className={className}
      onError={() => setIsImageError(true)}
    />
  );
}
