const express = require('express');
const router = express.Router();
require('dotenv').config();

router.use(express.json());

router.post('/login', (req, res) => {
  const { pass } = req.body;

  if (pass === process.env.SECRET_PASSWORD) {
    return res.json({
      ok: true,
      clue: process.env.SECRET_CLUE
    });
  } else {
    return res.json({ ok: false });
  }
});

module.exports = router;
