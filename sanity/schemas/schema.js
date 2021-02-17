import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    {
      title: "Inaction",
      name: "inaction",
      type: "document",
      fields: [
        { title: "Title", name: "title", type: "string" },
        { title: "Notes", name: "notes", type: "text" },
        { title: "Priority", name: "priority", type: "string" },
      ],
    },
  ]),
});
