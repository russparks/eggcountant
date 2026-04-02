#!/bin/bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PROJECT_NAME="$(basename "$PROJECT_DIR")"
BACKUP_DIR="${BACKUP_DIR:-/Users/russparks/Desktop/Egg BUs}"
CHECKPOINT="${CHECKPOINT:-backup_$(date +%H%M%S)}"
ARCHIVE_PATH="${BACKUP_DIR}/${CHECKPOINT}.zip"

mkdir -p "$BACKUP_DIR"

cd "$(dirname "$PROJECT_DIR")"
/usr/bin/zip -qry "$ARCHIVE_PATH" "$PROJECT_NAME"

printf '%s\n' "$ARCHIVE_PATH"
