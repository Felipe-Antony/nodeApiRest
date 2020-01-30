const express = require('express');
const authMiddlewar = require('../middlewars/auth');

const router = express.Router();

router.use(authMiddlewar);

router.get('/', (req, res) => {
    res.send({ ok: true, user: req.userId });
});

module.exports = app => app.use('/projects', router);