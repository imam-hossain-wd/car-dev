const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =`mongodb+srv://${process.env.DB}:${process.env.PASS}@cluster0.ijfbjuv.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {

    await client.connect();
    const servicesCollection = client.db("car-dev").collection("services");
    
    if (req.method === "GET") {
      const news = await servicesCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: news });
    }
  } finally {
  }
}

export default run;