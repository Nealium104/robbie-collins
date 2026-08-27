import { createClient, type ContentfulClientApi } from "contentful";

const space = import.meta.env.CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.CONTENTFUL_DELIVERY_TOKEN;

export const useMockContent = import.meta.env.USE_MOCK_CONTENT === "true";

export const hasCredentials = Boolean(space && accessToken);

let client: ContentfulClientApi<undefined> | null = null;

export function getClient(): ContentfulClientApi<undefined> {
  if (!hasCredentials) {
    throw new Error(
      "Contentful credentials are missing. Set CONTENTFUL_SPACE_ID and " +
        "CONTENTFUL_DELIVERY_TOKEN in .env, or run with USE_MOCK_CONTENT=true " +
        "to build against placeholder content.",
    );
  }
  client ??= createClient({ space, accessToken });
  return client;
}
