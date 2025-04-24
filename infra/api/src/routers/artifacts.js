/**
 * @swagger
 * tags: [Artifacts]
 * /api/v1/artifacts:
 *   get:
 *     summary: List artifacts
 *     tags: [Artifacts]
 *     responses:
 *       200:
 *         description: Array of artifacts
 */
const express = require('express');
const router = express.Router();
router.get('/', async (_req, res) => {
  res.json([]);
});
module.exports = router;
