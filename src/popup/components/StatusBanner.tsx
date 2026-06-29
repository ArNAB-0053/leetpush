import React from "react"
import { AlertCircle, CheckCircle2, RefreshCw } from "lucide-react"

interface StatusBannerProps {
  status: "unsaved" | "saving" | "saved" | "error" | null
  errorMsg: string | null
  repo: string | null
}

/**
 * Alert banner displaying real-time feedback for sync actions.
 */
export const StatusBanner: React.FC<StatusBannerProps> = ({ status, errorMsg, repo }) => {
  if (!status) return null

  switch (status) {
    case "saved":
      return (
        <div className="flex gap-2.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-xs text-emerald-400">
          <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold leading-none">Solution Synced!</p>
            <p className="text-[10px] text-emerald-500/80 leading-normal font-medium">
              Your solution and metadata.json have been successfully committed to {repo || "repository"}.
            </p>
          </div>
        </div>
      )
    case "error":
      return (
        <div className="flex gap-2.5 rounded-lg border border-rose-500/20 bg-rose-500/10 p-3 text-xs text-rose-400">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold leading-none">Synchronization Failed</p>
            <p className="text-[10px] text-rose-500/80 leading-normal font-medium">
              {errorMsg || "An error occurred while pushing files to GitHub."}
            </p>
          </div>
        </div>
      )
    case "saving":
      return (
        <div className="flex gap-2.5 rounded-lg border border-blue-500/20 bg-blue-500/10 p-3 text-xs text-blue-400">
          <RefreshCw size={16} className="shrink-0 mt-0.5 animate-spin" />
          <div className="space-y-1">
            <p className="font-bold leading-none">Uploading Solution</p>
            <p className="text-[10px] text-blue-500/80 leading-normal font-medium">
              Committing files to your GitHub repository...
            </p>
          </div>
        </div>
      )
    default:
      return null
  }
}
export default StatusBanner
