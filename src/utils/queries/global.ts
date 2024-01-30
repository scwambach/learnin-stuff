import { imageQuery } from "./common";

export const GLOBAL_QUERY = `*[_type == "globalSettings"][0] {
  description,
  favicon {
    ${imageQuery}
  },
  footer,
  logo {
    ${imageQuery}
  },
  social,
  title,
  "categories": *[_type == "category"] {
    title,
    "slug": slug.current
  },
  "authors": *[_type == "author"] {
    name,
    "slug": slug.current
  }
}`;
