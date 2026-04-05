# egg2 deploy log

Use one entry per deploy checkpoint.

Format:
- Checkpoint: `deploy_HHMMSS`
- Request time: `YYYY-MM-DD HH:MM:SS TZ`
- User instruction: `<original edit/deploy request>`
- Notes: `<what changed / what was deployed / rollback hints>`

## deploy_135200
- Request time: 2026-04-05 13:52:00 BST
- User instruction: redeploy the showcase page
- Notes: Re-deployed the current showcase/app state as requested.

- Result: deployed successfully


## deploy_134500
- Request time: 2026-04-05 13:45:00 BST
- User instruction: 1. reduce the purple by 50%
2. add the henlife-logo-800 inside the card, to the left
3. add the ico-settings-top icon to the right
- Notes: Updated the new FillEffects SVG+gradient demo card to halve the purple overlay strength and place `henlife-logo-800` on the left with `ico-settings-top` on the right.

- Result: deployed successfully


## deploy_132800
- Request time: 2026-04-05 13:28:00 BST
- User instruction: here is the svg ... for this demo create a new card in filleffects on the showcase page, under svg-g
- Notes: Added a new FillEffects demo card beneath `svg-g` in `ComponentsShowcase.tsx` that layers the provided SVG pattern with a reduced-opacity dark-g style gradient overlay.

- Result: deployed successfully


## deploy_131700
- Request time: 2026-04-05 13:17:00 BST
- User instruction: i made more changes, deploy
- Notes: Re-deployed the latest current Eggcountant state after additional manual edits.

- Result: deployed successfully


## deploy_131600
- Request time: 2026-04-05 13:16:00 BST
- User instruction: again
- Notes: Re-deployed the latest current Eggcountant state as requested after further manual edits.

- Result: deployed successfully


## deploy_130700
- Request time: 2026-04-05 13:07:00 BST
- User instruction: appshell edited, deploy
- Notes: Deployed the latest user-edited `AppShellPage.tsx` state as requested.

- Result: deployed successfully


## deploy_123000
- Request time: 2026-04-05 12:30:00 BST
- User instruction: on the HenCard section

1. increase gap underneath coop name
2. the trophy is a little too big for the text, reduce it by 15%
3. make the % text the same size as the x XX text
- Notes: Updated the shared `HenCard` spacing and metadata row so the gap below the coop name is larger, the trophy icon is reduced by about 15%, and the percentage text matches the egg-count text size.

- Result: deployed successfully


## deploy_122000
- Request time: 2026-04-05 12:20:00 BST
- User instruction: great:

1. can the egg value text be inside the bar, at the top, bigger and bolder
2. after the egg value is moved, make the day letter the same size
3. add ... after the title and increase the gap between title and chart slightly
- Notes: Updated the shared `RollingLayRateCard` so the egg count sits inside each bar at the top, the weekday label matches that stronger sizing, and the title now includes ellipsis with extra spacing above the chart.

- Result: deployed successfully


## deploy_121600
- Request time: 2026-04-05 12:16:00 BST
- User instruction: ok, showcase pageRollingLayRateCard

1. change the title to say 'This Week in Eggs' 
2. show a graph of 7 values rather than 14
3. under the bar value, add the day of the week in format M, T, W... etc
4. reduce the opacity of the first 6 bars, so the 7th (today bar) stands out a little
- Notes: Updated the shared `RollingLayRateCard` to a 7-day weekly chart with the new title, weekday labels, and reduced opacity on the first six bars so the final bar stands out.

- Result: deployed successfully


## deploy_121200
- Request time: 2026-04-05 12:12:00 BST
- User instruction: ok, back on the home page, hide the page title for now
- Notes: Hid the Home page title block in `AppShellPage.tsx` while leaving the rest of the page structure intact.

- Result: deployed successfully


## deploy_120700
- Request time: 2026-04-05 12:07:00 BST
- User instruction: while were sorting structure, can you apply the proper header and footer sections to the showcase file
- Notes: Updated the `ComponentsShowcase.tsx` header/footer shell styling to match the live app structure, including the newer header treatment, logo, settings icon treatment, and page background.

- Result: deployed successfully


## deploy_120300
- Request time: 2026-04-05 12:03:00 BST
- User instruction: ok lets try another one, reduce the top padding on the ProfitLossCard by half and apply the light-g grad here too
- Notes: Updated the shared `ProfitLossCard` to use the light-g gradient and reduced its top inner padding by roughly half, so the change cascades to both showcase and Home.

- Result: deployed successfully


## deploy_120100
- Request time: 2026-04-05 12:01:00 BST
- User instruction: ok, weirdly, both of these last two changes have affected the home page (right on screenshot) where the components are shown, but not on the actual showcase page (left on screenshot)
- Notes: Fixed `ComponentsShowcase.tsx` still shadowing the shared `MiniStatCardHalf` import with its own local duplicate definition, so shared changes now cascade there too.

- Result: deployed successfully


## deploy_115800
- Request time: 2026-04-05 11:58:00 BST
- User instruction: change the grad on that same cards to the light-g
- Notes: Updated the shared `MiniStatCardHalf` component to use the light-g gradient background, so the change cascades to both the showcase and Home page.

- Result: deployed successfully


## deploy_115600
- Request time: 2026-04-05 11:56:00 BST
- User instruction: increase the font size by aroun d 20% on the MiniStatCardHalf cards
- Notes: Increased the shared `MiniStatCardHalf` title and value font sizes in `sharedHomeComponents.tsx`, so the change cascades to both the showcase and Home page.

- Result: deployed successfully


## deploy_114400
- Request time: 2026-04-05 11:44:00 BST
- User instruction: ok, i fucked that up, can you make the svg-g background this please
- Notes: Updated the `svg-g` FillEffects card in `ComponentsShowcase.tsx` to use the corrected 56x28 SVG tiled background provided by Russ.

- Result: deployed successfully


## deploy_114100
- Request time: 2026-04-05 11:41:00 BST
- User instruction: i altered the showcase file, deploy
- Notes: Deployed the latest user-edited `ComponentsShowcase.tsx` state without additional agent-side content changes. During deploy, fixed one unterminated SVG background string in the FillEffects card so the file could build successfully.

- Result: deployed successfully


## deploy_113300
- Request time: 2026-04-05 11:33:00 BST
- User instruction: add a new card in the filleffects section, and give it this svg background
- Notes: Added a new `FillEffects` sample card in `ComponentsShowcase.tsx` using the supplied SVG data-URL background on a `#f4f2fa` base.

- Result: deployed successfully


## deploy_112600
- Request time: 2026-04-05 11:26:00 BST
- User instruction: above the wiki section, but below the hr you just placed, add some placeholder centred text in H3 purple saying 'wiki text here'
- Notes: Added centered purple H3 placeholder text reading `wiki text here` between the divider and the wiki card block on Home.

- Result: deployed successfully


## deploy_112300
- Request time: 2026-04-05 11:23:00 BST
- User instruction: add a hr then place the WikiElements section, 1 pun card, 3 article cards, 1 show more button
- Notes: Added a divider below the `RollingLayRateCard`, then built the requested wiki block on Home with 1 pun card, 3 article cards, and a show-more button.

- Result: deployed successfully


## deploy_112000
- Request time: 2026-04-05 11:20:00 BST
- User instruction: add a hr and then place the RollingLayRateCard
- Notes: Added a horizontal divider below the HenCard section, then moved the showcase `RollingLayRateCard` onto the Home page.

- Result: deployed successfully


## deploy_111600
- Request time: 2026-04-05 11:16:00 BST
- User instruction: add a hr, then place the HenCard section (3 hencards and the eggvolution icon)
- Notes: Added a horizontal divider beneath the mini stat cards, then moved the showcase HenCard section with Willow, Dotty, Mabel, and the Egg-volution icon onto the Home page.

- Result: deployed successfully


## deploy_111400
- Request time: 2026-04-05 11:14:00 BST
- User instruction: actually, put it back at the top, but change the size to H2
- Notes: Moved the Home page title back above the `ProfitLossCard` and reduced it to a smaller H2-style size.

- Result: deployed successfully


## deploy_111200
- Request time: 2026-04-05 11:12:00 BST
- User instruction: move the page title underneath the ProfitLossCard
- Notes: Reordered the Home page so the `This week, in a nutshell...` title now sits below the `ProfitLossCard`.

- Result: deployed successfully


## deploy_111000
- Request time: 2026-04-05 11:10:00 BST
- User instruction: ok, slight issue - the cards are deployed but the icons have vanished, from both the showcase and home pages
- Notes: Fixed the deploy script so it also applies readable permissions inside `/media/icons`, which was causing card icons to disappear after FTP deploys.

- Result: deployed successfully


## deploy_110703
- Request time: 2026-04-05 11:07:03 BST
- User instruction: great, now the two cards in MiniStatCardHalf
- Notes: Moved both `MiniStatCardHalf` cards from `ComponentsShowcase` onto the main Home page beneath the `ProfitLossCard`.

- Result: deployed successfully


## deploy_110521
- Request time: 2026-04-05 11:05:21 BST
- User instruction: great, now the ProfitLossCard please
- Notes: Moved the `ProfitLossCard` from `ComponentsShowcase` onto the main Home page directly beneath the `This week, in a nutshell...` title.

