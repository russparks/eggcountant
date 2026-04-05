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
1. Run helper script: `/Users/russparks/.openclaw/workspace/projects/web/theeggcountant/scripts/backup.sh`
2. It zips the entire folder: `/Users/russparks/.openclaw/workspace/projects/web/theeggcountant`
3. Save the zip in `/Users/russparks/Desktop/Egg BUs/`
4. Create a checkpoint name
5. Use the checkpoint name as the zip filename
6. Update this file (`DELIO-egg.md`) before or during backup so it stays current

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

## Checkpoint deploy_105354
- Type: deploy checkpoint
- Created: 2026-04-05 10:53 BST
- Context: Russ requested `deploy` right after the header logo reference was changed from `henlife-logo.png` to `henlife-logo-800.png`.
- Scope: `src/components/mockup/AppShellPage.tsx` now points at `/egg/media/icons/henlife-logo-800.png`.
- Backup archive: `/Users/russparks/Desktop/deploy_105354.zip`

## Checkpoint deploy_110426
- Type: deploy checkpoint
- Created: 2026-04-05 11:04 BST
- Context: Russ requested `deploy` after moving the exact `This week, in a nutshell...` title from the components showcase onto the Home page.
- Scope: `src/components/mockup/AppShellPage.tsx` Home view title now matches the showcase formatting.

## Checkpoint deploy_110521
- Type: deploy checkpoint
- Created: 2026-04-05 11:05 BST
- Context: Russ requested the `ProfitLossCard` on Home after the page title migration.
- Scope: `src/components/mockup/AppShellPage.tsx` Home view now includes the showcase `ProfitLossCard` directly under the title.

## Checkpoint deploy_110703
- Type: deploy checkpoint
- Created: 2026-04-05 11:07 BST
- Context: Russ requested the two `MiniStatCardHalf` cards after the `ProfitLossCard` move.
- Scope: `src/components/mockup/AppShellPage.tsx` Home view now includes the `Yokes to Go` and `Buns to Cook` cards below the `ProfitLossCard`.

## Checkpoint deploy_111200
- Type: deploy checkpoint
- Created: 2026-04-05 11:12 BST
- Context: Russ requested the page title to move underneath the `ProfitLossCard`.
- Scope: `src/components/mockup/AppShellPage.tsx` Home view order changed to `ProfitLossCard` → page title → two `MiniStatCardHalf` cards.

## Checkpoint deploy_111400
- Type: deploy checkpoint
- Created: 2026-04-05 11:14 BST
- Context: Russ reverted that layout change and asked for the title back at the top, but smaller.
- Scope: `src/components/mockup/AppShellPage.tsx` Home view order is back to title → `ProfitLossCard` → two `MiniStatCardHalf` cards, with the title reduced to H2-style sizing.

## Checkpoint deploy_111600
- Type: deploy checkpoint
- Created: 2026-04-05 11:16 BST
- Context: Russ requested a divider and the HenCard section next.
- Scope: `src/components/mockup/AppShellPage.tsx` Home view now includes an `hr` beneath the mini stat cards, followed by Willow, Dotty, Mabel, and the Egg-volution graphic.

## Checkpoint deploy_112000
- Type: deploy checkpoint
- Created: 2026-04-05 11:20 BST
- Context: Russ requested the `RollingLayRateCard` after the HenCard block.
- Scope: `src/components/mockup/AppShellPage.tsx` Home view now includes an additional `hr` and the showcase `RollingLayRateCard` below the HenCard section.

## Checkpoint deploy_112300
- Type: deploy checkpoint
- Created: 2026-04-05 11:23 BST
- Context: Russ requested the WikiElements section next, with a reduced set of cards.
- Scope: `src/components/mockup/AppShellPage.tsx` Home view now includes an `hr`, one pun card, three article cards, and one show-more button below the `RollingLayRateCard`.

## Checkpoint deploy_112600
- Type: deploy checkpoint
- Created: 2026-04-05 11:26 BST
- Context: Russ wanted placeholder copy above the wiki cards.
- Scope: `src/components/mockup/AppShellPage.tsx` Home view now includes centered purple H3 text saying `wiki text here` between the divider and the wiki section.

