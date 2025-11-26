"use client";

import { ToastProvider } from "@/app/(providers)/ToastContextProvider";
import AppContent from "./AppContent";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <AppContent>{children}</AppContent>
    </ToastProvider>
  );
}
