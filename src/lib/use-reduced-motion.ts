"use client";

import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  // Always start at `false` so the client's first render matches the server's.
  // The real value is only known after mount, once `window` exists.
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const listener = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return reduced;
}
