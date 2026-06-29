import React, { useState, useEffect } from "react"
import { GitHubSettings } from "../components/GitHubSettings"
import { storageService } from "~lib/storage/storage.service"
import { githubService } from "~lib/github/github.service"
import type { GitHubSettings as SettingsType } from "~lib/types/settings"

/**
 * Settings configuration screen for LeetPush.
 * Manages loading/persisting settings and invoking credentials validation services.
 */
export const Settings: React.FC = () => {
  const [settings, setSettings] = useState<SettingsType | null>(null)

  useEffect(() => {
    const loadSettings = async () => {
      const currentSettings = await storageService.getGitHubSettings()
      setSettings(currentSettings)
    }
    loadSettings()
  }, [])

  const handleSaveSettings = async (newSettings: SettingsType) => {
    await storageService.setGitHubSettings(newSettings)
    setSettings(newSettings)
  }

  const handleTestConnection = async (pat: string, repo: string) => {
    const result = await githubService.validateCredentials(pat, repo)
    return result
  }

  return (
    <div className="space-y-4 px-4 py-4">
      <div>
        <h2 className="text-sm font-bold text-foreground">GitHub Integration</h2>
        <p className="text-[10px] text-muted-foreground mt-0.5">
          Configure repository credentials to sync your solutions automatically.
        </p>
      </div>

      <GitHubSettings
        initialSettings={settings}
        onSave={handleSaveSettings}
        onTestConnection={handleTestConnection}
      />
    </div>
  )
}
export default Settings
