const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 5000;
// const secret = process.env.DB_TOKEN;
app.use(cookieParser());

const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://<db_username>:<db_password>@cluster0.ydmxw3q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = "mongodb://127.0.0.1:27017";
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
    // Connect the client to the server	(optional starting in v4.7)
    const trainServer = client.db("trainServer");
    const userCollection = trainServer.collection("users");

    // User Management start
    app.post("/register", async (req, res) => {
      const { email, password } = req.body;
      const hashedPass = await bcrypt.hash(password, 10);
      const user = await userCollection.insertOne({
        email,
        password: hashedPass,
      });
      res.send(user).status(201);
    });
    app.post("/login", async (req, res) => {
      const { email, password } = req.body;
      const user = await userCollection.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send({ message: "Invalid email or password" });
      }
      const token = jwt.sign({ id: user.email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      const data = {
        msg: "Sing in Done",
        token,
      };
      res.send(data).status(200);
    });
    // User Management end
    // Station Management start
    const stationsCollection = trainServer.collection("stations");
    app.post("/addStation", async (req, res) => {
      const station = await stationsCollection.insertOne(req.body);
      res.send(station).status(201);
    });

    // Station Management End

    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Train is running");
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
