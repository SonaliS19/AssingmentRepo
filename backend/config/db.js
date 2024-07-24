const mongoose = require("mongoose");

const uri =
    "mongodb+srv://<username>:<password>@threadswaphub.hgpho6l.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=ThreadSwapHub";

let dbURL = uri.replace("<username>", process.env.DB_USERNAME);
dbURL = dbURL.replace("<password>", process.env.DB_PASSWORD);
dbURL = dbURL.replace("<dbName>", process.env.DB_NAME);

mongoose
    .connect(dbURL)
    .then(() => {
        console.log(
            "----------------- DataBase Connected ----------------------"
        );
    })
    .catch((err) => {
        console.log("DB Connect Failed:\n");
        console.log(err);
    });
