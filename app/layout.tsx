import { type ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthProvider from "@/components/AuthProvider";
import "./globals.css";

export const metadata = {
  title: "Codebin | Store, Share, Inspire: Your Code Hub",
  description: "Store, Share, Inspire: Your Code Hub",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* <script
          src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
          integrity="sha512-D9gUyxqja7hBtkWpPWGt9wfbfaMGVt9gnyCvYa+jojwwPHLCzUm5i8rpk7vD7wNee9bA35eYIjobYPaQuKS1MQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/base16/solarized-dark.min.css"
          integrity="sha512-kBHeOXtsKtA97/1O3ebZzWRIwiWEOmdrylPrOo3D2+pGhq1m+1CroSOVErIlsqn1xmYowKfQNVDhsczIzeLpmg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></link> */}
      </head>
      <body>
        <AuthProvider>
          <ToastContainer />
          <main className="min-h-[100vh] hero">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
