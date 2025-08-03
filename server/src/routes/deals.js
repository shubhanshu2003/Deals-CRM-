const { Router } = require('express');
const { PrismaClient } = require('@prisma/client');

const router = Router();
const prisma = new PrismaClient();

router.get('/deals', async (req, res) => {
    // Destructure incoming query parameters with defaults
    const { q, stage, min, max, page = '1', limit = '10' } = req.query;

    // Build the 'where' filter object for Prisma queries
    const where = {};

    // Text search filter across multiple fields using OR
    if (q) {
        where.OR = [
            { name: { contains: q } },         // Case sensitivity depends on DB collation
            { contactName: { contains: q } },
            { company: { contains: q } },
        ];
    }

    // Stage filter (enum equality)
    if (stage) {
        // Prisma enum expects values like 'In_Progress', 'New', etc.
        where.stage = { equals: stage };
    }

    // Numeric range filter for 'value'
    if (min || max) {
        where.value = {};
        if (min) where.value.gte = parseFloat(min);  // Greater than or equal min
        if (max) where.value.lte = parseFloat(max);  // Less than or equal max
    }

    // Pagination calculations
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const skip = (pageNum - 1) * limitNum;

    try {
        // Fetch filtered deals with pagination
        const deals = await prisma.deal.findMany({
            where,
            skip,
            take: limitNum,
        });

        // Count total matches for pagination metadata
        const total = await prisma.deal.count({ where });

        // Respond with deals and pagination info
        res.json({
            deals,
            total,
            page: pageNum,
            limit: limitNum,
            totalPages: Math.ceil(total / limitNum),
        });
    } catch (error) {
        console.error('Error fetching deals:', error);
        res.status(500).json({ error: "An error occurred while fetching deals." });
    }
});

module.exports = router;
