import sanityClient from "@sanity/client";

export const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  token: process.env.SANITY_API_KEY,
  useCdn: false,
});
