const timeAgo = (dateString) => {
  const now = new Date();
  const then = new Date(dateString);
  const diff = (now - then) / 1000;

  if (diff < 60) return `${Math.floor(diff)}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
};

const loadLatestCommit = () => {
  fetch(
    "https://api.github.com/repos/eesazahed/eesa.zahed.ca/commits?per_page=1"
  )
    .then((res) => res.json())
    .then(([commit]) => {
      const container = document.getElementById("latest-commit");
      if (!container) return;

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
};

document.addEventListener("DOMContentLoaded", loadLatestCommit);
