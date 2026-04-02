#!/bin/bash
set -e

REMOTE="/domains/axislabs.co.uk/public_html/egg"
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_FILE="${PROJECT_DIR}/deploy-log.md"
REGISTER_DIR="${PROJECT_DIR}/deploy-register"
META_FILE="${PROJECT_DIR}/deploy-meta.env"

if [ -f "$META_FILE" ]; then
  set -a
  source "$META_FILE"
  set +a
fi

REQUEST_TIME="${DEPLOY_REQUEST_TIME:-$(date '+%Y-%m-%d %H:%M:%S %Z')}"
CHECKPOINT="${DEPLOY_CHECKPOINT:-deploy_$(date '+%H%M%S')}"
REQUEST_TEXT="${DEPLOY_REQUEST_TEXT:-manual deploy}"
CHANGE_SUMMARY="${DEPLOY_CHANGE_SUMMARY:-No change summary provided.}"
CHANGED_FILES="${DEPLOY_CHANGED_FILES:-src/components/mockup/ComponentsShowcase.tsx}"
source /Users/russparks/.openclaw/workspace/.secrets

cd "$PROJECT_DIR"
mkdir -p "$REGISTER_DIR"
REGISTER_FILE="${REGISTER_DIR}/${CHECKPOINT}.md"

if [ -f "$LOG_FILE" ]; then
  {
    echo "## ${CHECKPOINT}"
    echo "- Request time: ${REQUEST_TIME}"
    echo "- User instruction: ${REQUEST_TEXT}"
    echo "- Notes: deploy started"
    echo
  } >> "$LOG_FILE"
fi

{
  echo "# ${CHECKPOINT}"
  echo
  echo "- Request time: ${REQUEST_TIME}"
  echo "- User instruction: ${REQUEST_TEXT}"
  echo
  echo "## Change summary"
  printf '%s\n' "$CHANGE_SUMMARY" | sed 's/^/- /'
  echo
  echo "## Changed files"
  printf '%s\n' "$CHANGED_FILES" | sed 's/^/- /'
  echo
  echo "## Status"
  echo "- Deploy started"
} > "$REGISTER_FILE"

echo "→ Checkpoint: $CHECKPOINT"
echo "→ Building The Eggcountant..."
npm run build

echo "→ Deploying The Eggcountant to $REMOTE ..."
lftp -u "$FTP_USER,$FTP_PASS" "$FTP_HOST" << LFTP
set ftp:ssl-allow no
set net:timeout 30
mirror -R --delete dist/ ${REMOTE}/
mirror -R --delete media/ ${REMOTE}/media/
put .htaccess -o ${REMOTE}/.htaccess
mirror -R --delete api/ ${REMOTE}/api/
chmod 755 ${REMOTE}
chmod 755 ${REMOTE}/assets
chmod 755 ${REMOTE}/api
chmod 755 ${REMOTE}/media
cd ${REMOTE}
glob chmod 644 *
cd ${REMOTE}/assets
glob chmod 644 *
cd ${REMOTE}/api
glob chmod 644 *
cd ${REMOTE}/media
glob chmod 644 *
bye
LFTP

if [ -f "$LOG_FILE" ]; then
  {
    echo "- Result: deployed successfully"
    echo
  } >> "$LOG_FILE"
fi

{
  echo
  echo "- Deploy completed successfully"
} >> "$REGISTER_FILE"

cat > "$META_FILE" <<'EOF'
# Written before each deploy to avoid long inline env var commands.
DEPLOY_REQUEST_TIME=
DEPLOY_CHECKPOINT=
DEPLOY_REQUEST_TEXT=
DEPLOY_CHANGE_SUMMARY=
DEPLOY_CHANGED_FILES=
EOF

echo "✓ Deployed The Eggcountant."