- Result: deployed successfully


## deploy_110426
- Request time: 2026-04-05 11:04:26 BST
- User instruction: deploy
- Notes: Deployed the Home page title migration so the main Home page now uses the exact `This week, in a nutshell...` title styling from `ComponentsShowcase`.

- Result: deployed successfully


## deploy_105354
- Request time: 2026-04-05 10:53:54 BST
- User instruction: deploy
- Notes: Deploy requested immediately after replacing the header logo image reference with `henlife-logo-800.png` in `src/components/mockup/AppShellPage.tsx`.

- Result: deployed successfully


## deploy_210100
- Request time: 2026-03-30 21:01:00 BST
- User instruction: 1. the sales and expense font that is currently at 1.47rem, i need it to be about 15% larger
- Notes: deploy started

- Result: deployed successfully

## deploy_211800
- Request time: 2026-03-30 21:18:00 BST
- User instruction: change the Sales label (the text label not the monetary value) to the sale purple as the font in the weeklysummarycards
- Notes: deploy started

- Result: deployed successfully

## deploy_213700
- Request time: 2026-03-30 21:37:00 BST
- User instruction: lets go with all caps on it, increase font size by 50%, remove margins from it
- Notes: deploy started

- Result: deployed successfully

## deploy_213800
- Request time: 2026-03-30 21:38:00 BST
- User instruction: that was more than 50% lol, reduce by half of what you increased it by
- Notes: deploy started

- Result: deployed successfully

## deploy_213900
- Request time: 2026-03-30 21:39:00 BST
- User instruction: reduce the padding of this to py-3
- Notes: deploy started

- Result: deployed successfully

## deploy_214200
- Request time: 2026-03-30 21:42:00 BST
- User instruction: i want the text in the ProfitLossCard to be left aligned with the text in the WeeklySummaryCard, make their respective padding and margins the same
- Notes: deploy started

- Result: deployed successfully

## deploy_214500
- Request time: 2026-03-30 21:45:00 BST
- User instruction: 1. reduce the gap between SALES and the sales value by half 2. style the Expenses text the same as the Sales text 3. style Cluck Statement text the same as the Sales text 4. reduce the size of the Cluck Statement value (currently +£6.45) by half
- Notes: deploy started

- Result: deployed successfully

## deploy_214700
- Request time: 2026-03-30 21:47:00 BST
- User instruction: 1. reduce the size of cluck statement text by 25% 2. reduce sales text by 20% 3. reduce expenses text by 20%
- Notes: deploy started

- Result: deployed successfully

## deploy_220500
- Request time: 2026-03-30 22:05:00 BST
- User instruction: place the sales and expense texts below their value, reduce their size by 10%, and change their colour to #9E9E9E, then change the colour of their values (+13.25 and -£6.80 to the standard purple)
- Notes: deploy started

- Result: deployed successfully

## deploy_220700
- Request time: 2026-03-30 22:07:00 BST
- User instruction: 1. reduce the vertical gap between sales / expense and their values by 50% 2. reduce cluck statement text by 15% and make it be green if positive, red if negative
- Notes: deploy started

- Result: deployed successfully

## deploy_220900
- Request time: 2026-03-30 22:09:00 BST
- User instruction: 1. reduce the vertical margin between the sales / expense text and the cluck statement card by half 2. if the cluckstatement value is positive, add a green, 1px solid border to the cluck statement card, red if negative
- Notes: deploy started

- Result: deployed successfully

## deploy_221000
- Request time: 2026-03-30 22:10:00 BST
- User instruction: revert
- Notes: deploy started

- Result: deployed successfully

## deploy_221900
- Request time: 2026-03-30 22:19:00 BST
- User instruction: use the menu-icon.png file for now
- Notes: deploy started

- Result: deployed successfully

## deploy_222100
- Request time: 2026-03-30 22:21:00 BST
- User instruction: use sales-green.png to see if that works
- Notes: deploy started

- Result: deployed successfully

## deploy_222500
- Request time: 2026-03-30 22:25:00 BST
- User instruction: add a copy of the ministatcard section directly below the existing one, call it ministatcardhalf
- Notes: deploy started

- Result: deployed successfully

## deploy_222900
- Request time: 2026-03-30 22:29:00 BST
- User instruction: only one of them needs a ministatcard section title, its confusing to duplicate titles
- Notes: deploy started

- Result: deployed successfully

## deploy_223100
- Request time: 2026-03-30 22:31:00 BST
- User instruction: same with the metriccard and hencard
- Notes: deploy started

- Result: deployed successfully

## deploy_223100
- Request time: 2026-03-30 22:31:00 BST
- User instruction: in the ministatcardhalf section, those two cards need to be side by side, not on top of each other
- Notes: deploy started

- Result: deployed successfully

## deploy_223300
- Request time: 2026-03-30 22:33:00 BST
- User instruction: i think this has happened because you have put the section title text inside the ministatcard section, rather than spanning 100% above it
- Notes: deploy started

- Result: deployed successfully

## deploy_224300
- Request time: 2026-03-30 22:43:00 BST
- User instruction: in those half containers, id like the following - justified left and right accordingly: 1. card title, same size and style as the SALES and EXPENSES text (just put TITLE for now) 2. icon, 40% the size of the container (use 1-fried.png on the left card, and 1-hatching.png on the right card) these should be to the left in the left container, and right in the right container 3. value text (use 12 for the left, and 6 for the right) bold text, 1.6rem, aligned on the same row as the icon, but to the opposite side of the container
- Notes: deploy started

- Result: deployed successfully

## deploy_225100
- Request time: 2026-03-30 22:51:00 BST
- User instruction: 1. icons need to half equal height so the cards have equal height 2. value text needs to be twice as large with increased padding (extra margin right for the left icon, extra margin left for the right icon)
- Notes: deploy started

- Result: deployed successfully

## deploy_225300
- Request time: 2026-03-30 22:53:00 BST
- User instruction: reduce the value font size by 15%
- Notes: deploy started

- Result: deployed successfully

## deploy_225400
- Request time: 2026-03-30 22:54:00 BST
- User instruction: reduce the icon size by 15%
- Notes: deploy started

- Result: deployed successfully

## deploy_225700
- Request time: 2026-03-30 22:57:00 BST
- User instruction: 1. reduce the gap between card title and icon by half 2. the left card title should read Yokes Broke, and the right should say Oven Buns 3. text should be the purple
- Notes: deploy started

- Result: deployed successfully

## deploy_225900
- Request time: 2026-03-30 22:59:00 BST
- User instruction: move the ministatcardhalf section up so its beneath the profitlosscard section
- Notes: deploy started

- Result: deployed successfully

## deploy_230000
- Request time: 2026-03-30 23:00:00 BST
- User instruction: swap sides with the icon and the value text, so the left card has the value on the left and icon on the right etc.
- Notes: deploy started

- Result: deployed successfully

## deploy_230200
- Request time: 2026-03-30 23:02:00 BST
- User instruction: change oven buns to buns cooked
- Notes: deploy started

- Result: deployed successfully

## deploy_230400
- Request time: 2026-03-30 23:04:00 BST
- User instruction: move the hencard section beneath the ministatcardhalf section
- Notes: deploy started

- Result: deployed successfully

## deploy_231100
- Request time: 2026-03-30 23:11:00 BST
- User instruction: hencard edit: 1. hen name - m-0 1.4rem bold #6f4bb8 2. replace medal emoji with media/gold.png, silver, bronze 3. reduce vertical gap between hen name and value as much as possible 4. add horizontal progress bar light purple on grey bg with values 66/51/46 5. change bottom text to XX% Egg Bossing with random up/down emoji
- Notes: deploy started

- Result: deployed successfully

## deploy_231300
- Request time: 2026-03-30 23:13:00 BST
- User instruction: remove the up down emojis, increase the egg bossing text size by 50%, same purple as the progress bar
- Notes: deploy started

- Result: deployed successfully

## deploy_231800
- Request time: 2026-03-30 23:18:00 BST
- User instruction: 1. remove eggs from the value and add an icon called 1-egg.png, about 70% height of value text 2. increase hen name font by 50% 3. change hen name colour to match trophy FFCC01/999999/CC6602 4. add coop name after hen name at 50% smaller, uppercase, same grey as Sales/Expenses
- Notes: deploy started

- Result: deployed successfully

## deploy_232200
- Request time: 2026-03-30 23:22:00 BST
- User instruction: 1. the padding needs to be the same as the padding on the ministatcardhalf cards 2. add the standard bg gradient 3. reduce the gap between hen name and coop name 4. increase size of coop name by double 5. float the coop name to the right of the egg bossing text 6. increase the egg value font size by 30%
- Notes: deploy started

- Result: deployed successfully

## deploy_232600
- Request time: 2026-03-30 23:26:00 BST
- User instruction: 1. font color = d9c9fb 2. reduce coop name size by 20% 3. reduce egg value size by 15% 4. increase size of trophy by 50%
- Notes: deploy started

- Result: deployed successfully

## deploy_233000
- Request time: 2026-03-30 23:30:00 BST
- User instruction: 1. egg value text font color = 704BB8 2. egg icon size reduce by 25% 3. coop name font to match style of sales / expenses (uppercase, grey etc) 4. add a hr beneath hen name and trophy to separate from the rest of the card visually
- Notes: deploy started

