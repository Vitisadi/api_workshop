const express = require('express');
const router = express.Router();

router.post('/add', (req, res) => {
    const first = parseInt(req.body.first);
    const second = parseInt(req.body.second);
    if (isNaN(first) || isNaN(second)) {
        return res.status(400).json({ 
           error: 'Both first and second query parameters must be valid numbers' 
        });
     }
     res.json({ result: first + second });
});

module.exports = router;

