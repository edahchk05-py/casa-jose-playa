"use client";

import { useSyncExternalStore } from "react";

const query =
  typeof window === "undefined"
    ? null
    : window.matchMedia("(prefers-reduced-motion: reduce)");

function subscribe(callback: () => void) {
  query?.addEventListener("change", callback);
  return () => query?.removeEventListener("change", callback);
}

// The server always renders `false`; the real value resolves on the client
// after mount, once `window` exists — so this never causes a hydration mismatch.
function getSnapshot() {
  return query?.matches ?? false;
}

function getServerSnapshot() {
  return false;
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
