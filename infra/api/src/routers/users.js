/**
 * @swagger
 * tags: [Users]
 * /api/v1/users:
 *   get:
 *     summary: List users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Array of users
 */
const express = require('express');
const router = express.Router();
router.get('/', async (_req, res) => {
  res.json([]); // TODO: replace with DB call
});
module.exports = router;