- Result: deployed successfully

## deploy_233200
- Request time: 2026-03-30 23:32:00 BST
- User instruction: move the rollinglayratecard section beneath the hencard section, and make it 14 days, not 7
- Notes: deploy started

- Result: deployed successfully

## deploy_233500
- Request time: 2026-03-30 23:35:00 BST
- User instruction: the section is still where it was, move it directly underneath the henname section
- Notes: deploy started

- Result: deployed successfully

## deploy_234300
- Request time: 2026-03-30 23:43:00 BST
- User instruction: rollinglayratecard edits: 1. day labels to chart values random 6-11 over 14 days 2. reduce gap between chart and text 3. remove Last 14 days text 4. padding same as above containers 5. remove calendar icon 6. change title to Rollin' 14 Days Lays 7. card title style m-0 text-[1rem] uppercase text-[#6f4bb8]
- Notes: deploy started

- Result: deployed successfully

## deploy_234500
- Request time: 2026-03-30 23:45:00 BST
- User instruction: increase the title font size by 20% and double the font weight
- Notes: deploy started

- Result: deployed successfully

## deploy_234900
- Request time: 2026-03-30 23:49:00 BST
- User instruction: add a new section under rollinglayrate called calendarcard
- Notes: deploy started

- Result: deployed successfully

## deploy_235300
- Request time: 2026-03-30 23:53:00 BST
- User instruction: make the title the same style as the rollinglayratecard
- Notes: deploy started

- Result: deployed successfully

## deploy_235500
- Request time: 2026-03-30 23:55:00 BST
- User instruction: put a calendar in the calendarcard, something like this but more visible
- Notes: deploy started

- Result: deployed successfully

## deploy_000400
- Request time: 2026-03-31 00:04:00 BST
- User instruction: calendarcard updates: add filter buttons for eggs/chicks/sales/expenses; increase date box size and align date to top; make entry value more prominent than date; entry border #876BC2 and empty border #ece3ff; change title to month name; add < and > either side of the month name
- Notes: deploy started

- Result: deployed successfully

## deploy_000700
- Request time: 2026-03-31 00:07:00 BST
- User instruction: add a second set of filters for 1 week, 2 weeks, 1 month, at the bottom
- Notes: deploy started

- Result: deployed successfully

## deploy_002000
- Request time: 2026-03-31 00:20:00 BST
- User instruction: update the calendar date boxes to the cleaner mockup style
- Notes: deploy started

- Result: deployed successfully

## deploy_003000
- Request time: 2026-03-31 00:30:00 BST
- User instruction: 1. reduce the radius on the date boxes by 50% 2. reduce the height of the date boxes by 30% 3. increase the font size of the date by 60% 4. change the font colour of the date to the same grey as Sales / Expenses 5. increase the border thickness of dates with values to 2px 6. reduce the height of the eggs/chicks etc filters by 30% 7. increase the month title by 30%
- Notes: deploy started

- Result: deployed successfully

## deploy_003500
- Request time: 2026-03-31 00:35:00 BST
- User instruction: 1. reduce the date font size by 15%, it needs to be smaller than the value font 2. style the bottom filters exactly like the top filters 3. size the top filters so the text fits and width is auto, but all four filters spread out in the available space
- Notes: deploy started

- Result: deployed successfully

## deploy_003800
- Request time: 2026-03-31 00:38:00 BST
- User instruction: move locationprogresscard so its directly underneath the calendar section
- Notes: deploy started

- Result: deployed successfully

## deploy_004400
- Request time: 2026-03-31 00:44:00 BST
- User instruction: edit LocationProgressCard: remove geo icon; style coop title like rolling 14 days lays; add 3 progress bars total; title and subtitle for top bar, subtitles for other two; show 78/67/59 as the values
- Notes: deploy started

- Result: deployed successfully

## deploy_004700
- Request time: 2026-03-31 00:47:00 BST
- User instruction: 1. change the title to It's not a competition...but... 2. remove the main subtitle 3. title of prog bars should be coop names - Eggstein Island, Pecking Palace, Cluck the Fuck Up
- Notes: deploy started

- Result: deployed successfully

## deploy_005800
- Request time: 2026-03-31 00:58:00 BST
- User instruction: add a fixed bottom nav with Home, Cal, Flock, Sale and a big egg speed-dial add button in the middle that greys out the page and pops actions up
- Notes: deploy started

- Result: deployed successfully

## deploy_010200
- Request time: 2026-03-31 01:02:00 BST
- User instruction: the menu only appears when the big egg is clicked - use the big-egg-button.png file for this - it needs to be in the centre of the bottom nav
- Notes: deploy started

- Result: deployed successfully

## deploy_010800
- Request time: 2026-03-31 01:08:00 BST
- User instruction: 1. remove weird outline from egg 2. increase its size by 25% 3. position at bottom with ~10px margin 4. make speed dial work 5. bottom nav white should have zero rounded corners or drop shadow like header 6. make the 4 icons about 20% bigger
- Notes: deploy started

- Result: deployed successfully

## deploy_011100
- Request time: 2026-03-31 01:11:00 BST
- User instruction: 1. increase the bg blur effect by 50% 2. bottom nav needs to be its own full-width container 3. increase bottom margin by 5px 4. move CAL and FLOCK nav items up by 15px
- Notes: deploy started

## deploy_011200
- Request time: 2026-03-31 01:12:00 BST
- User instruction: try again
- Notes: deploy started

## deploy_011200
- Request time: 2026-03-31 01:12:00 BST
- User instruction: try again
- Notes: deploy started

