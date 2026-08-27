interface RichTextNode {
  nodeType?: string;
  value?: string;
  content?: RichTextNode[];
}

/** Concatenate every text descendant of a node. */
function plainText(node: RichTextNode): string {
  if (typeof node.value === "string") return node.value;
  return (node.content ?? []).map(plainText).join("");
}

/** Extract each top-level paragraph of a rich text document as a string. */
export function richTextToParagraphs(doc: unknown): string[] {
  const root = doc as RichTextNode | null | undefined;
  if (!root?.content) return [];

  return root.content
    .filter((node) => node.nodeType === "paragraph")
    .map(plainText)
    .map((text) => text.trim())
    .filter((text) => text.length > 0);
}

/** Flatten a rich text document to a single string (for meta descriptions). */
export function richTextToPlainText(doc: unknown): string {
  return richTextToParagraphs(doc).join(" ");
}
