const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const regjistrimiApi = require("./routes/regjistrimiApi");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use("/api/regjistrimi", regjistrimiApi);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

app.listen(process.env.PORT, () =>
  console.log("server running", process.env.PORT),
);
