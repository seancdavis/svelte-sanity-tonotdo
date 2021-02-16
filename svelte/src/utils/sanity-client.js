import sanityClient from "@sanity/client";

export const sanity = sanityClient({
  projectId: "SANITY_PROJECT_ID",
  dataset: "production",
  token: "SANITY_API_KEY",
  useCdn: true,
});
