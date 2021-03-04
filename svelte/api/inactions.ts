import type { SanityDocumentStub } from "@sanity/client";

import { sanity } from "../utils/sanity-client";

const getInactions = async () => {
  const query = '*[_type == "inaction"]{ _id, title, notes, priority }';
  return await sanity.fetch(query);
};

const createInaction = async ({ title, notes }) => {
  const inaction: SanityDocumentStub = { _type: "inaction", title, notes };
  return await sanity.create(inaction);
};

const deleteInaction = async ({ id }) => {
  if (!id) return { error: "Please provide object with id key" };
  return await sanity.delete(id);
};

const methodMap = {
  GET: getInactions,
  POST: createInaction,
  DELETE: deleteInaction,
};

module.exports = async (req, res) => {
  if (!methodMap[req.method]) {
    return res.send({
      error: "Could not find method to run.",
    });
  }

  const response = await methodMap[req.method](req.body);

  res.send(response);
};
