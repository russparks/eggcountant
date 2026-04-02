# DELIO-egg.md

Project memory for The Eggcountant project (formerly `egg2`).

## Purpose
- This project started as the hidden development version of The Eggcountant under the temporary folder name `egg2`.
- It now lives locally at `/Users/russparks/.openclaw/workspace/projects/web/theeggcountant`.
- It deploys to: `/domains/axislabs.co.uk/public_html/egg`
- Public URL: `https://www.axislabs.co.uk/egg/`
- Components playground URL: `https://www.axislabs.co.uk/egg/components`

## Current setup
- Vite base is set to `/egg/`
- deploy.sh uploads:
  - `dist/`
  - `api/`
  - `.htaccess`
  - `media/`
- deploy.sh also fixes remote permissions so assets are readable.
- Working media assets are stored in local `media/`

## Important fixes already made
- Fixed subpath deploy base for `/egg/`
- Fixed remote permissions on `/egg/assets`
- Fixed `.htaccess` SPA fallback for `/egg`
- Replaced broken API files with working API stack copied from `the-eggcountant`
- Added favicon support
- Created hidden components/mockup page

## UI progress
### Header
- Sticky top header
- White background
- Eggcountant logo on left
- Settings icon on right
- Header approved by Russ

### Intro line
- Added heading under header:
  - "This week, in a Nutshell..."
- Reduced size by 20%
- Styled "Nut" lighter and struck through

### Hero card
- Updated hero copy to:
  - "Your girls laid 94 eggs and earned you £13.25 in profit!"
- Removed "THIS WEEK"
- Updated subtext to:
  - "Nice little bump from last week, Willow is still showing egg-stra effort..."
- Changed hero background to a pale lilac/white gradient
- Trend card floats right so text wraps around it

## Backup rule
When Russ says "backup" for this project:
1. Zip the entire folder: `/Users/russparks/.openclaw/workspace/projects/web/theeggcountant`
2. Save the zip on Desktop
3. Create a checkpoint name
4. Use the checkpoint name as the zip filename
5. Update this file (`DELIO-egg.md`) before or during backup so it stays current

## Deploy checkpoint rule
For every deploy/edit request from Russ:
1. Create a checkpoint tied to the time of Russ's deploy/edit request
2. Use short format: `deploy_HHMMSS`
3. Store a local deploy log entry for that checkpoint
4. Include the user’s edit/deploy instruction as context in the log/checkpoint record
5. Keep enough detail that any deploy moment can be identified and reverted later

## Checkpoint naming format
- backup/manual checkpoints: `egg2-checkpoint-YYYYMMDD-HHMMSS`
- deploy checkpoints: `deploy_HHMMSS`

## Working style
- Iterate top-down from mockup
- Tune components on hidden components page first
- Move polished components into live homepage later
- Keep replies short and action-focused

## Component naming convention
Use PascalCase for component names.

### Top-level components
- Header
- PageTitle
- WeeklySummaryCard
- MetricCard
- MiniStatCard
- HenCard
- LocationProgressCard
- RollingLayRateCard

### Nested elements
Use: ParentName + ChildName

Examples:
- HeaderLogo
- HeaderSettingsButton
- HeaderSettingsIcon
- PageTitleText
- PageTitleStrikeWord
- WeeklySummaryCardHeadline
- WeeklySummaryCardSubtext
- WeeklySummaryCardTrendPill
- WeeklySummaryCardTrendValue
- WeeklySummaryCardTrendIcon
- MetricCardIcon
- MetricCardTitle
- MetricCardValue
- MetricCardSubtitle
- HenCardName
- HenCardRank
- HenCardValue
- HenCardSubtext

### Naming rules
1. Top-level components get short, human names
2. Nested elements use ParentChild naming
3. Reusable visual units should consistently use `Card` where appropriate
4. Avoid vague names or swapping between synonyms like Panel/Box/Card
5. Use these names in future review/change requests so discussions stay precise

## egg2-checkpoint-20260330-010606
- Backup created on Desktop: egg2-checkpoint-20260330-010606.zip
- State: component playground updated with WeeklySummaryCard section and ExpenseCard Section layout fixes.
- Latest rule: component labels are shown only on the components page for main components.

## egg2-checkpoint-20260330-011300
- Backup created on Desktop: egg2-checkpoint-20260330-011300.zip
- State: WeeklySummaryCard section grouped correctly, ExpenseCard Section placed beneath it, expense cards aligned on one row, and oversized UI icons were trimmed for better responsiveness.
- End of session checkpoint before stopping for the night.

