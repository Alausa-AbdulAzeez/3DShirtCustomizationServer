const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dalleRoutes = require("./routes/dalle.routes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.listen(5000, () => console.log("server running on 8080"));