## deploy_072855
- Request time: 2026-03-31 07:28:55 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_073100
- Request time: 2026-03-31 07:31:00 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_073342
- Request time: 2026-03-31 07:33:42 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_073455
- Request time: 2026-03-31 07:34:55 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_073643
- Request time: 2026-03-31 07:36:43 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_073800
- Request time: 2026-03-31 07:38:00 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_073855
- Request time: 2026-03-31 07:38:55 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_074028
- Request time: 2026-03-31 07:40:28 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_074135
- Request time: 2026-03-31 07:41:35 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_074452
- Request time: 2026-03-31 07:44:52 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_074607
- Request time: 2026-03-31 07:46:07 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_074740
- Request time: 2026-03-31 07:47:40 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_074848
- Request time: 2026-03-31 07:48:48 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_075416
- Request time: 2026-03-31 07:54:16 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_075638
- Request time: 2026-03-31 07:56:38 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_075749
- Request time: 2026-03-31 07:57:49 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_075954
- Request time: 2026-03-31 07:59:54 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_080848
- Request time: 2026-03-31 08:08:48 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_081105
- Request time: 2026-03-31 08:11:05 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_081404
- Request time: 2026-03-31 08:14:04 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_081550
- Request time: 2026-03-31 08:15:50 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_081741
- Request time: 2026-03-31 08:17:41 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_081948
- Request time: 2026-03-31 08:19:48 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_082527
- Request time: 2026-03-31 08:25:27 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_082721
- Request time: 2026-03-31 08:27:21 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_083143
- Request time: 2026-03-31 08:31:43 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_083713
- Request time: 2026-03-31 08:37:13 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_083805
- Request time: 2026-03-31 08:38:05 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_084233
- Request time: 2026-03-31 08:42:33 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_084429
- Request time: 2026-03-31 08:44:29 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_085255
- Request time: 2026-03-31 08:52:55 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_085756
- Request time: 2026-03-31 08:57:56 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_085837
- Request time: 2026-03-31 08:58:37 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_090051
- Request time: 2026-03-31 09:00:51 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_090337
- Request time: 2026-03-31 09:03:37 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_090608
- Request time: 2026-03-31 09:06:08 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_091044
- Request time: 2026-03-31 09:10:44 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_091617
- Request time: 2026-03-31 09:16:17 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_091832
- Request time: 2026-03-31 09:18:32 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_092050
- Request time: 2026-03-31 09:20:50 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_092157
- Request time: 2026-03-31 09:21:57 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_092316
- Request time: 2026-03-31 09:23:16 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_092459
- Request time: 2026-03-31 09:24:59 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_092543
- Request time: 2026-03-31 09:25:43 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_092624
- Request time: 2026-03-31 09:26:24 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_092841
- Request time: 2026-03-31 09:28:41 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_093114
- Request time: 2026-03-31 09:31:14 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_093321
- Request time: 2026-03-31 09:33:21 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_093537
- Request time: 2026-03-31 09:35:37 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_093851
- Request time: 2026-03-31 09:38:51 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_094132
- Request time: 2026-03-31 09:41:32 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_094324
- Request time: 2026-03-31 09:43:24 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_094859
- Request time: 2026-03-31 09:48:59 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_100834
- Request time: 2026-03-31 10:08:34 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_101320
- Request time: 2026-03-31 10:13:20 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_101755
- Request time: 2026-03-31 10:17:55 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_101956
- Request time: 2026-03-31 10:19:56 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_102252
- Request time: 2026-03-31 10:22:52 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_102406
- Request time: 2026-03-31 10:24:06 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_102750
- Request time: 2026-03-31 10:27:50 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_102929
- Request time: 2026-03-31 10:29:29 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_103118
- Request time: 2026-03-31 10:31:18 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_103426
- Request time: 2026-03-31 10:34:26 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_103550
- Request time: 2026-03-31 10:35:50 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_103819
- Request time: 2026-03-31 10:38:19 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_104039
- Request time: 2026-03-31 10:40:39 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_104200
- Request time: 2026-03-31 10:42:00 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_104459
- Request time: 2026-03-31 10:44:59 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_104712
- Request time: 2026-03-31 10:47:12 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_104829
- Request time: 2026-03-31 10:48:29 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_104936
- Request time: 2026-03-31 10:49:36 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_105555
- Request time: 2026-03-31 10:55:55 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_105726
- Request time: 2026-03-31 10:57:26 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_105811
- Request time: 2026-03-31 10:58:11 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_105911
- Request time: 2026-03-31 10:59:11 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_110005
- Request time: 2026-03-31 11:00:05 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_110121
- Request time: 2026-03-31 11:01:21 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_110226
- Request time: 2026-03-31 11:02:26 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_110451
- Request time: 2026-03-31 11:04:51 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_111505
- Request time: 2026-03-31 11:15:05 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_111848
- Request time: 2026-03-31 11:18:48 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_213839
- Request time: 2026-03-31 21:38:39 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_214429
- Request time: 2026-03-31 21:44:29 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_214836
- Request time: 2026-03-31 21:48:36 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_215034
- Request time: 2026-03-31 21:50:34 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_215210
- Request time: 2026-03-31 21:52:10 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_220856
- Request time: 2026-03-31 22:08:56 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_222323
- Request time: 2026-03-31 22:23:23 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_224708
- Request time: 2026-03-31 22:47:08 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_225631
- Request time: 2026-03-31 22:56:31 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_225942
- Request time: 2026-03-31 22:59:42 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_230143
- Request time: 2026-03-31 23:01:43 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_231351
- Request time: 2026-03-31 23:13:51 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_232149
- Request time: 2026-03-31 23:21:49 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_232650
- Request time: 2026-03-31 23:26:50 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_233225
- Request time: 2026-03-31 23:32:25 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_233302
- Request time: 2026-03-31 23:33:02 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_233341
- Request time: 2026-03-31 23:33:41 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_233415
- Request time: 2026-03-31 23:34:15 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_233620
- Request time: 2026-03-31 23:36:20 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_233952
- Request time: 2026-03-31 23:39:52 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_000008
- Request time: 2026-04-01 00:00:08 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_001735
- Request time: 2026-04-01 00:17:35 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_002131
- Request time: 2026-04-01 00:21:31 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_002439
- Request time: 2026-04-01 00:24:39 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_204333
- Request time: 2026-04-01 20:43:33 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_205350
- Request time: 2026-04-01 20:53:50 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_210529
- Request time: 2026-04-01 21:05:29 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_210640
- Request time: 2026-04-01 21:06:40 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_210701
- Request time: 2026-04-01 21:07:01 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_210818
- Request time: 2026-04-01 21:08:18 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_211013
- Request time: 2026-04-01 21:10:13 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_211119
- Request time: 2026-04-01 21:11:19 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_211205
- Request time: 2026-04-01 21:12:05 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_211327
- Request time: 2026-04-01 21:13:27 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_211732
- Request time: 2026-04-01 21:17:32 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_214050
- Request time: 2026-04-01 21:40:50 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_214219
- Request time: 2026-04-01 21:42:19 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_214434
- Request time: 2026-04-01 21:44:34 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_214614
- Request time: 2026-04-01 21:46:14 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_214907
- Request time: 2026-04-01 21:49:07 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_215210
- Request time: 2026-04-01 21:52:10 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_215515
- Request time: 2026-04-01 21:55:15 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_215859
- Request time: 2026-04-01 21:58:59 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_220058
- Request time: 2026-04-01 22:00:58 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_221528
- Request time: 2026-04-01 22:15:28 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_221750
- Request time: 2026-04-01 22:17:50 BST
- User instruction: put the date picker cal icons back lol
- Notes: deploy started

- Result: deployed successfully

## deploy_222228
- Request time: 2026-04-01 22:22:28 BST
- User instruction: put the behaviour back for click now please
- Notes: deploy started

- Result: deployed successfully

## deploy_222849
- Request time: 2026-04-01 22:28:49 BST
- User instruction: increase med text, widen given to card, and make photo button match the add eggs modal
- Notes: deploy started

- Result: deployed successfully

## deploy_223309
- Request time: 2026-04-01 22:33:09 BST
- User instruction: make the notes card have equal height to its width, so its square
- Notes: deploy started

- Result: deployed successfully

## deploy_223603
- Request time: 2026-04-01 22:36:03 BST
- User instruction: match the default GIVEN TO and Notes card sizing/proportions to the Add Eggs modal, while allowing GIVEN TO to grow if selections expand
- Notes: deploy started

- Result: deployed successfully

## deploy_223749
- Request time: 2026-04-01 22:37:49 BST
- User instruction: revert the last layout change because it made the page laggy again
- Notes: deploy started

- Result: deployed successfully

## deploy_224259
- Request time: 2026-04-01 22:42:59 BST
- User instruction: make the meds modal GIVEN TO and Notes row match the Add Eggs Egg creator and Notes sizing pattern
- Notes: deploy started

- Result: deployed successfully

## deploy_224735
- Request time: 2026-04-01 22:47:35 BST
- User instruction: make the meds Notes button on the right match the left card height, uniform like Add Eggs
- Notes: deploy started

- Result: deployed successfully

## deploy_224952
- Request time: 2026-04-01 22:49:52 BST
- User instruction: change the meds modal select button text to plus, and make the photo card/button match Add Eggs
- Notes: deploy started

- Result: deployed successfully

## deploy_225312
- Request time: 2026-04-01 22:53:12 BST
- User instruction: remove the feed button from the big egg nav, just hide it for now
- Notes: deploy started

- Result: deployed successfully

## deploy_225901
- Request time: 2026-04-01 22:59:01 BST
- User instruction: revert the last deploy and bring the Feed button back in the big egg nav
- Notes: deploy started

- Result: deployed successfully

## deploy_230344
- Request time: 2026-04-01 23:03:44 BST
- User instruction: patch the bottom nav big egg positioning to be more Safari-proof
- Notes: deploy started

- Result: deployed successfully

## deploy_230724
- Request time: 2026-04-01 23:07:24 BST
- User instruction: simplify the bottom nav structure to make Safari rendering more stable
- Notes: deploy started

- Result: deployed successfully

## deploy_232115
- Request time: 2026-04-01 23:21:15 BST
- User instruction: carefully hide Feed from the bottom nav only
- Notes: deploy started

- Result: deployed successfully

## deploy_232325
- Request time: 2026-04-01 23:23:25 BST
- User instruction: disable background interaction and page scroll whenever a modal is active
- Notes: deploy started

- Result: deployed successfully

## deploy_233140
- Request time: 2026-04-01 23:31:40 BST
- User instruction: build the first expense modal based on the agreed spec
- Notes: deploy started

- Result: deployed successfully

## deploy_234711
- Request time: 2026-04-01 23:47:11 BST
- User instruction: refine the expense modal with placeholder input, tag chaining, date label update, 50/50 price-photo row, and full-width save button
- Notes: deploy started

- Result: deployed successfully

## deploy_235139
- Request time: 2026-04-01 23:51:39 BST
- User instruction: remove the extra grey expense input text and make the placeholder normal weight
- Notes: deploy started

- Result: deployed successfully

## deploy_235416
- Request time: 2026-04-01 23:54:16 BST
- User instruction: remove the grey header above the expense item input and reduce the input font weight
- Notes: deploy started

- Result: deployed successfully

## deploy_000054
- Request time: 2026-04-02 00:00:54 BST
- User instruction: refine the expense modal with placeholder hiding, tag chaining feel, label tweaks, narrower cost width, and None added photo text
- Notes: deploy started

- Result: deployed successfully

## deploy_010605
- Request time: 2026-04-02 01:06:05 BST
- User instruction: keep the ampersand expense tag pinned on the left
- Notes: deploy started

- Result: deployed successfully

## deploy_011051
- Request time: 2026-04-02 01:10:51 BST
- User instruction: fix the expense tag logic and add a small plus control for creating regular custom expense tags
- Notes: deploy started

- Result: deployed successfully

## deploy_011400
- Request time: 2026-04-02 01:14:00 BST
- User instruction: change Where is it for? to Where for? in the expense modal
- Notes: deploy started

- Result: deployed successfully

## deploy_011616
- Request time: 2026-04-02 01:16:16 BST
- User instruction: add a line under the expense placeholder/input text
- Notes: deploy started

- Result: deployed successfully

## deploy_011659
- Request time: 2026-04-02 01:16:59 BST
- User instruction: revert the last expense input underline change
- Notes: deploy started

- Result: deployed successfully

## deploy_011832
- Request time: 2026-04-02 01:18:32 BST
- User instruction: add a little blank vertical space under the expense input text
- Notes: deploy started

- Result: deployed successfully

## deploy_012159
- Request time: 2026-04-02 01:21:59 BST
- User instruction: validate the expense cost entry so it only accepts proper money values
- Notes: deploy started

