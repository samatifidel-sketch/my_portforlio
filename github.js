const USERNAME = "samatifidel-sketch";
const statusEl = document.getElementById("repos-status");
const listEl = document.getElementById("repos-list");

async function loadRepos() {
  statusEl.textContent = "Loading repositories...";
  try {
    const res = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`
    );
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    const repos = await res.json();

    if (repos.length === 0) {
      statusEl.textContent = "No public repositories yet.";
      return;
    }
    statusEl.textContent = "";
    renderRepos(repos);
  } catch (err) {
    statusEl.textContent = "Couldn't load repositories right now. Please try again later.";
    console.error(err);
  }
}

function renderRepos(repos) {
  repos.forEach(repo => {
    const card = document.createElement("article");
    const title = document.createElement("h3");
    const desc = document.createElement("p");
    const meta = document.createElement("p");
    const link = document.createElement("a");

    title.textContent = repo.name;
    desc.textContent = repo.description || "No description provided.";
    meta.textContent = `${repo.language || "N/A"} · ★ ${repo.stargazers_count}`;
    link.textContent = "View on GitHub";
    link.href = repo.html_url;
    link.target = "_blank";
    link.rel = "noopener";

    card.append(title, desc, meta, link);
    listEl.appendChild(card);
  });
}

loadRepos();