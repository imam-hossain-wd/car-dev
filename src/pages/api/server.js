const express = require("express");
const next = require("next");
const mongoose = require("mongoose");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.prepare().then(() => {
  const server = express();
  server.use(express.json());


  const productsCollection = client.db("car-dev").collection("products");

  server.get("/api/products", async (req, res) => {
    try {
      await client.connect(); // Connect to MongoDB
      const productsCollection = client.db("car-dev").collection("products"); // Access the collection
      const products = await productsCollection.find({}).toArray();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    } finally {
      client.close(); // Close the MongoDB connection when done
    }
  });


  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
