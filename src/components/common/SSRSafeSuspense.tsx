"use client";

import useMounted from "@/hooks/mount";
import { Suspense } from "react";

type Props = React.ComponentProps<typeof Suspense>;

export default function SSRSafeSuspense(props: Props) {
  const { fallback } = props;
  const isMounted = useMounted();

  if (isMounted) {
    return <Suspense {...props} />;
  }
  return <>{fallback}</>;
}
