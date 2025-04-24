/**
 * @swagger
 * tags: [Entries]
 * /api/v1/entries:
 *   get:
 *     summary: List entries
 *     tags: [Entries]
 *     responses:
 *       200:
 *         description: Array of entries
 */
const express = require('express');
const router = express.Router();
router.get('/', async (_req, res) => {
  res.json([]);
});
module.exports = router;
