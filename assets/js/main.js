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
    description: "all photographs are my original works",
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

const timeAgo = (dateString) => {
  const now = new Date();
  const then = new Date(dateString);
  const diff = (now - then) / 1000;

  if (diff < 60) return `${Math.floor(diff)}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
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

  fetch(
    "https://api.github.com/repos/eesazahed/eesa.zahed.ca/commits?per_page=1"
  )
    .then((res) => res.json())
    .then(([commit]) => {
      const container = document.getElementById("latest-commit");

      const hash = commit.sha.substring(0, 7);
      const relative = timeAgo(commit.commit.author.date);

      container.innerHTML = `
        latest commit:
        <a
          href="https://github.com/eesazahed/eesa.zahed.ca/commit/${commit.sha}"
          target="_blank"
          rel="noopener noreferrer"
          class="commit-link"
        >${hash}</a>
        (${relative})
      `;
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
