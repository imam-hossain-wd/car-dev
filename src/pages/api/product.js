const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB}:${process.env.PASS}@cluster0.ijfbjuv.mongodb.net/?retryWrites=true&w=majority`;

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

        const productsCollection = client.db("car-dev").collection("products");

        if (req.method === "GET") {
            if (req.query.id) { 
                const id = req.query.id;
                const query = { _id: new ObjectId(id) };
                const product = await productsCollection.findOne(query);
                if (product) {
                    res.send({ message: "success", status: 200, data: product });
                } else {
                    res.status(404).send({ message: "Product not found", status: 404 });
                }
            } else {
                const products = await productsCollection.find({}).toArray();
                res.send({ message: "success", status: 200, data: products });
            }
        }

    }
    finally {
    }
}

export default run;
