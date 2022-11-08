const express = require("express");
const app = express();
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});

// posting to database
app.post('/api/v1/product', );


// get product
app.get("/api/v1/product", );


module.exports = app;