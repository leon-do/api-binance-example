const express = require("express");
const router = express.Router();
const getCollection = require("../database/getCollection");
const ObjectID = require('mongodb').ObjectID

router.post("/update", async (req, res, next) => {
  const {id, ...data} = req.body.data
  const collection = await getCollection("test");
  collection.updateOne(
    { _id: ObjectID(id) },
    { $set: data },
    (err, docs) => {
      if (err) next(err);
      res.send(docs);
    }
  );
});

module.exports = router;
