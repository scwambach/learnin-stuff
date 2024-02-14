import { postContent } from "./common";

export const CATEGORY_QUERY = `*[_type == "author" && slug.current == $slug] {
  title,
  "slug": slug.current,
  "posts": *[_type == "post" && references(^._id)] {
    ${postContent}
  }
}`;
