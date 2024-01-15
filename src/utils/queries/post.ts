import { postContent } from "./common";

export const POST_QUERY = `*[_type == 'post' && slug.current == $slug][0] {
  ${postContent}
}`;
