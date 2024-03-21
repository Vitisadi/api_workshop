const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
    res.send({dog: 5, cats: 7, rabbits: 19});
});

module.exports = router;

