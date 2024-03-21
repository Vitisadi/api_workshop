const express = require('express');
const router = express.Router();
const { db } = require('../db.js');

router.get('/data', async (req, res) => {
   try {
      // Assuming `req.db` is your MongoDB database instance
      // Replace 'yourCollectionName' with an actual collection name in your database
      // This attempts to find a single document in the specified collection
      await db.collection('inventory').findOne({});
      res.json({ canConnect: true });
   } catch (err) {
      console.error('Failed to connect to the database:', err);
      res.json({ canConnect: false });
   }
});

module.exports = router;
