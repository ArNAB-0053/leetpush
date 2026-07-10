/**
 * Sanitizes a folder path by removing invalid characters and formatting it correctly.
 * Invalid characters for repository/folder paths are: \ : * ? " < > |
 * Collapses consecutive slashes and trims leading/trailing slashes and whitespace.
 */
export function sanitizePath(path: string): string {
  if (!path) return ""
  // Remove invalid characters
  let sanitized = path.replace(/[\\:*?"<>|]/g, "")
  // Collapse consecutive slashes
  sanitized = sanitized.replace(/\/+/g, "/")
  // Trim leading/trailing slashes and whitespace
  sanitized = sanitized.trim().replace(/^\/|\/$/g, "").trim()
  return sanitized
}

/**
 * Normalizes rootPath configurations to extract base directories,
 * stripping trailing "LeetCode" or "GeeksForGeeks" to prevent duplicated platform directories.
 * Examples:
 *   "LeetCode" -> ""
 *   "DSA/LeetCode" -> "DSA"
 *   "DSA/GeeksForGeeks" -> "DSA"
 */
export function normalizeBaseDirectory(rootPath: string): string {
  if (!rootPath) return ""
  
  // Clean basic formatting first
  let baseDir = rootPath.trim().replace(/^\/+|\/+$/g, "")
  
  // Strip trailing "LeetCode" or "GeeksForGeeks" (case-insensitive)
  if (baseDir.toLowerCase().endsWith("/leetcode")) {
    baseDir = baseDir.substring(0, baseDir.length - 9)
  } else if (baseDir.toLowerCase() === "leetcode") {
    baseDir = ""
  } else if (baseDir.toLowerCase().endsWith("/geeksforgeeks")) {
    baseDir = baseDir.substring(0, baseDir.length - 14)
  } else if (baseDir.toLowerCase() === "geeksforgeeks") {
    baseDir = ""
  }
  
  // Collapse slashes and trim again
  return baseDir.replace(/\/+/g, "/").replace(/^\/+|\/+$/g, "").trim()
}
