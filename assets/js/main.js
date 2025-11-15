const myLinks = [
  {
    name: "github",
    url: "https://github.com/eesazahed",
    description: "my repos",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/eszhd/",
    description: "my profile",
  },
  {
    name: "hack club slack",
    url: "https://hackclub.slack.com/team/U074SFQFJMS",
    description: "say hi",
  },
  {
    name: "freecodecamp",
    url: "https://www.freecodecamp.org/news/author/eesazahed/",
    description: "my articles",
  },
  {
    name: "album",
    url: "https://eesazahed.github.io/album/",
    description: "all original works",
  },
  {
    name: "twitter",
    url: "https://x.com/eesazahed",
    description: "i never use it",
  },
  {
    name: "instagram",
    url: "https://instagram.com/eesazahed",
    description: "i never use it",
  },
  {
    name: "bluesky",
    url: "https://bsky.app/profile/eszhd.bsky.social",
    description: "i never use it",
  },
  {
    name: "gratefultime",
    url: "https://gratefultime.app",
    description: "my ios app",
  },
];

const renderLink = ({ name, url, description }) => {
  const li = document.createElement("li");
  li.className = "list-item";

  const a = document.createElement("a");
  a.className = "list-item-link";
  a.href = url;
  a.textContent = name;
  a.target = "_blank";
  a.rel = "noreferrer";

  const span = document.createElement("span");
  span.className = "description";
  span.textContent = ` ~ ${description}`;

  li.appendChild(a);
  li.appendChild(span);
  return li;
};

document.addEventListener("DOMContentLoaded", () => {
  const linksUl = document.getElementById("links");

  fetch("https://api.github.com/users/eesazahed")
    .then((res) => res.json())
    .then((data) => {
      myLinks[0].description = `my ${data.public_repos || 0} public repos`;
    })
    .finally(() => {
      for (const link of myLinks) {
        linksUl.appendChild(renderLink(link));
      }
    });

  const email = document.getElementById("email");
  const decoded = atob("ZXN6aGQxQGdtYWlsLmNvbQ==");
  let revealed = false;

  email.addEventListener("click", async (e) => {
    e.preventDefault();

    if (!revealed) {
      email.textContent = decoded;
      revealed = true;
      return;
    }

    try {
      await navigator.clipboard.writeText(decoded);
      alert("copied to clipboard");
    } catch (err) {
      console.log("clipboard error", err);
    }
  });
});
