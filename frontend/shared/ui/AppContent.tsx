import Header from "@/features/header/Header";
import Sidebar from "@/features/sidebar/Sidebar";
import { ToastProvider } from "@/app/(providers)/ToastContextProvider";
import { ModeProvider } from "@/app/(providers)/ModeContextProvider";

export default function AppContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <ModeProvider>
        <Header />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 flex justify-center">
            <div className="w-full max-w-3xl px-4">{children}</div>
          </main>
        </div>
      </ModeProvider>
    </ToastProvider>
  );
}
