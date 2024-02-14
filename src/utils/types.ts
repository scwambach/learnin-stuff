import { PortableTextBlock } from "@portabletext/types";

export interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  testId?: string;
}

export interface ImageProps {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
  lqip: string;
}

export interface ButtonProps extends ComponentProps {
  type?: "button" | "submit" | "reset" | "link";
  href?: string;
  unstyled?: boolean;
  onClick?: () => void;
}

export interface GlobalProps {
  favicon: ImageProps;
  footer: PortableTextBlock[];
  logo: ImageProps;
  social: string[];
  title: string;
  description: string;
  categories: {
    title: string;
    slug: string;
  }[];
  authors: {
    name: string;
    slug: string;
  }[];
}

export interface PostProps {
  _id: string;
  title: string;
  body: PortableTextBlock[];
  slug: string;
  categories: {
    title: string;
    slug: string;
  }[];
  mainImage: ImageProps;
  author: {
    name: string;
    avatar: ImageProps;
    slug: string;
  };
}
