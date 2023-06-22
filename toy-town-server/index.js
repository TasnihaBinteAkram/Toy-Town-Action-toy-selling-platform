const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6kleiyi.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // client.connect();
    const toyCollection = client.db("toy-town").collection("toyCollection");

    //get all toys
    app.get("/toys", async (req, res) => {
      const result = await toyCollection.find().toArray();
      res.json(result);
    });

    //get toy by id
    app.get("/toys/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await toyCollection.findOne(query);
      res.json(result);
    });

    //post toys
    app.post("/toys", async (req, res) => {
      const toy = req.body;
      const price = parseInt(toy.price);
      toy.price = price;
      toy.category = toy.category.toLowerCase();
      const result = await toyCollection.insertOne(toy);
      res.json(result);
    });

    //get toys by category
    app.get("/category", async (req, res) => {
      const category = req.query;
      let query = {};
      const options = {
        projection: { photo: 1, name: 1, price: 1, rating: 1 },
      };
      if (req.query.category) {
        query = { category: req.query.category };
      }
      const result = await toyCollection.find(query, options).toArray();
      res.json(result);
    });

    //get toys by search
    app.get("/alltoys/:text", async (req, res) => {
      const stext = req.params.text;
      const options = {
        projection: { seller: 1, name: 1, price: 1, quantity: 1, category: 1 },
      };
      const query = { name: { $regex: stext, $options: "i" } };
      const result = await toyCollection.find(query, options).toArray();
      res.json(result);
    });

    //get toys by user mail and sort
    app.get("/mytoys", async (req, res) => {
      const sorts = req.query;
      const mail = sorts.email;
      const sortby = parseInt(sorts.sortby);
      let query = {};
      if (req.query.email) {
        query = { email: req.query.email };
      }
      if (sortby == 0) {
        const result = await toyCollection.find(query).toArray();
        res.json(result);
      } else {
        const result = await toyCollection
          .find(query)
          .sort({ price: sortby })
          .toArray();
        res.json(result);
      }
    });

    //get toys by rating
    app.get('/bestsellers', async(req, res)=> {
      const query = {rating: "5"};
      const result = await toyCollection.find(query).toArray();
      res.json(result)
    })

    //update toy detail
    app.patch("/updatetoy/:id", async (req, res) => {
      const id = req.params.id;
      const toyInfo = req.body;
      toyInfo.price = parseInt(toyInfo.price);
      const filter = { _id: new ObjectId(id) };
      const updatedToy = {
        $set: {
          ...toyInfo,
        },
      };
      const result = await toyCollection.updateOne(filter, updatedToy);
      res.json(result);
    });

    //sort toy
    // app.get('/mytoys', async(req,res) => {
    //   const sorts = req.query;

    // })

    //delete toy
    app.delete("/mytoys/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await toyCollection.deleteOne(query);
      res.json(result);
    });
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log("server is running on", port);
});