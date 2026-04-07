-- HenLife starter seed data
-- Assumes users table is currently empty or will use user_id = 1 for first test user

-- Create a test user only if you do not already have one.
-- If you already have a real app user, STOP and tell me, and I'll adjust this.
INSERT INTO users (email, password_hash, display_name, timezone)
SELECT 'russ@example.com', '$2y$10$8m6K8nS8k5iM4ZB3i2gG3uq5x8FQ0mI2k3WQx9g9cYj2S4l1m8z9K', 'Russ', 'Europe/London'
WHERE NOT EXISTS (
  SELECT 1 FROM users WHERE email = 'russ@example.com'
);

INSERT INTO coops (user_id, name, location_label, notes, status, photo_url) VALUES
(1, 'Willow House', 'North Field', 'Main laying coop', 'active', '/egg/media/coops/coop-1.png'),
(1, 'Speckled Coop', 'Back Orchard', 'Smaller mixed flock coop', 'active', '/egg/media/coops/coop-2.png'),
(1, 'Garden Roost', 'South Run', 'Overflow and broody space', 'active', '/egg/media/coops/coop-3.png')
ON DUPLICATE KEY UPDATE name = VALUES(name);

INSERT INTO sales (user_id, coop_id, sale_date, category, item_name, customer_name, quantity, unit, unit_price, total_amount, status, due_date, notes) VALUES
(1, 1, '2026-04-06', 'eggs', 'Mixed dozen', 'Farm Gate', 12, 'eggs', 0.40, 4.80, 'paid', NULL, 'Fresh morning collection'),
(1, 2, '2026-04-05', 'chicks', 'Lavender chicks', 'J. Porter', 4, 'chicks', 5.50, 22.00, 'paid', NULL, 'Reserved pickup'),
(1, 1, '2026-04-03', 'eggs', 'Tray of 30', 'Market stall', 30, 'eggs', 0.35, 10.50, 'paid', NULL, 'Saturday market'),
(1, 3, '2026-04-02', 'chicken', 'Point-of-lay pullet', 'A. Green', 1, 'bird', 18.00, 18.00, 'due', '2026-04-09', 'Invoice to settle'),
(1, 2, '2026-04-01', 'equipment', 'Spare drinker', 'Allotment mate', 1, 'item', 7.00, 7.00, 'paid', NULL, 'Used equipment sale'),
(1, 1, '2026-03-31', 'eggs', '6 white eggs', 'Honesty box', 6, 'eggs', 0.37, 2.20, 'paid', NULL, 'Walk-up sale'),
(1, 1, '2026-03-25', 'eggs', 'Brown dozen', 'Bakery lane', 12, 'eggs', 0.38, 4.50, 'paid', NULL, 'Weekly order'),
(1, 3, '2026-03-24', 'chicken', 'Rescue hen adoption', 'L. Marsh', 1, 'bird', 16.00, 16.00, 'paid', NULL, 'Rehome fee'),
(1, 2, '2026-03-23', 'chicks', 'Barn mix chicks', 'School visit', 6, 'chicks', 4.00, 24.00, 'due', '2026-03-30', 'Invoice sent'),
(1, 1, '2026-03-20', 'eggs', 'Cafe breakfast tray', 'Oak Cafe', 24, 'eggs', 0.37, 8.80, 'paid', NULL, 'Hospitality order');

INSERT INTO expenses (user_id, coop_id, expense_date, category, description, vendor, quantity, unit, amount, status, due_date, notes, receipt_url) VALUES
(1, 1, '2026-03-30', 'bedding', 'Wood shavings bale', 'Country Store', 2, 'bales', 13.80, 'paid', NULL, 'Monthly bedding top-up', NULL),
(1, 2, '2026-03-29', 'repairs', 'Fence repair staples', 'Tool Shed', 1, 'box', 8.45, 'paid', NULL, 'Run repair materials', NULL),
(1, 1, '2026-03-28', 'feed', 'Mineral grit tub', 'Feed Merchant', 1, 'tub', 6.95, 'due', '2026-04-07', 'Invoice pending', NULL),
(1, 3, '2026-03-27', 'supplies', 'Nest box liner pack', 'Village shop', 2, 'packs', 9.50, 'overdue', '2026-04-02', 'Need to settle', NULL),
(1, 2, '2026-03-26', 'cleaning', 'Disinfectant refill', 'Agri Supplies', 1, 'bottle', 11.20, 'paid', NULL, 'Coop cleaning stock', NULL),
(1, 1, '2026-03-21', 'repairs', 'Wheelbarrow repair bolts', 'Fixings Direct', 1, 'set', 5.20, 'paid', NULL, 'Yard kit', NULL),
(1, 3, '2026-03-18', 'health', 'Red mite powder', 'Farm Chem', 1, 'pack', 14.10, 'overdue', '2026-03-25', 'Treatment stock', NULL),
(1, 2, '2026-03-15', 'equipment', 'Brooder bulb', 'Agri Supplies', 2, 'bulbs', 12.60, 'paid', NULL, 'Spare bulbs', NULL),
(1, 1, '2026-03-12', 'repairs', 'Coop latch set', 'Ironmongers', 1, 'set', 7.90, 'due', '2026-03-19', 'Front latch swap', NULL);
