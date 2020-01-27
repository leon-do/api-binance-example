const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url =
  "mongodb://myUserName:myPassword123@ds137360.mlab.com:37360/mlab-leon-db";

// Database Name
const dbName = "mlab-leon-db";

function getCollection(collectionName) {
  return new Promise(res => {
    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, client) {
      const db = client.db(dbName);
      res(db.collection(collectionName));
    });
  });
}

module.exports = getCollection;
