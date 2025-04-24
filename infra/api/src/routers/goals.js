/**
 * @swagger
 * tags: [Goals]
 * /api/v1/goals:
 *   get:
 *     summary: List goals
 *     tags: [Goals]
 *     responses:
 *       200:
 *         description: Array of goals
 */
const express = require('express');
const router = express.Router();
router.get('/', async (_req, res) => {
  res.json([]);
});
module.exports = router;
