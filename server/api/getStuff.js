const express = require('express')
const router = express.Router()
const getCollection = require('../database/getCollection')

router.get('/', async (req, res, next) => {
  const collection = await getCollection('test')
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      if (err) next(err)
      res.send(docs)
    });
})

module.exports = router