# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.1](https://github.com/ArNAB-0053/kepr/compare/kepr-v0.3.0...kepr-v0.3.1) (2026-07-02)


### Fixed

* versioning ([c8d0477](https://github.com/ArNAB-0053/kepr/commit/c8d047728b33f113fc1697b33fa69232b24144d2))
* versioning ([da8a020](https://github.com/ArNAB-0053/kepr/commit/da8a020a76fb123e6787a7747120a6dd8a2164a5))

## [Unreleased]

## [1.0.0] - 2026-07-02

First stable public release of Kepr.

### Added
- MIT License to the repository.
- Markdown preview functionality for notes in extension popup.
- Default settings configuration constants for fallback handling.

### Changed
- Rebranded project from LeetPush to Kepr.
- Updated extension branding, icons, name, descriptions, and configurations.
- Refactored project directory structure and code organization.
- Updated popup Header to display the new Kepr logo icon instead of the generic code icon.
- Improved robustness of GitHub settings persistence and validation.

### Infrastructure
- Integrated Release Please for release automation setup.
- Configured release workflow configuration to use Release Please manifest-based setup (`release-please-config.json` and `.release-please-manifest.json`).
- Upgraded GitHub Actions workflows (build, release, submit) to use checkout@v4, setup-node@v4, setup-pnpm@v4.

## [0.1.0] - 2026-07-01

### Added
- GitHub repository synchronization.
- Notes support.
- Session tracking.
- Sync status tracking.
- Local storage service.

### Fixed
- Fixed settings page loading-state stability and unmounted component state update issues.
- Fixed Test Connection button validation issues.

### Infrastructure
- Added build validation workflow.
- Added release workflow for extension packaging.

[Unreleased]: https://github.com/ArNAB-0053/kepr/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/ArNAB-0053/kepr/compare/v0.1.0...v1.0.0
[0.1.0]: https://github.com/ArNAB-0053/kepr/releases/tag/v0.1.0
