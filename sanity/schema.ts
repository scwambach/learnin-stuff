import { type SchemaTypeDefinition } from "sanity";
import { post } from "./docTypes/post";
import { category } from "./docTypes/category";
import { author } from "./docTypes/author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category, author],
};
