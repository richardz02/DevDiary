import Header from "@/components/ui/header/Header";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import { ToastProvider } from "@/components/ui/toast/ToastProvider";
import { ModeProvider } from "@/context/ModeContext";

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
