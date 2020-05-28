const express = require("express");
//require("dotenv").config();
const app = express();
const routes = require("./routes");
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/v1", routes);
//app.use("/v2", routes);
app.listen(PORT, (req, res) => {
  console.log(`server listening on ${PORT}`);
});
