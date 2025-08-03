-- CreateTable
CREATE TABLE `deals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `contact_name` VARCHAR(255) NOT NULL,
    `company` VARCHAR(255) NOT NULL,
    `stage` ENUM('New', 'In Progress', 'Won', 'Lost') NOT NULL DEFAULT 'New',
    `value` DECIMAL(10, 2) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `close_date` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
