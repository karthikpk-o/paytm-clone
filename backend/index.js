const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");
const dotenv = require('dotenv')
dotenv.config();


const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });