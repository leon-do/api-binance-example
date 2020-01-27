const express = require('express')
const ObjectID = require('mongodb').ObjectID
const router = express.Router()
const getCollection = require('../database/getCollection')

router.delete('/', async (req, res, next) => {
  const id = req.body.text
  const collection = await getCollection('test')
  collection.deleteOne({_id: ObjectID(id)}, (err, docs) => {
    if (err) next(err)
    res.send(docs)
  })
})

module.exports = router