const { MongoClient } = require("mongodb");
const URI =
  "mongodb+srv://mukuldhiman853:yeyblwI9plb7gQUl@namastenode.dilkaii.mongodb.net/";

const client = new MongoClient(URI);
const dbName = "HelloWorld";
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstName: "John",
    lastName: "Doe",
    city: "Delhi",
    phoneNumber: "6969696969",
  };

  //   const insertResult = await collection.insertMany([data]);
  //   console.log("Inserted documents =>", insertResult);

  const findResult = await collection.find({ firstName: "Mukul" });
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
