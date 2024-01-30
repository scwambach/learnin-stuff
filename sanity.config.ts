/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import {
  Globe,
  NotePencil,
  Notebook,
  Star,
  UserCircle,
} from "@phosphor-icons/react";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Blog")
              .icon(Notebook)
              .child(
                S.list()
                  .title("Blog")
                  .items([
                    S.listItem()
                      .title("Posts")
                      .child(S.documentTypeList("post").title("Posts"))
                      .icon(NotePencil),
                    S.listItem()
                      .title("Categories")
                      .child(S.documentTypeList("category").title("Categories"))
                      .icon(Star),
                    S.listItem()
                      .title("Authors")
                      .child(S.documentTypeList("author").title("Authors"))
                      .icon(UserCircle),
                  ]),
              ),
            S.listItem()
              .title("Global Info")
              .child(
                S.document()
                  .schemaType("globalSettings")
                  .documentId("globalSettings"),
              )
              .icon(Globe),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
