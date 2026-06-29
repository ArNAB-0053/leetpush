/**
 * Helper methods to detect submission status from the LeetCode DOM.
 */

/**
 * Checks if a submission is currently being evaluated.
 */
export function detectPendingState(): boolean {
  const text = document.body.innerText
  return text.includes("Pending") || text.includes("Judging") || text.includes("Running")
}

/**
 * Validates if the submission is accepted by checking for the success badge
 * and verifying that we are looking at the active submission panel (execution details are visible).
 */
export function detectAcceptedState(): boolean {
  // Look for leaf elements that have the exact text "Accepted"
  const successBadge = Array.from(document.querySelectorAll("span, div, a")).find((el) => {
    return el.children.length === 0 && el.textContent?.trim() === "Accepted"
  })

  if (successBadge) {
    // Confirm we are on the submission results page containing execution metrics
    const text = document.body.innerText
    const hasExecutionMetrics = text.includes("Runtime") && text.includes("Memory")
    return hasExecutionMetrics
  }

  return false
}

/**
 * Checks if the submission failed with any known error (e.g., Wrong Answer, TLE, MLE, Runtime/Compile errors).
 */
export function detectFailedState(): boolean {
  const failedTerms = [
    "Wrong Answer",
    "Time Limit Exceeded",
    "Memory Limit Exceeded",
    "Runtime Error",
    "Compile Error"
  ]
  const text = document.body.innerText
  return failedTerms.some((term) => text.includes(term))
}
