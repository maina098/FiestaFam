import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurant HTML Template - Luxury",
  description: "A luxury restaurant template converted to Next.js",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScriptLoader from "@/components/ScriptLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
        <link rel="shortcut icon" href="/assets/images/favicon.png" />
        <link rel="apple-touch-icon-precomposed" href="/assets/images/favicon.png" />
      </head>
      <body className="body" suppressHydrationWarning>
        {/* preload removed to fix hydration and navigation blank screen issues */}

        <div id="wrapper">
          <div id="page" className="">
            <Header />
            {children}
            <Footer />
          </div>
        </div>

        {/* cursor */}
        <div className="tf-mouse tf-mouse-outer"></div>
        <div className="tf-mouse tf-mouse-inner"></div>

        {/* go top button */}
        <div className="progress-wrap active-progress">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{ transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '286.138' }}></path>
            </svg>
        </div>

        <ScriptLoader />
      </body>
    </html>
  );
}