## Checkpoint deploy_113300
- Type: deploy checkpoint
- Created: 2026-04-05 11:33 BST
- Context: Russ switched back to `ComponentsShowcase.tsx` tweaks and requested a new FillEffects sample card.
- Scope: `src/components/mockup/ComponentsShowcase.tsx` now includes an extra FillEffects card using the supplied SVG tiled background.

## Checkpoint deploy_114100
- Type: deploy checkpoint
- Created: 2026-04-05 11:41 BST
- Context: Russ manually altered the showcase file and asked for a deploy.
- Scope: latest local `src/components/mockup/ComponentsShowcase.tsx` state deployed as-is.

## Checkpoint deploy_114400
- Type: deploy checkpoint
- Created: 2026-04-05 11:44 BST
- Context: Russ corrected the SVG fill background after the earlier showcase edit.
- Scope: `src/components/mockup/ComponentsShowcase.tsx` `svg-g` card now uses the corrected 56x28 tiled SVG background.

## Checkpoint deploy_115600
- Type: deploy checkpoint
- Created: 2026-04-05 11:56 BST
- Context: Russ wanted to verify shared-component cascading with a MiniStatCardHalf typography change.
- Scope: `src/components/mockup/sharedHomeComponents.tsx` now increases the MiniStatCardHalf title/value sizing for both showcase and Home.

## Checkpoint deploy_115800
- Type: deploy checkpoint
- Created: 2026-04-05 11:58 BST
- Context: Russ continued the cascade test by changing the MiniStatCardHalf background treatment.
- Scope: `src/components/mockup/sharedHomeComponents.tsx` now gives MiniStatCardHalf the light-g gradient on both showcase and Home.

## Checkpoint deploy_120100
- Type: deploy checkpoint
- Created: 2026-04-05 12:01 BST
- Context: Russ spotted that the shared MiniStatCardHalf changes were only affecting Home, not the showcase.
- Scope: `src/components/mockup/ComponentsShowcase.tsx` no longer contains a duplicate MiniStatCardHalf definition, so it now uses the shared component too.

## Checkpoint deploy_120300
- Type: deploy checkpoint
- Created: 2026-04-05 12:03 BST
- Context: Russ continued testing shared cascade behavior with a ProfitLossCard style change.
- Scope: `src/components/mockup/sharedHomeComponents.tsx` now gives ProfitLossCard the light-g gradient and reduced top inner padding on both showcase and Home.

## Checkpoint deploy_120700
- Type: deploy checkpoint
- Created: 2026-04-05 12:07 BST
- Context: Russ wanted the showcase shell itself brought into line while structural cleanup was in progress.
- Scope: `src/components/mockup/ComponentsShowcase.tsx` now uses the updated live-style header treatment, logo/settings presentation, and matching page background.

## Checkpoint deploy_121200
- Type: deploy checkpoint
- Created: 2026-04-05 12:12 BST
- Context: Russ switched back to Home page assembly and wanted the page title hidden temporarily.
- Scope: `src/components/mockup/AppShellPage.tsx` Home view no longer renders the title block for now.

## Checkpoint deploy_121600
- Type: deploy checkpoint
- Created: 2026-04-05 12:16 BST
- Context: Russ requested a weekly version of RollingLayRateCard while shared components were in place.
- Scope: `src/components/mockup/sharedHomeComponents.tsx` RollingLayRateCard now shows 7 bars, weekday labels, a new title, and a highlighted final bar across showcase and Home.

## Checkpoint deploy_122000
- Type: deploy checkpoint
- Created: 2026-04-05 12:20 BST
- Context: Russ refined that weekly chart immediately after seeing it.
- Scope: `src/components/mockup/sharedHomeComponents.tsx` RollingLayRateCard now places the egg count inside each bar, enlarges the weekday label, and adds ellipsis plus extra title/chart spacing.

