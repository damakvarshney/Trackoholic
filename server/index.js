require("./model/User");
require("./model/Track");
const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("./middleware/requireAuth");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");

const app = express();

app.use(express.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri =
  "mongodb+srv://admin:admin@cluster0.udiql.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo Instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error in connecting to mongo", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email : ${req.user.email} `);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started at port ${port}....`);
});
