"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const routes = [
  "/",
  "/projects",
  "/experience",
  "/skills",
  "/about",
  "/contact",
];

export function ScrollNavigator({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isNavigating = useRef(false);
  const wheelAccum = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const currentIndex = routes.indexOf(pathname);

    const navigate = (direction: "next" | "prev") => {
      if (isNavigating.current) return;

      const nextIndex =
        direction === "next" ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex < 0 || nextIndex >= routes.length) return;

      isNavigating.current = true;
      wheelAccum.current = 0;

      router.push(routes[nextIndex]);

      setTimeout(() => {
        isNavigating.current = false;
      }, 1200);
    };

    const handleWheel = (e: WheelEvent) => {
      const atBottom =
        main.scrollTop + main.clientHeight >= main.scrollHeight - 4;
      const atTop = main.scrollTop <= 0;

      wheelAccum.current += e.deltaY;

      if (e.deltaY > 0 && atBottom && wheelAccum.current > 150) {
        navigate("next");
      } else if (e.deltaY < 0 && atTop && wheelAccum.current < -150) {
        navigate("prev");
      }

      if (!atBottom && !atTop) {
        wheelAccum.current = 0;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const atBottom =
        main.scrollTop + main.clientHeight >= main.scrollHeight - 4;
      const atTop = main.scrollTop <= 0;
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;

      if (deltaY > 60 && atBottom) navigate("next");
      if (deltaY < -60 && atTop) navigate("prev");
    };

    main.scrollTo(0, 0);

    main.addEventListener("wheel", handleWheel, { passive: true });
    main.addEventListener("touchstart", handleTouchStart, { passive: true });
    main.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      main.removeEventListener("wheel", handleWheel);
      main.removeEventListener("touchstart", handleTouchStart);
      main.removeEventListener("touchend", handleTouchEnd);
    };
  }, [pathname, router]);

  return <>{children}</>;
}
