import { useEffect, useState } from "react";
import { GITHUB_USER, PORTFOLIO_TOPIC, projectOverrides, projects as fallbackProjects } from "../constants";

// Projects come straight from GitHub: every public repo with the
// PORTFOLIO_TOPIC topic is shown, newest activity first. Add or remove the
// topic on a repo (GitHub → repo → About → Topics) to choose what appears.
// The hand-written list in constants is shown while loading, and if GitHub
// can't be reached (e.g. its 60 requests/hour limit for visitors).

const CACHE_KEY = "portfolio-projects-v1";
const CACHE_MS = 60 * 60 * 1000;
const TAG_COLORS = ["blue-text-gradient", "green-text-gradient", "pink-text-gradient"];

// "Simulated-Motorsport" → "Simulated Motorsport", "3d-website" → "3d Website"
const prettyName = (name) =>
  name.replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());

export function toProject(repo) {
  const override = projectOverrides[repo.name] ?? {};
  const topics = (repo.topics ?? []).filter((topic) => topic !== PORTFOLIO_TOPIC);
  const tagNames = override.tags ?? (topics.length > 0 ? topics : [repo.language].filter(Boolean));
  return {
    name: override.name ?? prettyName(repo.name),
    description: override.description ?? repo.description ?? "",
    tags: tagNames.map((name, i) => ({ name, color: TAG_COLORS[i % TAG_COLORS.length] })),
    // GitHub renders a preview card for every repo; overrides can use a screenshot instead.
    image: override.image ?? `https://opengraph.githubassets.com/1/${repo.full_name}`,
    source_code_link: repo.html_url,
    demo_link: repo.homepage || null,
  };
}

function readCache() {
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY));
    return cached && Date.now() - cached.at < CACHE_MS ? cached.projects : null;
  } catch {
    return null;
  }
}

export function useGithubProjects() {
  const [state, setState] = useState(() => {
    const cached = readCache();
    return { projects: cached ?? fallbackProjects, live: Boolean(cached) };
  });

  useEffect(() => {
    if (state.live) return;
    const controller = new AbortController();
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`, {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
    })
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((repos) => {
        const chosen = repos.filter((repo) => !repo.fork && repo.topics?.includes(PORTFOLIO_TOPIC)).map(toProject);
        if (chosen.length === 0) return; // nothing tagged yet: keep the hand-written list
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), projects: chosen }));
        } catch {
          // private mode or full storage: just skip caching
        }
        setState({ projects: chosen, live: true });
      })
      .catch(() => {}); // offline or rate-limited: the fallback list stays
    return () => controller.abort();
  }, [state.live]);

  return state;
}
