import { MainLayout } from "@components/global/MainLayout";
import { PortableTextBlock } from "@portabletext/types";
import { client } from "@utils/client";
import { ALL_POSTS_QUERY } from "@utils/queries/allPosts";
import { GLOBAL_QUERY } from "@utils/queries/global";
import { GlobalProps, ImageProps, PostProps } from "@utils/types";

async function getData() {
  const data = await client.fetch(`{
    "posts": ${ALL_POSTS_QUERY},
    "global": ${GLOBAL_QUERY}
  }`);
  return data;
}

export default async function Home() {
  const { posts, global } = (await getData()) as {
    global: GlobalProps;
    posts: PostProps[];
  };

  return (
    <MainLayout {...global}>
      <div className="container">
        <code>
          <pre
            style={{
              fontFamily: "monospace",
              display: "block",
              padding: "50px",
              color: "#88ffbf",
              backgroundColor: "black",
              textAlign: "center",
              whiteSpace: "pre-wrap",
            }}
          >
            [[ CONTENT GOES HERE ]]
          </pre>
        </code>
      </div>
    </MainLayout>
  );
}
