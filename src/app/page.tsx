import { MainLayout } from "@components/global/MainLayout";
import { client } from "@utils/client";
import { ALL_POSTS_QUERY } from "@utils/queries/allPosts";

async function getData() {
  const data = await client.fetch(ALL_POSTS_QUERY);
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <MainLayout>
      <div className="container">
        <button>Button</button>
        <input type="submit" />
      </div>
    </MainLayout>
  );
}
