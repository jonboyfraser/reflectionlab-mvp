/**
 * @swagger
 * tags: [Seeds]
 * /api/v1/seeds:
 *   get:
 *     summary: List seeds
 *     tags: [Seeds]
 *     responses:
 *       200:
 *         description: Array of seeds
 */
const express = require('express');
const router = express.Router();
router.get('/', async (_req, res) => {
  res.json([]);
});
module.exports = router;
