export const dynamic = "force-dynamic";

import { ReactNode } from "react";
// import { getServerSession } from "next-auth";
// import SessionProvider from "@/utils/SessionProvider";

import "./globals.css";
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  // const session = await getServerSession();
  return (
    <html lang="en">
      <head>
        <script
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
        ></link>
      </head>
      <body>
        <main className="min-h-[100vh] hero">{children}</main>
      </body>
    </html>
  );
}