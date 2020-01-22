const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');
const formRoutes = require("./api/routes/forms");
const connection = mongoose.connect(
    "mongodb+srv://any:any123@form-builder-v6nvs.mongodb.net/formBuilder?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

mongoose.connection.on('connected', () => {
    console.log('formBuilder DB - connected successfully');
});
mongoose.connection.on('error', (err) => {
    console.log('formBuilder DB - error has occurred', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('formBuilder DB - disconnected successfully');
});
mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
app.use("/forms", formRoutes);
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;