const baseURL = "https://raw.githubusercontent.com/eesazahed/photography/main/";

const images = [
  { file: "ds.jpg", alt: "my nintendo dsi" },
  { file: "turkiye11.JPG", alt: "hotel hallway" },
  { file: "turkiye5.JPG", alt: "cat in turkiye" },
  { file: "turkiye4.jpg", alt: "masjid in turkiye" },
  { file: "lego5.jpg", alt: "lego star wars" },
  { file: "turkiye6.jpg", alt: "view in turkiye" },
];

const gallery = document.getElementById("gallery");

document.addEventListener("DOMContentLoaded", () => {
  images.forEach(({ file, alt }) => {
    const src = baseURL + file;

    const a = document.createElement("a");
    a.className = "gallery-image-link";
    a.href = src;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.className = "gallery-image";
    img.src = src;
    img.alt = alt;

    a.appendChild(img);
    gallery.appendChild(a);
  });
});
