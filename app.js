const express = require("express");
const app = express();
const cors = require("cors");
const productsRoute = require("./Routes/Product.routes");


// middlewares
app.use(express.json());
app.use(cors());


// Routes
app.use("/api/v1/product", productsRoute);



app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});

module.exports = app;