import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { GlobalProps, ImageProps } from "@utils/types";
import { PortableTextBlock } from "@portabletext/types";

interface MainLayoutProps {
  children: ReactNode;
  title: string;
  footer: PortableTextBlock[];
  social: string[];
  logo: ImageProps;
  categories: GlobalProps["categories"];
  authors: GlobalProps["authors"];
}

export const MainLayout = ({
  children,
  title,
  footer,
  social,
  logo,
  authors,
  categories,
}: MainLayoutProps) => {
  return (
    <>
      <Header {...{ title, social, logo, categories, authors }} />

      {children}
      <Footer copy={footer} />
    </>
  );
};
