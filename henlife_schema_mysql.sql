-- HenLife / Eggcountant
-- MySQL 8+ schema
-- Safe first-pass schema for phpMyAdmin import

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS activity_log;
DROP TABLE IF EXISTS media_assets;
DROP TABLE IF EXISTS calendar_events;
DROP TABLE IF EXISTS treatment_events;
DROP TABLE IF EXISTS medications;
DROP TABLE IF EXISTS sales;
DROP TABLE IF EXISTS expenses;
DROP TABLE IF EXISTS chicks;
DROP TABLE IF EXISTS incubation_batches;
DROP TABLE IF EXISTS egg_collections;
DROP TABLE IF EXISTS hens;
DROP TABLE IF EXISTS breeds;
DROP TABLE IF EXISTS coops;
DROP TABLE IF EXISTS users;

SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE users (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  display_name VARCHAR(150) NULL,
  timezone VARCHAR(64) NOT NULL DEFAULT 'Europe/London',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_users_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE coops (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NOT NULL,
  name VARCHAR(150) NOT NULL,
  location_label VARCHAR(150) NULL,
  notes TEXT NULL,
  status ENUM('active','inactive','archived') NOT NULL DEFAULT 'active',
  photo_url VARCHAR(500) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_coops_user_id (user_id),
  CONSTRAINT fk_coops_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE breeds (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NULL,
  species VARCHAR(50) NOT NULL DEFAULT 'chicken',
  name VARCHAR(150) NOT NULL,
  is_custom TINYINT(1) NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_breeds_species_name_user (species, name, user_id),
  KEY idx_breeds_user_id (user_id),
  CONSTRAINT fk_breeds_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE hens (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NOT NULL,
  coop_id BIGINT UNSIGNED NULL,
  breed_id BIGINT UNSIGNED NULL,
  name VARCHAR(150) NOT NULL,
  slug VARCHAR(180) NULL,
  date_of_birth DATE NULL,
  sex ENUM('hen','rooster','unknown') NOT NULL DEFAULT 'hen',
  status ENUM('active','sold','deceased','rehomed','missing','archived') NOT NULL DEFAULT 'active',
  source VARCHAR(255) NULL,
  acquired_on DATE NULL,
  departed_on DATE NULL,
  departure_reason VARCHAR(255) NULL,
  notes TEXT NULL,
  profile_photo_url VARCHAR(500) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_hens_user_id (user_id),
  KEY idx_hens_coop_id (coop_id),
  KEY idx_hens_breed_id (breed_id),
  CONSTRAINT fk_hens_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_hens_coop FOREIGN KEY (coop_id) REFERENCES coops(id) ON DELETE SET NULL,
  CONSTRAINT fk_hens_breed FOREIGN KEY (breed_id) REFERENCES breeds(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE egg_collections (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NOT NULL,
  coop_id BIGINT UNSIGNED NULL,
  laid_by_hen_id BIGINT UNSIGNED NULL,
  collected_on DATE NOT NULL,
  quantity INT UNSIGNED NOT NULL,
  egg_type ENUM('table','hatching','damaged','double-yolk','other') NOT NULL DEFAULT 'table',
  notes TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_egg_collections_user_id (user_id),
  KEY idx_egg_collections_coop_id (coop_id),
  KEY idx_egg_collections_hen_id (laid_by_hen_id),
  KEY idx_egg_collections_collected_on (collected_on),
  CONSTRAINT fk_egg_collections_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_egg_collections_coop FOREIGN KEY (coop_id) REFERENCES coops(id) ON DELETE SET NULL,
  CONSTRAINT fk_egg_collections_hen FOREIGN KEY (laid_by_hen_id) REFERENCES hens(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE incubation_batches (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NOT NULL,
  coop_id BIGINT UNSIGNED NULL,
  batch_name VARCHAR(150) NULL,
  started_on DATE NOT NULL,
  expected_hatch_on DATE NULL,
  eggs_set INT UNSIGNED NOT NULL,
  eggs_candled INT UNSIGNED NOT NULL DEFAULT 0,
  eggs_viable INT UNSIGNED NOT NULL DEFAULT 0,
  eggs_hatched INT UNSIGNED NOT NULL DEFAULT 0,
  eggs_failed INT UNSIGNED NOT NULL DEFAULT 0,
  incubation_method ENUM('broody','incubator','other') NOT NULL DEFAULT 'broody',
  status ENUM('active','hatched','failed','cancelled','archived') NOT NULL DEFAULT 'active',
  notes TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_incubation_batches_user_id (user_id),
  KEY idx_incubation_batches_coop_id (coop_id),
  KEY idx_incubation_batches_started_on (started_on),
  CONSTRAINT fk_incubation_batches_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_incubation_batches_coop FOREIGN KEY (coop_id) REFERENCES coops(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE chicks (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NOT NULL,
  incubation_batch_id BIGINT UNSIGNED NULL,
  coop_id BIGINT UNSIGNED NULL,
  breed_id BIGINT UNSIGNED NULL,
  promoted_to_hen_id BIGINT UNSIGNED NULL,
  name VARCHAR(150) NULL,
  hatch_date DATE NULL,
  sex ENUM('hen','rooster','unknown') NOT NULL DEFAULT 'unknown',
  status ENUM('active','sold','deceased','rehomed','promoted','archived') NOT NULL DEFAULT 'active',
  notes TEXT NULL,
  profile_photo_url VARCHAR(500) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_chicks_user_id (user_id),
  KEY idx_chicks_batch_id (incubation_batch_id),
  KEY idx_chicks_coop_id (coop_id),
  KEY idx_chicks_breed_id (breed_id),
  KEY idx_chicks_promoted_hen_id (promoted_to_hen_id),
  CONSTRAINT fk_chicks_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_chicks_batch FOREIGN KEY (incubation_batch_id) REFERENCES incubation_batches(id) ON DELETE SET NULL,
  CONSTRAINT fk_chicks_coop FOREIGN KEY (coop_id) REFERENCES coops(id) ON DELETE SET NULL,
  CONSTRAINT fk_chicks_breed FOREIGN KEY (breed_id) REFERENCES breeds(id) ON DELETE SET NULL,
  CONSTRAINT fk_chicks_promoted_hen FOREIGN KEY (promoted_to_hen_id) REFERENCES hens(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE medications (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NOT NULL,
  name VARCHAR(150) NOT NULL,
  category VARCHAR(100) NULL,
  default_dosage VARCHAR(100) NULL,
  withdrawal_days INT UNSIGNED NULL,
  notes TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_medications_user_id (user_id),
  CONSTRAINT fk_medications_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE treatment_events (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NOT NULL,
  medication_id BIGINT UNSIGNED NULL,
  target_type ENUM('hen','chick','coop','flock') NOT NULL,
  target_hen_id BIGINT UNSIGNED NULL,
  target_chick_id BIGINT UNSIGNED NULL,
  target_coop_id BIGINT UNSIGNED NULL,
  administered_on DATE NOT NULL,
  dosage VARCHAR(100) NULL,
  administered_by VARCHAR(150) NULL,
  reason VARCHAR(255) NULL,
  notes TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_treatment_events_user_id (user_id),
  KEY idx_treatment_events_medication_id (medication_id),
  KEY idx_treatment_events_hen_id (target_hen_id),
  KEY idx_treatment_events_chick_id (target_chick_id),
  KEY idx_treatment_events_coop_id (target_coop_id),
  CONSTRAINT fk_treatment_events_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_treatment_events_medication FOREIGN KEY (medication_id) REFERENCES medications(id) ON DELETE SET NULL,
  CONSTRAINT fk_treatment_events_hen FOREIGN KEY (target_hen_id) REFERENCES hens(id) ON DELETE CASCADE,
  CONSTRAINT fk_treatment_events_chick FOREIGN KEY (target_chick_id) REFERENCES chicks(id) ON DELETE CASCADE,
  CONSTRAINT fk_treatment_events_coop FOREIGN KEY (target_coop_id) REFERENCES coops(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE expenses (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NOT NULL,
  coop_id BIGINT UNSIGNED NULL,
  expense_date DATE NOT NULL,
  category VARCHAR(100) NOT NULL,
  description VARCHAR(255) NOT NULL,
  vendor VARCHAR(150) NULL,
  quantity DECIMAL(10,2) NULL,
  unit VARCHAR(50) NULL,
  amount DECIMAL(12,2) NOT NULL,
  status ENUM('paid','due','overdue','cancelled') NOT NULL DEFAULT 'paid',
  due_date DATE NULL,
  notes TEXT NULL,
  receipt_url VARCHAR(500) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_expenses_user_id (user_id),
  KEY idx_expenses_coop_id (coop_id),
  KEY idx_expenses_expense_date (expense_date),
  KEY idx_expenses_status (status),
  CONSTRAINT fk_expenses_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_expenses_coop FOREIGN KEY (coop_id) REFERENCES coops(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE sales (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NOT NULL,
  coop_id BIGINT UNSIGNED NULL,
  sale_date DATE NOT NULL,
  category ENUM('eggs','chicks','chicken','feed','equipment','other') NOT NULL,
  item_name VARCHAR(255) NOT NULL,
  customer_name VARCHAR(150) NULL,
  quantity DECIMAL(10,2) NOT NULL DEFAULT 1,
  unit VARCHAR(50) NULL,
  unit_price DECIMAL(12,2) NULL,
  total_amount DECIMAL(12,2) NOT NULL,
  status ENUM('paid','due','overdue','cancelled') NOT NULL DEFAULT 'paid',
  due_date DATE NULL,
  notes TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_sales_user_id (user_id),
  KEY idx_sales_coop_id (coop_id),
  KEY idx_sales_sale_date (sale_date),
  KEY idx_sales_status (status),
  CONSTRAINT fk_sales_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_sales_coop FOREIGN KEY (coop_id) REFERENCES coops(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE calendar_events (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NOT NULL,
  coop_id BIGINT UNSIGNED NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NULL,
  event_type ENUM('medication','collection','sale_due','expense_due','hatch','custom') NOT NULL,
  starts_at DATETIME NOT NULL,
  ends_at DATETIME NULL,
  all_day TINYINT(1) NOT NULL DEFAULT 0,
  completed TINYINT(1) NOT NULL DEFAULT 0,
  related_entity_type VARCHAR(50) NULL,
  related_entity_id BIGINT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_calendar_events_user_id (user_id),
  KEY idx_calendar_events_coop_id (coop_id),
  KEY idx_calendar_events_starts_at (starts_at),
  CONSTRAINT fk_calendar_events_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_calendar_events_coop FOREIGN KEY (coop_id) REFERENCES coops(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE media_assets (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NOT NULL,
  target_type ENUM('hen','chick','coop','expense','sale','batch','egg_collection') NOT NULL,
  target_id BIGINT UNSIGNED NOT NULL,
  file_url VARCHAR(500) NOT NULL,
  mime_type VARCHAR(100) NULL,
  alt_text VARCHAR(255) NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_media_assets_user_id (user_id),
  KEY idx_media_assets_target (target_type, target_id),
  CONSTRAINT fk_media_assets_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE activity_log (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NOT NULL,
  entity_type VARCHAR(50) NOT NULL,
  entity_id BIGINT UNSIGNED NOT NULL,
  action VARCHAR(100) NOT NULL,
  message TEXT NULL,
  meta_json JSON NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_activity_log_user_id (user_id),
  KEY idx_activity_log_entity (entity_type, entity_id),
  CONSTRAINT fk_activity_log_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Seed core breeds
INSERT INTO breeds (user_id, species, name, is_custom) VALUES
(NULL, 'chicken', 'Black Rock', 0),
(NULL, 'chicken', 'Goldline', 0),
(NULL, 'chicken', 'Speckledy', 0),
(NULL, 'chicken', 'Sussex', 0),
(NULL, 'chicken', 'Rhode Island Red', 0),
(NULL, 'chicken', 'Buff Orpington', 0),
(NULL, 'chicken', 'Marans', 0),
(NULL, 'chicken', 'Silkie', 0),
(NULL, 'chicken', 'Cream Legbar', 0),
(NULL, 'chicken', 'Wyandotte', 0),
(NULL, 'chicken', 'Pekin Bantam', 0);
