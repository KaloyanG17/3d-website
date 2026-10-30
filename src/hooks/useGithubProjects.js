import { useEffect, useState } from "react";
import { GITHUB_USER, PORTFOLIO_REPOS, projectOverrides, projects as fallbackProjects } from "../constants";

// The projects section lists the repos named in PORTFOLIO_REPOS (constants),
// in that order, using live details from GitHub: description, topics, link
// to the code and the repo's website as the live demo. Curated text and
// screenshots from projectOverrides take priority where they exist.
// The hand-written list is shown while loading, and if GitHub can't be
// reached (e.g. its 60 requests/hour limit for visitors).

const CACHE_KEY = "portfolio-projects-v2";
const CACHE_MS = 60 * 60 * 1000;
const TAG_COLORS = ["blue-text-gradient", "green-text-gradient", "pink-text-gradient"];

// "Simulated-Motorsport" → "Simulated Motorsport", "3d-website" → "3d Website"
const prettyName = (name) =>
  name.replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());

export function toProject(repo) {
  const override = projectOverrides[repo.name] ?? {};
  const topics = repo.topics ?? [];
  const tagNames = override.tags ?? (topics.length > 0 ? topics.slice(0, 4) : [repo.language].filter(Boolean));
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
    // One request for all public repos, then pick the listed ones in order.
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`, {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
    })
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((repos) => {
        const byName = new Map(repos.map((repo) => [repo.name.toLowerCase(), repo]));
        const chosen = PORTFOLIO_REPOS.map((name) => byName.get(name.toLowerCase()))
          .filter(Boolean)
          .map(toProject);
        if (chosen.length === 0) return;
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
