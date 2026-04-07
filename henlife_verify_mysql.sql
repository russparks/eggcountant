-- HenLife verification pack
-- Run in phpMyAdmin against u726116940_henlife_main

-- 1) Check all expected tables exist
SHOW TABLES;

-- 2) Quick row counts
SELECT 'users' AS table_name, COUNT(*) AS row_count FROM users
UNION ALL SELECT 'coops', COUNT(*) FROM coops
UNION ALL SELECT 'breeds', COUNT(*) FROM breeds
UNION ALL SELECT 'hens', COUNT(*) FROM hens
UNION ALL SELECT 'egg_collections', COUNT(*) FROM egg_collections
UNION ALL SELECT 'incubation_batches', COUNT(*) FROM incubation_batches
UNION ALL SELECT 'chicks', COUNT(*) FROM chicks
UNION ALL SELECT 'medications', COUNT(*) FROM medications
UNION ALL SELECT 'treatment_events', COUNT(*) FROM treatment_events
UNION ALL SELECT 'expenses', COUNT(*) FROM expenses
UNION ALL SELECT 'sales', COUNT(*) FROM sales
UNION ALL SELECT 'calendar_events', COUNT(*) FROM calendar_events
UNION ALL SELECT 'media_assets', COUNT(*) FROM media_assets
UNION ALL SELECT 'activity_log', COUNT(*) FROM activity_log;

-- 3) Confirm breed seed data loaded
SELECT id, species, name, is_custom
FROM breeds
ORDER BY name;

-- 4) Inspect sales/expenses structure for app wiring
DESCRIBE sales;
DESCRIBE expenses;

-- 5) Inspect flock-related structure
DESCRIBE coops;
DESCRIBE hens;
DESCRIBE chicks;
DESCRIBE incubation_batches;

-- 6) Show foreign keys
SELECT
  TABLE_NAME,
  COLUMN_NAME,
  CONSTRAINT_NAME,
  REFERENCED_TABLE_NAME,
  REFERENCED_COLUMN_NAME
FROM information_schema.KEY_COLUMN_USAGE
WHERE TABLE_SCHEMA = DATABASE()
  AND REFERENCED_TABLE_NAME IS NOT NULL
ORDER BY TABLE_NAME, COLUMN_NAME;
