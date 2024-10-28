'use client';

import { MoonLoader } from 'react-spinners';

type Props = {
  color?: string;
  size?: number;
};

export default function Spinner({ color = '#FC5660', size }: Props) {
  return <MoonLoader color={color} size={size} speedMultiplier={0.8} />;
}
