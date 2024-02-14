import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

export const Footer = ({ copy }: { copy: PortableTextBlock[] }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <PortableText value={copy} /> &copy; {currentYear}
      </div>
    </footer>
  );
};
