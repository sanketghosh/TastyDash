import "../styles/globals.css";
import type { Metadata } from "next";

import ClientOnly from "../components/client-only";

/* COMPONENTS */
import Banner from "@/components/banner";
import Topbar from "@/components/top-bar";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AuthModal from "@/components/modals/auth-modal";

export const metadata: Metadata = {
  title: "TastyDash",
  description: "Get your food delivered at your doorstep",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClientOnly>
        <body className="min-h-screen relative selection:bg-primary selection:text-background text-foreground">
          <AuthModal />
          <div className="min-h-screen relative">
            <Banner />
            <Topbar />
            <Navbar />
            <div className="max-w-[90rem] mx-auto py-5 px-4 md:px-6 lg:px-9">
              {children}
            </div>
            <Footer />
          </div>
        </body>
      </ClientOnly>
    </html>
  );
}
