import "./globals.css";
import AppShell from "./AppShell";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
