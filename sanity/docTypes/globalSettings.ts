export const globalSettings = {
  name: "globalSettings",
  title: "Global Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
    },
    {
      name: "description",
      title: "Site Description",
      type: "string",
    },
    {
      name: "logo",
      title: "Site Logo",
      type: "image",
    },
    {
      name: "favicon",
      title: "Site Favicon",
      type: "image",
    },
    {
      name: "footer",
      title: "Footer",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "social",
      title: "Social Media",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
