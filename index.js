const express = require("express");
const app = express();
require("dotenv").config();

const customerRoutes = require("./src/routes/customer.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/customer", customerRoutes);

app.get("/", (req, res) => {
  res.send("Server Healthy");
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server started on port ${port}`));
