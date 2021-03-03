import type { SanityDocumentStub } from "@sanity/client";

export interface Inaction extends SanityDocumentStub {
  _type: string;
  _id?: string;
  title: string;
  notes: Text;
}