- Result: deployed successfully

## deploy_012921
- Request time: 2026-04-02 01:29:21 BST
- User instruction: replace the cost input with a mini modal keypad that fills digits from the right with fixed two decimals
- Notes: deploy started

- Result: deployed successfully

## deploy_013031
- Request time: 2026-04-02 01:30:31 BST
- User instruction: change Add Expense to Add an Expense
- Notes: deploy started

- Result: deployed successfully

## deploy_013232
- Request time: 2026-04-02 01:32:32 BST
- User instruction: make the expense item text wrap properly
- Notes: deploy started

- Result: deployed successfully

## deploy_101600
- Request time: 2026-04-02 10:16:00 BST
- User instruction: Add a simple expandable architecture component at the top of the components page, then deploy it.
- Notes: deploy started

- Result: deployed successfully

## deploy_102300
- Request time: 2026-04-02 10:23:00 BST
- User instruction: Update top nav/settings so dark-light is hidden, Account opens a top-down account sheet with name, email, password reset, download data, and delete account; deploy on every edit by default.
- Notes: deploy started

- Result: deployed successfully

## deploy_103300
- Request time: 2026-04-02 10:33:00 BST
- User instruction: Refine the account sheet: remove helper text, move Name and Email labels above their containers, grey out uneditable values, move password reset and delete account to a shared bottom row with confirmation popups, and turn Download Data into selectable data toggles plus a confirmation popup.
- Notes: deploy started

- Result: deployed successfully

## deploy_103700
- Request time: 2026-04-02 10:37:00 BST
- User instruction: Add a second delete-account confirmation: ask if they are sure they want to delete all data and their account, warn that it cannot be undone, and if they continue ask for password; otherwise cancel.
- Notes: deploy started

- Result: deployed successfully

## deploy_103800
- Request time: 2026-04-02 10:38:00 BST
- User instruction: Add a small paragraph in the Download Data section saying: Select the items you'd like to download, or leave All Data selected and press the Download button.
- Notes: deploy started

- Result: deployed successfully

## deploy_104200
- Request time: 2026-04-02 10:42:00 BST
- User instruction: Add an hr above the password and delete account buttons, rename them to exactly Reset Password and Delete Account, increase date selection text size by about 25%, and add a short privacy/security paragraph under Download with a blank privacy policy link.
- Notes: deploy started

- Result: deployed successfully

## deploy_104600
- Request time: 2026-04-02 10:46:00 BST
- User instruction: Make the account sheet scrollable because the Reset Password and Delete Account buttons are not visible on smaller screens.
- Notes: deploy started

- Result: deployed successfully

## deploy_105400
- Request time: 2026-04-02 10:54:00 BST
- User instruction: Compress the account modal to fit on one screen: make data selectors 3 per row, remove the little plus signs, and put Name/Email labels and containers on the same rows with EMAIL shortened to EMAIL.
- Notes: deploy started

- Result: deployed successfully

## deploy_110000
- Request time: 2026-04-02 11:00:00 BST
- User instruction: Add an hr above Download Data and round off the top corners of the main account modal.
- Notes: deploy started

- Result: deployed successfully

## deploy_110100
- Request time: 2026-04-02 11:01:00 BST
- User instruction: Add the usual logout confirmation dialogue on the Logout button.
- Notes: deploy started

- Result: deployed successfully

## deploy_110300
- Request time: 2026-04-02 11:03:00 BST
- User instruction: Add a Collapse all button to the architecture map and remove the main title and subtitle from that item.
- Notes: deploy started

- Result: deployed successfully

## deploy_110700
- Request time: 2026-04-02 11:07:00 BST
- User instruction: Add a draft Add / Edit Hen modal under the architecture map using the provided mockup style, with the photo input matching the Add Chicks circular pattern and aiming to fit on one screen.
- Notes: deploy started

- Result: deployed successfully

## deploy_111700
- Request time: 2026-04-02 11:17:00 BST
- User instruction: Delete the temporary Add / Edit Hen draft from the components page so we can rebuild it from scratch together.
- Notes: deploy started

- Result: deployed successfully

## deploy_111800
- Request time: 2026-04-02 11:18:00 BST
- User instruction: Set the architecture map default state to collapsed.
- Notes: deploy started

- Result: deployed successfully

## deploy_111900
- Request time: 2026-04-02 11:19:00 BST
- User instruction: Fix the architecture map so it actually loads collapsed by default.
- Notes: deploy started

- Result: deployed successfully

## deploy_112800
- Request time: 2026-04-02 11:28:00 BST
- User instruction: Add a new Add / Edit Hen modal under the architecture map using the standard modal gradient, Add Chicks-style title, hen-card egg count on the right, name input, breed picker mini-modal, approximate DoB date picker, coop selector, Add Chicks-style photo input, Add Chicks-style notes, and a Let's Cluckin' Go! submit button.
- Notes: deploy started

- Result: deployed successfully

## deploy_113300
- Request time: 2026-04-02 11:33:00 BST
- User instruction: For Add / Edit Hen, use the shared row styling for Coop and Notes like the provided grid example.
- Notes: deploy started

- Result: deployed successfully

## deploy_113700
- Request time: 2026-04-02 11:37:00 BST
- User instruction: Change Add / Edit Hen to Add Hen for now, hide the egg count, rename Appearance / breed to Breed, and reduce the date picker text size by about 15% with the dd/mm/yy style treatment.
- Notes: deploy started

- Result: deployed successfully

## deploy_114300
- Request time: 2026-04-02 11:43:00 BST
- User instruction: Duplicate the Add Hen card into an Edit Hen card, unhide the egg count, prefill the name, keep breed/date/coop/notes, show an existing hen photo, add Update and Sadly Departed buttons, create a departure mini-modal with dead/sold/cancel options, and add a Cancel button to Add Hen too.
- Notes: deploy started

- Result: deployed successfully

## deploy_114700
- Request time: 2026-04-02 11:47:00 BST
- User instruction: Add Edit Coop using Edit Hen as the template, remove breed and DoB, change the dropdown to Location with home/allotment/other, keep notes, use the Add Meds photo style, and use cancel/save buttons.
- Notes: deploy started

- Result: deployed successfully

## deploy_114900
- Request time: 2026-04-02 11:49:00 BST
- User instruction: On Edit Hen, move Hen Has Died below the sold button, rename Hen Was Sold to Hen Sold / Moved, and make the departed modal copy include the hen's actual name, matching the button wording style too.
- Notes: deploy started

- Result: deployed successfully

## deploy_115100
- Request time: 2026-04-02 11:51:00 BST
- User instruction: On Edit Coop, add a coop photo for now, change Photo Ready to Current Photo when one exists, and add the top-right egg count as the total from hens in that coop.
- Notes: deploy started

- Result: deployed successfully

## deploy_115200
- Request time: 2026-04-02 11:52:00 BST
- User instruction: On the Sadly Departed modal, change Hen Sold / Moved to Sold / Moved, and change Hen Has Died to Passed Away.
- Notes: deploy started

- Result: deployed successfully

## deploy_115600
- Request time: 2026-04-02 11:56:00 BST
- User instruction: Duplicate Edit Coop into Add Coop with entered name placeholder Eggstein Island, same location, blank notes so the button says Notes, no current photo, and the same cancel/save buttons.
- Notes: deploy started

- Result: deployed successfully

## deploy_120400
- Request time: 2026-04-02 12:04:00 BST
- User instruction: Add a Record a Sale modal below the architecture map using the hen/coop modal format with sale type selectors, units sold slider, price mode inputs, date plus notes row, sold-to field, optional email receipt with basic validation, and cancel/save buttons.
- Notes: deploy started

- Result: deployed successfully

## deploy_120800
- Request time: 2026-04-02 12:08:00 BST
- User instruction: On the sale modal, make Units Sold a 70/30 slider plus manual number entry layout, and add an automatic £ prefix to the price entry sections.
- Notes: deploy started

- Result: deployed successfully

## deploy_121900
- Request time: 2026-04-02 12:19:00 BST
- User instruction: On the bottom nav central component, leave the structural spacing in place for the background and central add button, but remove the four nav icons and any reference to them.
- Notes: deploy started

- Result: deployed successfully

## deploy_122200
- Request time: 2026-04-02 12:22:00 BST
- User instruction: Use the new test nav icons in the bottom nav in this order: home, calendar, [center add button], flock, sales, and start them at around 20 percent of the screen width.
- Notes: deploy started

- Result: deployed successfully

## deploy_122600
- Request time: 2026-04-02 12:26:00 BST
- User instruction: Redeploy after Russ tweaked the nav icon colours in media.
- Notes: deploy started

- Result: deployed successfully

## deploy_122800
- Request time: 2026-04-02 12:28:00 BST
- User instruction: Update the bottom nav to use the renamed test-* icon files so the new media changes bypass cache, then deploy.
- Notes: deploy started

- Result: deployed successfully

## deploy_123100
- Request time: 2026-04-02 12:31:00 BST
- User instruction: Make the bottom-nav icons scale down better below 425px width for iPhone and smaller Samsung screens.
- Notes: deploy started

- Result: deployed successfully

