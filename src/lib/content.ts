import { getClient, useMockContent } from "./contentful";
import { richTextToParagraphs } from "./richText";
import * as mock from "./mock";

export interface ImageRef {
  url: string;
  width?: number;
  height?: number;
  alt: string;
}

export interface HomeParagraph {
  text: string;
  position: number;
}

export interface BioSection {
  paragraphs: string[];
  image: ImageRef | null;
}

export interface Recording {
  videoId: string;
  description: string;
  position: number;
}

export interface PhilosophySection {
  paragraphs: string[];
}

// Explicit <any> for Contentful JSON. Narrows as we get each item so it'll
// fail at build if there are API changes.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RawFields = Record<string, any>;

async function entries(contentType: string): Promise<RawFields[]> {
  const res = await getClient().getEntries({
    content_type: contentType,
    include: 2,
    limit: 200,
  });
  return res.items.map((item) => item.fields as RawFields);
}

/** Sort by a numeric `position` field, leaving CMS order for ties. */
function byPosition<T extends { position: number }>(a: T, b: T): number {
  return a.position - b.position;
}

function toImage(
  asset: RawFields | undefined,
  fallbackAlt: string,
): ImageRef | null {
  const file = asset?.fields?.file;
  if (!file?.url) return null;

  const url = String(file.url).startsWith("//")
    ? `https:${file.url}`
    : String(file.url);

  return {
    url,
    width: file.details?.image?.width,
    height: file.details?.image?.height,
    // The old <Image> in BioSection had no alt attribute at all.
    alt: asset?.fields?.description || asset?.fields?.title || fallbackAlt,
  };
}

export function extractYouTubeId(url: unknown): string | null {
  if (typeof url !== "string") return null;
  const match = url.match(
    /(?:youtu\.be\/|\/v\/|\/u\/\w\/|\/embed\/|watch\?v=|shorts\/)([A-Za-z0-9_-]{11})/,
  );
  return match ? match[1] : null;
}

export async function getHomeParagraphs(): Promise<HomeParagraph[]> {
  if (useMockContent) return [...mock.homeParagraphs].sort(byPosition);

  return (await entries("homeParagraphs"))
    .map((f) => ({
      text: String(f.paragraphText ?? ""),
      position: Number(f.position ?? 0),
    }))
    .filter((p) => p.text.length > 0)
    .sort(byPosition);
}

export async function getBioHeader(): Promise<string> {
  if (useMockContent) return mock.bioHeader;

  const items = await entries("bioHeader");
  return String(items[0]?.bioHeader ?? "");
}

export async function getBioSections(): Promise<BioSection[]> {
  if (useMockContent) return mock.bioSections;

  return (await entries("bioSection"))
    .map((f) => ({
      paragraphs: richTextToParagraphs(f.text),
      image: toImage(f.image, "Robbie Collins performing"),
    }))
    .filter((s) => s.paragraphs.length > 0 || s.image !== null);
}

export async function getRecordings(): Promise<Recording[]> {
  if (useMockContent) return [...mock.recordings].sort(byPosition);

  return (
    (await entries("recording"))
      .map((f) => ({
        videoId: extractYouTubeId(f.url),
        description: String(f.description ?? ""),
        position: Number(f.position ?? 0),
      }))
      // Drop entries whose URL did not parse rather than embedding a dead iframe.
      .filter((r): r is Recording => r.videoId !== null)
      .sort(byPosition)
  );
}

export async function getPhilosophy(): Promise<PhilosophySection> {
  if (useMockContent) return mock.philosophy;

  const items = await entries("teachingPhilosophy");
  return { paragraphs: richTextToParagraphs(items[0]?.text) };
}
