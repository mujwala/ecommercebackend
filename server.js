const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const url = require('./url'); // Corrected the import of the URL
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect(url, { dbName: "miniproject", useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection success');
    })
    .catch((errRes) => {
        console.log("Connection failed: ", errRes);
    });

const productRoutes = require('./routes/productRoutes');
app.use("/products", productRoutes);
const userApis=require('./routes/userRoutes')
app.use("/users",userApis)
const cartApis=require('./routes/cartRoutes')
app.use("/cart",cartApis)
let port = 8080;
app.listen(port, () => {
    console.log('Server listening on port:', port);
});