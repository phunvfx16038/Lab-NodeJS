const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callback) => {
  mongoClient
    .connect(
      "mongodb+srv://vanphu:Conheocon16@cluster0.qmmk4.mongodb.net/shop?retryWrites=true&w=majority"
    )
    .then((client) => {
      _db = client.db();
      console.log("connected to mongoDB!!!");
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.getDb = getDb;
exports.mongoConnect = mongoConnect;
