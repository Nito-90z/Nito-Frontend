"use client";

import { MoonLoader } from "react-spinners";

type Props = {
  color?: string;
};

export default function Spinner({ color = "#FC5660" }: Props) {
  return <MoonLoader size={32} color={color} speedMultiplier={0.8} />;
}
