require("dotenv").config();
require("./config/db.js");
const authRouter = require("./routes/authRoutes.js");
const express = require("express");
const cors = require("cors");
const verifyToken = require("./middlewares/verifyToken.js");
const listRouter = require("./routes/listRoutes.js");

const app = express();
//cros origin resource sharing
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is running...");
});

app.use("/api/auth", authRouter);
app.use("/api/list", listRouter);

// app.use(verifyToken);

app.listen(process.env.PORT, () => {
  console.log(
    "------------- App listening on port " + process.env.PORT + " ------------"
  );
});
