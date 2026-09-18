#!/usr/bin/env bash
# Push main to GitHub: uday-kiran-palepu/jnanadiksuchika
# Agent has no GitHub token — run this locally after `gh auth login` (WSL on Windows).

set -euo pipefail

OWNER="uday-kiran-palepu"
REPO="jnanadiksuchika"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

cd "$ROOT"

if ! command -v gh >/dev/null 2>&1; then
  echo "Install GitHub CLI: https://cli.github.com/"
  exit 1
fi

if ! gh auth status -h github.com >/dev/null 2>&1; then
  echo "Sign in first: gh auth login"
  exit 1
fi

if git remote get-url github >/dev/null 2>&1; then
  echo "Remote 'github' already configured: $(git remote get-url github)"
else
  git remote add github "https://github.com/${OWNER}/${REPO}.git"
fi

# Keep URL updated even if remote existed with old casing/path
git remote set-url github "https://github.com/${OWNER}/${REPO}.git"

git push -u github main
echo "Done. https://github.com/${OWNER}/${REPO}"
