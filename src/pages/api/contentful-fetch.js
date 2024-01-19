import client from "./contentful";

export default async function handler(req, res) {
  const contentType = req.query.content_type;
  try {
    const entries = await client.getEntries({
      content_type: contentType,
    });
    res.status(200).json(entries.items);
  } catch (error) {
    res.status(500).json(error);
  }
}
