const express = require("express");
const {
    saveList,
    fetchList,
    deleteList,
    updateList,
} = require("../controller/listController");

const listRouter = express.Router();

listRouter.post("/save", saveList);
listRouter.post("/fetch", fetchList);
listRouter.post("/delete", deleteList);
listRouter.post("/update", updateList);

module.exports = listRouter;
