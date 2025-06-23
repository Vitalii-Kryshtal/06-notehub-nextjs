import type { Metadata } from "next";
import "./globals.css";
import Header from "@/commponents/Header/Header";
import Footer from "@/commponents/Footer/Footer";
import TanStackProvider from "@/commponents/TanStackProvider/TanStackProvider";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Home work 1 next js",
  icons: {
    icon: "/public/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