## deploy_123300
- Request time: 2026-04-02 12:33:00 BST
- User instruction: Set the bottom nav test icons to 18vw for direct sizing comparison.
- Notes: deploy started

- Result: deployed successfully

## deploy_123400
- Request time: 2026-04-02 12:34:00 BST
- User instruction: Reduce the bottom nav test icons from 18vw to 14vw.
- Notes: deploy started

- Result: deployed successfully

## deploy_123700
- Request time: 2026-04-02 12:37:00 BST
- User instruction: Fix the bottom-nav CAB gap so Safari preserves the visible center spacing like Chrome on small screens.
- Notes: deploy started

- Result: deployed successfully

## deploy_124100
- Request time: 2026-04-02 12:41:00 BST
- User instruction: Change the bottom nav test icon size from 14vw to 15vw.
- Notes: deploy started

- Result: deployed successfully

## deploy_124300
- Request time: 2026-04-02 12:43:00 BST
- User instruction: On smaller screens, pull the two right-side bottom-nav icons back toward the CAB so they sit more symmetrically instead of being nudged too far right.
- Notes: deploy started

- Result: deployed successfully

## deploy_141000
- Request time: 2026-04-02 14:10:00 BST
- User instruction: Use the n-* nav icon set whenever the screen width is below 426px, otherwise keep using the normal icon set.
- Notes: deploy started

- Result: deployed successfully

## deploy_141500
- Request time: 2026-04-02 14:15:00 BST
- User instruction: Fix the narrow-screen nav icon paths to match the actual filenames in media/nav-icons.
- Notes: deploy started

- Result: deployed successfully

## deploy_150900
- Request time: 2026-04-02 15:09:00 BST
- User instruction: Add a core purples palette grid under the architecture map and above everything else, with each colour shown as a shape and its hex code displayed in that same colour.
- Notes: deploy started

- Result: deployed successfully

## deploy_151000
- Request time: 2026-04-02 15:10:00 BST
- User instruction: Add a quick typography sample block beneath the core purples palette showing h1, h2, h3, labels, input text, helper copy, and button styles currently in use.
- Notes: deploy started

- Result: deployed successfully

## deploy_151200
- Request time: 2026-04-02 15:12:00 BST
- User instruction: Normalize colours: replace #8b5cf6 and #7c3aed with #6f4bb8, replace #8c79bb with #c4b2f4, and replace #f6f1ff with #c4b2f4 throughout the components mockup file.
- Notes: deploy started

- Result: deployed successfully

## deploy_151300
- Request time: 2026-04-02 15:13:00 BST
- User instruction: Remove duplicated colour samples from the palette block and add the greys currently used for text.
- Notes: deploy started

- Result: deployed successfully

## deploy_151800
- Request time: 2026-04-02 15:18:00 BST
- User instruction: Replace all remaining #c7b2f7 usages with #c4b2f4 and remove #c7b2f7 from the colour block.
- Notes: deploy started

- Result: deployed successfully

## deploy_152000
- Request time: 2026-04-02 15:20:00 BST
- User instruction: Replace all remaining #8f79c6 instances with #c4b2f4.
- Notes: deploy started

- Result: deployed successfully

## deploy_152200
- Request time: 2026-04-02 15:22:00 BST
- User instruction: Remove the spare duplicated #c4b2f4 blocks from the palette sample area and label the remaining colours as purple, mid-purple, lightpurple, grey, and purplegrey.
- Notes: deploy started

- Result: deployed successfully

## deploy_152500
- Request time: 2026-04-02 15:25:00 BST
- User instruction: Change the page background to the lightpurple colour.
- Notes: deploy started

- Result: deployed successfully

## deploy_162500
- Request time: 2026-04-02 16:25:00 BST
- User instruction: Switch the bottom nav to the new lm-* icon set in media/nav-icons everywhere and remove the small-phone conditional icon logic for now.
- Notes: deploy started

- Result: deployed successfully

## deploy_164010
- Request time: 2026-04-02 16:40:10 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_164247
- Request time: 2026-04-02 16:42:47 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_164841
- Request time: 2026-04-02 16:48:41 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_165253
- Request time: 2026-04-02 16:52:53 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_165427
- Request time: 2026-04-02 16:54:27 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_165652
- Request time: 2026-04-02 16:56:52 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_165847
- Request time: 2026-04-02 16:58:47 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_170014
- Request time: 2026-04-02 17:00:14 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_170322
- Request time: 2026-04-02 17:03:22 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_170533
- Request time: 2026-04-02 17:05:33 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_170831
- Request time: 2026-04-02 17:08:31 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_171036
- Request time: 2026-04-02 17:10:36 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_171225
- Request time: 2026-04-02 17:12:24 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_171541
- Request time: 2026-04-02 17:15:41 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_171756
- Request time: 2026-04-02 17:17:56 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_171917
- Request time: 2026-04-02 17:19:17 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_172555
- Request time: 2026-04-02 17:25:55 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_172817
- Request time: 2026-04-02 17:28:17 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_173053
- Request time: 2026-04-02 17:30:53 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_173719
- Request time: 2026-04-02 17:37:19 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_174259
- Request time: 2026-04-02 17:42:59 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_180400
- Request time: 2026-04-02 18:04:00 BST
- User instruction: deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_195400
- Request time: 2026-04-02 19:54:00 BST
- User instruction: up the size of the page titles for the 4 main pages, home, calendar, flock, sales to our h1 style
- Notes: deploy started

## deploy_195400
- Request time: 2026-04-02 19:54:00 BST
- User instruction: up the size of the page titles for the 4 main pages, home, calendar, flock, sales to our h1 style
- Notes: deploy started

- Result: deployed successfully

## deploy_195700
- Request time: 2026-04-02 19:57:00 BST
- User instruction: make the page title style properly dominant so it feels unmistakably H1, not H2-ish
- Notes: deploy started

- Result: deployed successfully

## deploy_200700
- Request time: 2026-04-02 20:07:00 BST
- User instruction: WeeklySummaryCard tweaks: bigger subtext, updated positive/negative copy, make trend icon the background of the corner card, and make X% bigger in grey H3 styling
- Notes: deploy started

- Result: deployed successfully

## deploy_201100
- Request time: 2026-04-02 20:11:00 BST
- User instruction: WeeklySummaryCard: center X%, halve trend card size, increase trend icon opacity to about 75%, and create H3 Sub-text style in TypographySampleBlock for the subtext
- Notes: deploy started

- Result: deployed successfully

## deploy_202300
- Request time: 2026-04-02 20:23:00 BST
- User instruction: WeeklySummaryCard: remove trend icon, double the trend card size, center the X% value in green/red, and double the H3 Sub-text font size
- Notes: deploy started

- Result: deployed successfully

## deploy_202400
- Request time: 2026-04-02 20:24:00 BST
- User instruction: put the standard gradient background we are using into a variable so it can be controlled centrally later
- Notes: deploy started

- Result: deployed successfully

## deploy_202600
- Request time: 2026-04-02 20:26:00 BST
- User instruction: reduce H3 Sub-text by 25% and halve its weight, and keep the trend card structure but make it transparent so the red/green value remains
- Notes: deploy started

- Result: deployed successfully

## deploy_203000
- Request time: 2026-04-02 20:30:00 BST
- User instruction: in the FillEffects section show the gradient variable as text above the existing container, and add a second container using the current gradient the same size as the first
- Notes: deploy started

- Result: deployed successfully

## deploy_204700
- Request time: 2026-04-02 20:47:00 BST
- User instruction: ProfitLossCard: change SALES/EXPENSE to IN/OUT, tighten gaps, move Cluck Statement to the top, make Cluck Statement H3-sized with conditional colour, use sales-green/red image by value, and ensure gradient cards use the shared gradient variable
- Notes: deploy started

- Result: deployed successfully

## deploy_205100
- Request time: 2026-04-02 20:51:00 BST
- User instruction: ProfitLossCard: hide IN and OUT, reduce the +/- values by 25%, and make the +/- values grey
- Notes: deploy started

- Result: deployed successfully

## deploy_205300
- Request time: 2026-04-02 20:53:00 BST
- User instruction: add global default plus local override support for the shared surface gradient while components are still centralised
- Notes: deploy started

- Result: deployed successfully

## deploy_205500
- Request time: 2026-04-02 20:55:00 BST
- User instruction: ProfitLossCard final tweaks: reduce vertical gap below the Cluck card as much as possible, remove the divider between the lower values, and pull the values slightly inward with about 20px outside margin
- Notes: deploy started

- Result: deployed successfully

## deploy_205700
- Request time: 2026-04-02 20:57:00 BST
- User instruction: ProfitLossCard: add a touch more margin on the lower values, about another 10px
- Notes: deploy started

- Result: deployed successfully

## deploy_205800
- Request time: 2026-04-02 20:58:00 BST
- User instruction: make the Cluck card transparent
- Notes: deploy started

- Result: deployed successfully

## deploy_212500
- Request time: 2026-04-02 21:25:00 BST
- User instruction: MiniStatCardHalf: use ico-fried-egg and ico-chick, rename labels to Yokes to Go and Buns to Cook, and ensure the background follows the shared gradient variable setup
- Notes: deploy started

- Result: deployed successfully

