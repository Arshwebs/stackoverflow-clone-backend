const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const { MongoClient, URL } = require("./dbConfig");
const client = new MongoClient(URL);
async function run() {
  try {
    await client.connect();
    const usersColl = await client.db("Stackoverflow").collection("users");
    const data = await usersColl.find().toArray();
    console.log(data);
    await client.db("Stackoverflow").command({ ping: 1 });
    console.log("successfully connected");
  } catch (error) {
    await client.close();
  }
}

run().catch(console.dir);

app.listen(process.env.PORT || 8001, () =>
  console.log(`server is running on port ${process.env.PORT || 8001}`),
);
