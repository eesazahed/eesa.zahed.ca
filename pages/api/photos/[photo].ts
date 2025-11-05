import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { photo } = req.query;

  if (typeof photo !== "string") {
    return res.status(400).json({ message: "Invalid photo name" });
  }

  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/eesazahed/photography/main/${photo}`
    );

    if (!response.ok) {
      return res.status(404).json({ message: "Image not found" });
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const ext = photo.split(".").pop()?.toLowerCase();
    const mimeType =
      ext === "jpg" || ext === "jpeg"
        ? "image/jpeg"
        : ext === "png"
        ? "image/png"
        : ext === "gif"
        ? "image/gif"
        : ext === "webp"
        ? "image/webp"
        : "application/octet-stream";

    res.setHeader("Content-Type", mimeType);
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

    res.status(200).end(buffer);
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