## deploy_213800
- Request time: 2026-04-02 21:38:00 BST
- User instruction: redeploy updated ico-chick.png asset
- Notes: deploy started

- Result: deployed successfully

## deploy_214500
- Request time: 2026-04-02 21:45:00 BST
- User instruction: redeploy latest asset state again
- Notes: deploy started

- Result: deployed successfully

## deploy_214700
- Request time: 2026-04-02 21:47:00 BST
- User instruction: deploy the newly updated ico-chick.png after minor edits
- Notes: deploy started

- Result: deployed successfully

## deploy_093600
- Request time: 2026-04-03 09:36:00 BST
- User instruction: HenCards: 2-up layout language, H2 names with medal color, smaller trophy icon, profile-style egg count row, percentage on the right, and coop name left in grey H3 Sub-text
- Notes: deploy started

- Result: deployed successfully

## deploy_094200
- Request time: 2026-04-03 09:42:00 BST
- User instruction: put the gold and silver HenCards on the same line
- Notes: deploy started

- Result: deployed successfully

## deploy_094600
- Request time: 2026-04-03 09:46:00 BST
- User instruction: HenCards: reduce name/medal/coop/icon sizing, color the percentage to match the hen tier, tighten the coop spacing, and use a lighter local gradient override
- Notes: deploy started

- Result: deployed successfully

## deploy_095200
- Request time: 2026-04-03 09:52:00 BST
- User instruction: HenCards: remove trophy from top line, replace the egg icon with the trophy, centralise the hen name, and make long names shrink to fit
- Notes: deploy started

- Result: deployed successfully

## deploy_095700
- Request time: 2026-04-03 09:57:00 BST
- User instruction: HenCards final edits: center coop name, reduce trophy by 15%, reduce the percentage by 15%
- Notes: deploy started

- Result: deployed successfully

## deploy_095900
- Request time: 2026-04-03 09:59:00 BST
- User instruction: fix HenCard name shrinking so it actually scales down instead of ellipsising
- Notes: deploy started

- Result: deployed successfully

## deploy_100900
- Request time: 2026-04-03 10:09:00 BST
- User instruction: add a blank HenCard in the gap after the bronze card using the egg-volution image from icons
- Notes: deploy started

- Result: deployed successfully

## deploy_101200
- Request time: 2026-04-03 10:12:00 BST
- User instruction: double the internal padding on the blank egg-volution HenCard tile
- Notes: deploy started

- Result: deployed successfully

## deploy_101400
- Request time: 2026-04-03 10:14:00 BST
- User instruction: revert the padding change on the egg-volution card, align the image to the top, and make the container transparent
- Notes: deploy started

- Result: deployed successfully

## deploy_101700
- Request time: 2026-04-03 10:17:00 BST
- User instruction: fix the egg-volution tile so the container is genuinely transparent
- Notes: deploy started

- Result: deployed successfully

## deploy_102200
- Request time: 2026-04-03 10:22:00 BST
- User instruction: remove the extra egg-volution card and image
- Notes: deploy started

- Result: deployed successfully

## deploy_102400
- Request time: 2026-04-03 10:24:00 BST
- User instruction: reduce the horizontal gap between MiniStatCardHalf cards so all double-card layouts use the same spacing as HenCards
- Notes: deploy started

- Result: deployed successfully

## deploy_102600
- Request time: 2026-04-03 10:26:00 BST
- User instruction: in the HenCard section add the egg-volution image to the right of the bronze card
- Notes: deploy started

- Result: deployed successfully

## deploy_102700
- Request time: 2026-04-03 10:27:00 BST
- User instruction: reduce the egg-volution image size by 10%
- Notes: deploy started

- Result: deployed successfully

## deploy_103200
- Request time: 2026-04-03 10:32:00 BST
- User instruction: RollingLayRateCard: change bar gradients to purple at the top fading to transparent at the bottom
- Notes: deploy started

- Result: deployed successfully

## deploy_103500
- Request time: 2026-04-03 10:35:00 BST
- User instruction: change the RollingLayRateCard local card gradient from purple to lightpurple
- Notes: deploy started

- Result: deployed successfully

## deploy_103800
- Request time: 2026-04-03 10:38:00 BST
- User instruction: LocationProgressCard: progress bar gradient should go lightpurple to purple, and the card local gradient should be lightpurple
- Notes: deploy started

- Result: deployed successfully

## deploy_104000
- Request time: 2026-04-03 10:40:00 BST
- User instruction: LocationProgressCard: coop names should use Input Label styling, and percentages should be bold and use gold/silver/bronze ranking colors
- Notes: deploy started

- Result: deployed successfully

## deploy_111700
- Request time: 2026-04-03 11:17:00 BST
- User instruction: fix the bottom nav on iOS Chrome so it stays locked to the bottom and stops stretching/leaving a gap when scrolling
- Notes: deploy started

- Result: deployed successfully

## deploy_112000
- Request time: 2026-04-03 11:20:00 BST
- User instruction: bottom nav iOS Chrome fix: keep the CAB above the top border line and stop the white tray from stretching downward with it
- Notes: deploy started

- Result: deployed successfully

## deploy_154700
- Request time: 2026-04-03 15:47:00 BST
- User instruction: CalendarCard: make the calendar operational with today highlighted and swap the card gradient to lightpurple
- Notes: deploy started

- Result: deployed successfully

## deploy_154900
- Request time: 2026-04-03 15:49:00 BST
- User instruction: make CalendarCard fully operational with working month navigation and current month display
- Notes: deploy started

- Result: deployed successfully

## deploy_155400
- Request time: 2026-04-03 15:54:00 BST
- User instruction: CalendarCard: add divider under filters, add summary row with fried egg/chick/sales/expenses, and make clicking dates update the displayed values with fake current-month data
- Notes: deploy started

- Result: deployed successfully

## deploy_162100
- Request time: 2026-04-03 16:21:00 BST
- User instruction: CalendarCard: make summary items 100% larger, use fried egg icon from MiniStatCardHalf, align metrics in fixed containers, make top filters work, remove lower period filters, and stop showing future fake data
- Notes: deploy started

- Result: deployed successfully

## deploy_162400
- Request time: 2026-04-03 16:24:00 BST
- User instruction: CalendarCard: remove zero placeholders for future days and remove the duplicated lower metrics block
- Notes: deploy started

- Result: deployed successfully

## deploy_162600
- Request time: 2026-04-03 16:26:00 BST
- User instruction: CalendarCard: align the four summary metrics in fixed inner containers, move the selected date to the center, and remove the filters above the calendar
- Notes: deploy started

- Result: deployed successfully

## deploy_164400
- Request time: 2026-04-03 16:44:00 BST
- User instruction: CalendarCard: remove the filters entirely and restyle the bottom summary to match the screenshot with four boxed metrics and the date above them
- Notes: deploy started

- Result: deployed successfully

## deploy_165000
- Request time: 2026-04-03 16:50:00 BST
- User instruction: CalendarCard: use the ico-fried-egg icon and increase both bottom summary icons by 50%
- Notes: deploy started

- Result: deployed successfully

## deploy_165300
- Request time: 2026-04-03 16:53:00 BST
- User instruction: CalendarCard: remove icons from eggs and chicks cards, add centered labels on all four metric tiles, and put values below the labels
- Notes: deploy started

- Result: deployed successfully

## deploy_165500
- Request time: 2026-04-03 16:55:00 BST
- User instruction: CalendarCard: increase the metric tile label size by 100%
- Notes: deploy started

- Result: deployed successfully

## deploy_184600
- Request time: 2026-04-03 18:46:00 BST
- User instruction: make the CalendarCard metric tiles responsive so the labels and values clamp and the row collapses on small screens
- Notes: deploy started

- Result: deployed successfully

## deploy_184900
- Request time: 2026-04-03 18:49:00 BST
- User instruction: CalendarCard: increase label/value size by 40%, reduce vertical gap, and move the date above the metric cards
- Notes: deploy started

- Result: deployed successfully

## deploy_185600
- Request time: 2026-04-03 18:56:00 BST
- User instruction: move the hr so it sits between the date and the metric cards in CalendarCard
- Notes: deploy started

- Result: deployed successfully

## deploy_190928
- Request time: 2026-04-03 19:09:28 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_194017
- Request time: 2026-04-03 19:40:17 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_194200
- Request time: 2026-04-03 19:42:00 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_194259
- Request time: 2026-04-03 19:42:59 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_194425
- Request time: 2026-04-03 19:44:25 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_194550
- Request time: 2026-04-03 19:45:50 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_194801
- Request time: 2026-04-03 19:48:01 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_194854
- Request time: 2026-04-03 19:48:54 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_195015
- Request time: 2026-04-03 19:50:15 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_195419
- Request time: 2026-04-03 19:54:19 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_195633
- Request time: 2026-04-03 19:56:33 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_200217
- Request time: 2026-04-03 20:02:17 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_200700
- Request time: 2026-04-03 20:07:00 BST
- User instruction: add a second four-card summary row below the calendar using a 20/30/20/30 layout with chick icons in cards 1 and 3 and 123 in cards 2 and 4
- Notes: deploy started

- Result: deployed successfully

## deploy_201100
- Request time: 2026-04-03 20:11:00 BST
- User instruction: restore the original four calendar summary cards and place the new 20/30/20/30 row underneath them
- Notes: deploy started