## Checkpoint deploy_123000
- Type: deploy checkpoint
- Created: 2026-04-05 12:30 BST
- Context: Russ moved on to HenCard polish after pushing the branch.
- Scope: `src/components/mockup/sharedHomeComponents.tsx` now gives HenCard more gap below the coop name, a smaller medal/trophy icon, and percentage text sized to match the egg-count row.

## Checkpoint deploy_130700
- Type: deploy checkpoint
- Created: 2026-04-05 13:07 BST
- Context: Russ manually edited `AppShellPage.tsx` and asked for a deploy.
- Scope: latest local `src/components/mockup/AppShellPage.tsx` state deployed as-is.

## Checkpoint deploy_131600
- Type: deploy checkpoint
- Created: 2026-04-05 13:16 BST
- Context: Russ requested another immediate redeploy after more manual changes.
- Scope: latest current Eggcountant working tree deployed as-is.

## Checkpoint deploy_131700
- Type: deploy checkpoint
- Created: 2026-04-05 13:17 BST
- Context: Russ made further manual changes immediately after the prior redeploy.
- Scope: latest current Eggcountant working tree deployed as-is.

## Checkpoint deploy_132800
- Type: deploy checkpoint
- Created: 2026-04-05 13:28 BST
- Context: Russ wanted to test a gradient overlay layered on top of an SVG pattern in the FillEffects showcase.
- Scope: `src/components/mockup/ComponentsShowcase.tsx` now includes a new FillEffects demo card beneath `svg-g` using the supplied SVG plus a reduced-opacity dark-g style overlay.

## Checkpoint deploy_134500
- Type: deploy checkpoint
- Created: 2026-04-05 13:45 BST
- Context: Russ refined that new FillEffects demo card.
- Scope: `src/components/mockup/ComponentsShowcase.tsx` now uses a softer overlay on the SVG demo card and includes `henlife-logo-800` on the left plus `ico-settings-top` on the right.

## Checkpoint deploy_135200
- Type: deploy checkpoint
- Created: 2026-04-05 13:52 BST
- Context: Russ asked for a straight redeploy of the showcase/app state.
- Scope: latest current Eggcountant working tree deployed as-is.

## Checkpoint deploy_135800
- Type: deploy checkpoint
- Created: 2026-04-05 13:58 BST
- Context: Russ wanted another FillEffects background demo while also making manual AppShell changes.
- Scope: `src/components/mockup/ComponentsShowcase.tsx` now includes a new FillEffects card using `ico-egg-divider.png`, and the latest local AppShell state was deployed alongside it.

## Checkpoint deploy_140400
- Type: deploy checkpoint
- Created: 2026-04-05 14:04 BST
- Context: Russ asked for another straight redeploy.
- Scope: latest current Eggcountant working tree deployed as-is.

## Checkpoint deploy_144900
- Type: deploy checkpoint
- Created: 2026-04-05 14:49 BST
- Context: Russ asked for another straight redeploy later in the afternoon.
- Scope: latest current Eggcountant working tree deployed as-is.

## Checkpoint deploy_173700
- Type: deploy checkpoint
- Created: 2026-04-05 17:37 BST
- Context: Russ asked for another redeploy later the same day.
- Scope: latest current Eggcountant working tree deployed as-is.

## Checkpoint deploy_174400
- Type: deploy checkpoint
- Created: 2026-04-05 17:44 BST
- Context: Russ requested another straight redeploy after asking styling questions.
- Scope: latest current Eggcountant working tree deployed as-is.

## Checkpoint deploy_174700
- Type: deploy checkpoint
- Created: 2026-04-05 17:47 BST
- Context: Russ believed the latest round of manual edits was ready.
- Scope: latest current Eggcountant working tree deployed as-is.

## Checkpoint deploy_175500
- Type: deploy checkpoint
- Created: 2026-04-05 17:55 BST
- Context: Russ requested yet another redeploy after further changes.
- Scope: latest current Eggcountant working tree deployed as-is.

## Checkpoint deploy_180600
- Type: deploy checkpoint
- Created: 2026-04-05 18:06 BST
- Context: Russ tested the new shorthand workflow after manually editing showcase and AppShell.
- Scope: shorthand `d` triggered a deploy of the latest current Eggcountant working tree.

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

