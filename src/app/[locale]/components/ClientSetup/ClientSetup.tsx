"use client";

import { PlainLocalStorageDriver, setCacheConfigurations } from "@mongez/cache";

export default function ClientSetup() {
  if (typeof window === "undefined") return null;

  setCacheConfigurations({
    driver: new PlainLocalStorageDriver(),
  });

  return null;
}
