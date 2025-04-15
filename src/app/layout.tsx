import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create WeeBookToo App",
  description: "A web front end for WeeBookToo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
