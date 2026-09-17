"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type InquiryContextValue = {
  preferredPuppy: string;
  setPreferredPuppy: (id: string) => void;
  requestPuppy: (id: string) => void;
};

const InquiryContext = createContext<InquiryContextValue | null>(null);

function scrollToInquire() {
  const el = document.getElementById("inquire");
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => {
    const field = document.getElementById("preferred-puppy") as
      | HTMLSelectElement
      | null;
    field?.focus({ preventScroll: true });
  }, 450);
}

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [preferredPuppy, setPreferredPuppy] = useState("");

  const requestPuppy = useCallback((id: string) => {
    setPreferredPuppy(id);
    scrollToInquire();
  }, []);

  const value = useMemo(
    () => ({ preferredPuppy, setPreferredPuppy, requestPuppy }),
    [preferredPuppy, requestPuppy],
  );

  return (
    <InquiryContext.Provider value={value}>{children}</InquiryContext.Provider>
  );
}

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) {
    throw new Error("useInquiry must be used within InquiryProvider");
  }
  return ctx;
}
