import { type SchemaTypeDefinition } from "sanity";
import { globalSettings } from "./docTypes/globalSettings";
import { post } from "./docTypes/post";
import { category } from "./docTypes/category";
import { author } from "./docTypes/author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [globalSettings, post, category, author],
};
