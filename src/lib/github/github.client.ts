import { Octokit } from "@octokit/rest"

/**
 * Creates and returns an instantiated Octokit client for making GitHub API requests.
 * Uses @octokit/rest which is designed to run in browser extension backgrounds.
 * 
 * @param pat GitHub Personal Access Token (PAT)
 */
export function getOctokitClient(pat: string): Octokit {
  return new Octokit({
    auth: pat,
  })
}
