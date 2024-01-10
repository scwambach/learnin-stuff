import { type SchemaTypeDefinition } from "sanity";
import { post } from "./docTypes/post";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post],
};
