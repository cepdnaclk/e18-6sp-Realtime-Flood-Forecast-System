const express = require("express");
const { mongoose } = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const port = 3001;

dotenv.config(); // Load environment variables

app.use(cors());
app.use(express.json());

// Routes
app.use(require("./routes/userRoutes"));
app.use(require("./routes/rainfallRoutes"));

// Start server
app.listen(port, async () => {
  const mongoDB = process.env.MONGODB_URI;
  mongoose.set("strictQuery", true);
  await mongoose
    .connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
