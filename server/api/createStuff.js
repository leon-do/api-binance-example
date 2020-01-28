const express = require("express");
const router = express.Router();
const getCollection = require("../database/getCollection");

router.post("/create", async (req, res, next) => {
  const body = req.body;
  const collection = await getCollection("test");
  collection.insertOne(body, (err, docs) => {
    if (err) next(err);
    res.send(docs);
  });
});

module.exports = router;
