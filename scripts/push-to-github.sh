#!/usr/bin/env bash
# Push main to GitHub repo: uday-kiran-palepu/JnanaDiksuchika
# Requires: GitHub CLI (gh) authenticated — run `gh auth login` first (WSL on Windows).

set -euo pipefail

OWNER="uday-kiran-palepu"
REPO="JnanaDiksuchika"
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
  echo "Remote 'github' already configured."
else
  if gh repo view "${OWNER}/${REPO}" >/dev/null 2>&1; then
    gh repo clone "${OWNER}/${REPO}" /tmp/jd-github-empty-check 2>/dev/null || true
    git remote add github "https://github.com/${OWNER}/${REPO}.git"
  else
    echo "Creating GitHub repository ${OWNER}/${REPO}..."
    gh repo create "${OWNER}/${REPO}" --public --description "Jnana Diksuchika — engineering education site (Next.js)" --source=. --remote=github
    git push -u github main
    echo "Done. https://github.com/${OWNER}/${REPO}"
    exit 0
  fi
fi

git push -u github main
echo "Done. https://github.com/${OWNER}/${REPO}"
