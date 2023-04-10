import { PropsWithChildren } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