- Result: deployed successfully

## deploy_201527
- Request time: 2026-04-03 20:15:27 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_201719
- Request time: 2026-04-03 20:17:19 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_201915
- Request time: 2026-04-03 20:19:15 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_202056
- Request time: 2026-04-03 20:20:56 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully


## deploy_202942
- Request time: 2026-04-03 20:29:50 BST
- User instruction: i made some tweaks to ComponentsShowcase.tsx, deploy please
- Notes: deploy started

- Result: deployed successfully

## deploy_203100
- Request time: 2026-04-03 20:31:00 BST
- User instruction: go
- Notes: deploy started

- Result: built successfully
## deploy_203226
- Request time: 2026-04-03 20:32:26 BST
- User instruction: manual deploy
- Notes: deploy started


## deploy_203200
- Request time: 2026-04-03 20:32:00 BST
- User instruction: deploy!
- Notes: remote deploy started

- Result: in progress
- Result: deployed successfully


## deploy_203400
- Request time: 2026-04-03 20:34:00 BST
- User instruction: deploy
- Notes: deploy requested by user; no code changes provided in this turn

- Result: no-op (nothing to deploy)

## deploy_203440
- Request time: 2026-04-03 20:34:00 BST
- User instruction: i am in the ComponentsShowcase.tsx file, i made edits, deploy
- Notes: deploy started after inspecting diff

- Result: in progress

## deploy_203600
- Request time: 2026-04-03 20:36:00 BST
- User instruction: the online calendar card hasnt been updated with my changes to ComponentsShowcase.tsx, i want those changes deploying
- Notes: redeploy requested specifically for calendar card changes

- Result: in progress
## deploy_203600
- Request time: 2026-04-03 20:36:00 BST
- User instruction: the online calendar card hasnt been updated with my changes to ComponentsShowcase.tsx, i want those changes deploying
- Notes: deploy started

- Result: deployed successfully

## deploy_203800
- Request time: 2026-04-03 20:38:00 BST
- User instruction: edits made, deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_204000
- Request time: 2026-04-03 20:40:00 BST
- User instruction: deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_204500
- Request time: 2026-04-03 20:45:00 BST
- User instruction: deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_204900
- Request time: 2026-04-03 20:49:00 BST
- User instruction: deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_205200
- Request time: 2026-04-03 20:52:00 BST
- User instruction: deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_205300
- Request time: 2026-04-03 20:53:00 BST
- User instruction: again
- Notes: deploy started

- Result: deployed successfully

## deploy_210200
- Request time: 2026-04-03 21:02:00 BST
- User instruction: ok, i want to test placing components on pages, this is what i would like on the home page: 1. page title 2. hr 3. ProfitLossCard 4. MiniStatCardHalf 5. hr 6. WeeklySummaryCard (a positive one) 7. HenCard section 8. hr 9. RollingLayRateCard 10. hr 11. WikiElements
- Notes: deploy started

- Result: deployed successfully

## deploy_213700
- Request time: 2026-04-03 21:37:00 BST
- User instruction: you hvent deployed the root components, youve made ish components... re-build the home page based on those instructions
- Notes: deploy started

- Result: deployed successfully

## deploy_214400
- Request time: 2026-04-03 21:44:00 BST
- User instruction: now the page is just blank
- Notes: deploy started

- Result: deployed successfully

## deploy_214700
- Request time: 2026-04-03 21:47:00 BST
- User instruction: remove all the page items (keep the shell header, nav etc.) from the home page, change the title to home
- Notes: deploy started

- Result: deployed successfully

## deploy_125850
- Request time: 2026-04-04 12:58:50 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_133236
- Request time: 2026-04-04 13:32:36 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_133420
- Request time: 2026-04-04 13:34:20 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_134005
- Request time: 2026-04-04 13:40:05 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_134323
- Request time: 2026-04-04 13:43:23 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_134619
- Request time: 2026-04-04 13:46:19 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_134749
- Request time: 2026-04-04 13:47:49 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_135230
- Request time: 2026-04-04 13:52:30 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_135335
- Request time: 2026-04-04 13:53:35 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_135511
- Request time: 2026-04-04 13:55:11 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_140059
- Request time: 2026-04-04 14:00:59 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_140442
- Request time: 2026-04-04 14:04:42 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_140611
- Request time: 2026-04-04 14:06:11 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_140649
- Request time: 2026-04-04 14:06:49 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_140750
- Request time: 2026-04-04 14:07:50 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_142225
- Request time: 2026-04-04 14:22:25 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_143405
- Request time: 2026-04-04 14:34:05 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_183522
- Request time: 2026-04-04 18:35:22 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_185034
- Request time: 2026-04-04 18:50:34 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_190447
- Request time: 2026-04-04 19:04:47 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_190732
- Request time: 2026-04-04 19:07:32 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_192152
- Request time: 2026-04-04 19:21:52 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_192514
- Request time: 2026-04-04 19:25:14 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_192847
- Request time: 2026-04-04 19:28:47 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_193230
- Request time: 2026-04-04 19:32:30 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_202711
- Request time: 2026-04-04 20:27:11 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_211551
- Request time: 2026-04-04 21:15:51 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_213336
- Request time: 2026-04-04 21:33:36 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_213636
- Request time: 2026-04-04 21:36:36 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_214241
- Request time: 2026-04-04 21:42:41 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_215610
- Request time: 2026-04-04 21:56:10 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_215710
- Request time: 2026-04-04 21:57:10 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_221531
- Request time: 2026-04-04 22:15:31 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_221843
- Request time: 2026-04-04 22:18:43 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_222224
- Request time: 2026-04-04 22:22:24 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_222734
- Request time: 2026-04-04 22:27:34 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_224050
- Request time: 2026-04-04 22:40:50 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_224205
- Request time: 2026-04-04 22:42:05 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_224800
- Request time: 2026-04-04 22:48:00 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_225639
- Request time: 2026-04-04 22:56:39 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_230043
- Request time: 2026-04-04 23:00:43 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_230344
- Request time: 2026-04-04 23:03:44 BST
- User instruction: manual deploy
- Notes: deploy started

## deploy_230403
- Request time: 2026-04-04 23:04:03 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_234842
- Request time: 2026-04-04 23:48:42 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_001513
- Request time: 2026-04-05 00:15:13 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_002949
- Request time: 2026-04-05 00:29:49 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_003752
- Request time: 2026-04-05 00:37:52 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_003929
- Request time: 2026-04-05 00:39:29 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_004247
- Request time: 2026-04-05 00:42:47 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_005300
- Request time: 2026-04-05 00:53:00 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_005711
- Request time: 2026-04-05 00:57:11 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_005917
- Request time: 2026-04-05 00:59:17 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_010114
- Request time: 2026-04-05 01:01:14 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_010400
- Request time: 2026-04-05 01:04:00 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_010651
- Request time: 2026-04-05 01:06:51 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_012434
- Request time: 2026-04-05 01:24:34 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_012537
- Request time: 2026-04-05 01:25:37 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_014109
- Request time: 2026-04-05 01:41:09 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_014953
- Request time: 2026-04-05 01:49:53 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_015541
- Request time: 2026-04-05 01:55:41 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_022218
- Request time: 2026-04-05 02:22:18 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_105438
- Request time: 2026-04-05 10:54:38 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_110445
- Request time: 2026-04-05 11:04:45 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_110647
- Request time: 2026-04-05 11:06:47 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_110857
- Request time: 2026-04-05 11:08:57 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_111122
- Request time: 2026-04-05 11:11:22 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_111325
- Request time: 2026-04-05 11:13:25 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_111519
- Request time: 2026-04-05 11:15:19 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_111806
- Request time: 2026-04-05 11:18:06 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_112134
- Request time: 2026-04-05 11:21:34 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_112457
- Request time: 2026-04-05 11:24:57 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_112715
- Request time: 2026-04-05 11:27:15 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_113358
- Request time: 2026-04-05 11:33:58 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_114311
- Request time: 2026-04-05 11:43:11 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_114539
- Request time: 2026-04-05 11:45:39 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_115224
- Request time: 2026-04-05 11:52:24 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_115728
- Request time: 2026-04-05 11:57:28 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_115939
- Request time: 2026-04-05 11:59:39 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_120211
- Request time: 2026-04-05 12:02:11 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_120338
- Request time: 2026-04-05 12:03:38 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_120559
- Request time: 2026-04-05 12:05:59 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_120939
- Request time: 2026-04-05 12:09:39 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_121233
- Request time: 2026-04-05 12:12:33 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_121712
- Request time: 2026-04-05 12:17:12 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_122104
- Request time: 2026-04-05 12:21:04 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_123040
- Request time: 2026-04-05 12:30:40 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_130821
- Request time: 2026-04-05 13:08:21 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_131626
- Request time: 2026-04-05 13:16:26 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_131817
- Request time: 2026-04-05 13:18:17 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_133002
- Request time: 2026-04-05 13:30:02 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_134627
- Request time: 2026-04-05 13:46:27 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

## deploy_135306
- Request time: 2026-04-05 13:53:06 BST
- User instruction: manual deploy
- Notes: deploy started

- Result: deployed successfully

