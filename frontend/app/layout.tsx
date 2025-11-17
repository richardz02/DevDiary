import Header from "../components/Header";
import Navbar from "../components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <Header />

        <div className="flex flex-1 overflow-hidden">
          <Navbar />
          <main className="flex-1 flex justify-center">
            <div className="w-full max-w-3xl px-4">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
