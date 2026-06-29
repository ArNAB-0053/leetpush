/**
 * Represents a topic tag associated with a LeetCode problem (e.g. "Array", "Dynamic Programming").
 * In LeetCode's internal data, these tags are structured objects.
 */
export interface TopicTag {
  name: string; // The user-friendly name of the topic tag, e.g. "Hash Table"
  slug: string; // The URL/ID slug of the topic tag, e.g. "hash-table"
}

/**
 * Represents the structured metadata extracted from a LeetCode problem page.
 * This is the interface used by the rest of our extension.
 */
export interface ProblemData {
  title: string;       // The name of the problem, e.g., "Two Sum"
  titleSlug: string;   // The slug used in the URL, e.g., "two-sum"
  difficulty: string;  // The difficulty level, e.g., "Easy", "Medium", "Hard"
  topics: string[];    // Array of topic tag names, e.g., ["Array", "Hash Table"]
  url: string;         // The full URL of the problem page
}
