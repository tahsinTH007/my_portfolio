"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * The scroll container is <main>, not the window, so Next's built-in scroll
 * restoration doesn't reach it. Reset it to the top on every route change.
 */
export function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    document.querySelector("main")?.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
