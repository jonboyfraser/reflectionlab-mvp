/**
 * @swagger
 * tags: [Journals]
 * /api/v1/journals:
 *   get:
 *     summary: List journals
 *     tags: [Journals]
 *     responses:
 *       200:
 *         description: Array of journals
 */
const express = require('express');
const router = express.Router();
router.get('/', async (_req, res) => {
  res.json([]);
});
module.exports = router;
