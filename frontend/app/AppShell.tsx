"use client";

import { ToastProvider } from "@/components/ui/toast/ToastProvider";
import AppContent from "./AppContent";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <AppContent>{children}</AppContent>
    </ToastProvider>
  );
}
