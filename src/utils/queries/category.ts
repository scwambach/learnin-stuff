import { postContent } from "./common";

export const CATEGORY_QUERY = `*[_type == "category" && slug.current == $categorySlug] {
  title,
  "slug": slug.current,
  "posts": *[_type == "post" && references(^._id)] {
    ${postContent}
  }
}`;
