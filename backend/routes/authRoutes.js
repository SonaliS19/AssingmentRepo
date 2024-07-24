const express = require("express");
const { signup, login } = require("../controller/authControllers.js");

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/signup", signup);

module.exports = authRouter;
