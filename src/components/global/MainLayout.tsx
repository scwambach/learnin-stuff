import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
