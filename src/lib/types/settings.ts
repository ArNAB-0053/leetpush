/**
 * Represents the configuration settings for the GitHub integration.
 */
export interface GitHubSettings {
  pat: string;          // GitHub Personal Access Token
  repo: string;         // Repository name (e.g. "leetcode-solutions" or "interview-prep")
  rootPath: string;     // Base directory path in the repository (e.g. "DSA/LeetCode")
  isConfigured: boolean; // Flag to indicate if settings are configured and valid
}
