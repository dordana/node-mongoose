const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://admin:admin@form-builder-v6nvs.mongodb.net:27017/test?retryWrites=true&w=majority", {
        useMongoClient: true,
    },
    (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("connection successful");
        }
    }
)