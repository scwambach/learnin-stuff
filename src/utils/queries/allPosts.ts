import { postContent } from "./common";

export const ALL_POSTS_QUERY = `*[_type == 'post'] | order(publishedAt asc) {
  ${postContent}
}`;
