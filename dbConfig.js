const mongodb = require("mongodb");
const dbName = "stackoverflow";
let URL = process.env.DB_URL.replace("<password>", process.env.PASSWORD);

const MongoClient = mongodb.MongoClient;
module.exports = { mongodb, dbName, URL, MongoClient };
