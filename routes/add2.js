const express = require('express');
const router = express.Router();

router.get('/add2', (req, res) => {
   const first = parseInt(req.query.first); 
   const second = parseInt(req.query.second);
   if (isNaN(first) || isNaN(second)) {
      return res.status(400).json({ 
         error: 'Both first and second query parameters must be valid numbers' 
      });
   }

   res.json({ result: first + second });
});

module.exports = router;
