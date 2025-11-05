import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const request = await fetch(
    "https://api.github.com/repos/eesazahed/photography/contents/"
  );

  if (!request.ok) {
    res.status(request.status).send("Failed to fetch images");
    return;
  }

  const data = await request.json();

  const photos = data.map((item: any) => encodeURIComponent(item.name));

  const links = photos
    .map(
      (name: string) =>
        `<li style="margin-bottom: 0.5rem;"><a target="_blank" href="/api/photos/${name}">${name}</a></li>`
    )
    .join("");

  const html = `
    <!DOCTYPE html>
    <html>
      <head><meta charset="utf-8"><title>Photos</title></head>
      <body style="font-family: sans-serif; max-width: 500px; margin: 10rem auto;">
        <h1>Eesa Photos</h1>
        <ul>${links}</ul>
      </body>
    </html>
  `;

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