## egg2-checkpoint-20260330-203926
- Backup created on Desktop: egg2-checkpoint-20260330-203926.zip
- State: ExpenseCard Section removed from the components page. Added a new ProfitLossCard section above MiniStatCard with Sales, Expenses, and Cluck Statement. Remote permissions were fixed for settings-icon.png and menu-icon.png so those assets are now readable online.
- Latest deploy state restored after size-iteration rollback, then asset permissions corrected directly on the server.

## egg2-checkpoint-20260331-000539
- Backup created on Desktop: egg2-checkpoint-20260331-000539.zip
- State: Components page now includes ProfitLossCard, MiniStatCardHalf, redesigned HenCard cards, a relocated RollingLayRateCard, and a visible CalendarCard month view with filter buttons and highlighted logged-entry dates.
- Deploy workflow now records `deploy_HHMMSS` checkpoints with request-time context in `deploy-log.md` for later rollback.

## Checkpoint backup_084255
- Type: manual backup zip
- Created: 2026-03-31 08:42 BST
- Archive: /Users/russparks/Desktop/backup_084255.zip
- Context: Russ requested `backup` from control UI after latest metric-card background and wiki card edits.

## Checkpoint backup_093432
- Type: manual backup zip
- Created: 2026-03-31 09:34 BST
- Archive: /Users/russparks/Desktop/backup_093432.zip
- Context: Russ requested `backup` after header/settings popup animation and icon sizing updates.

## Checkpoint backup_103859
- Type: manual backup zip
- Created: 2026-03-31 10:38 BST
- Archive: /Users/russparks/Desktop/backup_103859.zip
- Context: Russ requested `backup` after profile card layout/image/icon refinements and spacing tweaks.

## Checkpoint backup_110300
- Type: manual backup zip
- Created: 2026-03-31 11:03 BST
- Archive: /Users/russparks/Desktop/backup_110300.zip
- Context: Russ requested `backup` after re-testing and re-enabling the profile trophy overlay image swap only.

## Checkpoint backup_111958
- Type: manual backup zip
- Created: 2026-03-31 11:19 BST
- Archive: /Users/russparks/Desktop/backup_111958.zip
- Context: Russ requested `backup` after coop card refinements, two-line title reservation, and image border/radius updates before taking a break.

## Checkpoint backup_213240
- Type: manual backup zip
- Created: 2026-03-31 21:32 BST
- Archive: /Users/russparks/Desktop/backup_213240.zip
- Context: Russ requested `backup`. Local backup completed. Git push not attempted because egg2 currently points at origin=https://github.com/russparks/openclaw.git rather than the new egg2 repo.

## Checkpoint backup_222529
- Type: manual backup zip
- Created: 2026-03-31 22:25 BST
- Archive: /Users/russparks/Desktop/backup_222529.zip
- Context: Russ requested `backup` after chick card modal/functionality work, including add/edit chicks modal flows and tap-cycle hatch tracking.

## Checkpoint backup_230409
- Type: manual backup zip
- Created: 2026-03-31 23:04 BST
- Archive: /Users/russparks/Desktop/backup_230409.zip
- Context: Russ requested `backup` after Add Chicks modal refinements and before returning to chick cards.

## Backup destination rule
- Future project backup zips should go into `/Users/russparks/Desktop/Egg BUs/` instead of directly on the Desktop.

## Checkpoint backup_234024
- Type: manual backup zip
- Created: 2026-03-31 23:40 BST
- Archive: /Users/russparks/Desktop/Egg BUs/backup_234024.zip
- Context: Russ requested `backup` after wrapping the first chick-card pass, including modals, delete confirm, and gradient styling.

## Checkpoint backup_002500
- Type: manual backup zip
- Created: 2026-04-01 00:25 BST
- Archive: /Users/russparks/Desktop/Egg BUs/backup_002500.zip
- Context: Russ requested final bedtime backup after restoring Add Chicks alongside Add Eggs and removing dictation wording from note placeholders.

## Checkpoint backup_225128
- Type: manual backup zip
- Created: 2026-04-01 22:51 BST
- Archive: /Users/russparks/Desktop/backup_225128.zip
- Context: Russ requested `backup` after latest meds modal layout/styling iterations and deploy workflow improvements.

## Checkpoint backup_100555
- Type: manual backup zip
- Created: 2026-04-02 10:05 BST
- Archive: /Users/russparks/Desktop/Egg BUs/backup_100555.zip
- Context: Russ requested a safety backup immediately before renaming the local project folder from `egg2` to `theeggcountant`.

## Rename event 2026-04-02
- Local project folder renamed from `/Users/russparks/.openclaw/workspace/projects/web/egg2` to `/Users/russparks/.openclaw/workspace/projects/web/theeggcountant`.
- Remote deploy target remains `/egg/` for now.
- Next repo target Russ is creating: `russparks/eggcountant`.

