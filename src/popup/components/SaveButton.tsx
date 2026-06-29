import React from "react"
import { RefreshCw, CheckCircle2, AlertTriangle } from "lucide-react"

interface SaveButtonProps {
  status: "unsaved" | "saving" | "saved" | "error" | null
  disabled: boolean
  onClick: () => void
}

/**
 * Custom inline GitHub SVG icon to prevent lucide-react export version conflicts.
 */
const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

/**
 * Premium interactive Save Button component with state transitions and micro-animations.
 */
export const SaveButton: React.FC<SaveButtonProps> = ({ status, disabled, onClick }) => {
  const getButtonContent = () => {
    switch (status) {
      case "saving":
        return (
          <>
            <RefreshCw className="h-4 w-4 animate-spin" />
            <span>Syncing to GitHub...</span>
          </>
        )
      case "saved":
        return (
          <>
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Synced Successfully!</span>
          </>
        )
      case "error":
        return (
          <>
            <AlertTriangle className="h-4 w-4" />
            <span>Retry Syncing</span>
          </>
        )
      default:
        return (
          <>
            <GithubIcon className="h-4 w-4" />
            <span>Save To GitHub</span>
          </>
        )
    }
  }

  const getButtonStyles = () => {
    const baseClass = "w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md select-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
    
    if (disabled && status !== "saving") {
      return `${baseClass} bg-secondary text-muted-foreground cursor-not-allowed opacity-60 border border-border shadow-none`
    }

    switch (status) {
      case "saving":
        return `${baseClass} bg-primary/20 text-primary border border-primary/30 cursor-wait`
      case "saved":
        return `${baseClass} bg-emerald-500/10 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/40 shadow-emerald-500/5`
      case "error":
        return `${baseClass} bg-destructive hover:bg-destructive/90 text-destructive-foreground`
      default:
        return `${baseClass} bg-primary hover:bg-primary/95 text-primary-foreground shadow-primary/20 hover:shadow-lg hover:-translate-y-[1px]`
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || status === "saving"}
      className={getButtonStyles()}
    >
      {getButtonContent()}
    </button>
  )
}
export default SaveButton
